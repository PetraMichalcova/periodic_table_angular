import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import cards from 'src/prvky2.json';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

interface Prvky {  
  number: Number,  
  symbol: String,  
  element: String,  
  group: String,
  classGroup: String;
  skupina: String;
  perioda: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyAngularApp';

 cards: Prvky[] = cards;
 prvkyLookingFor = {} as Prvky;
 index: number=0;
 matched: String[]=[];
 advise: String="";
 advise2: String="";
 change: Number=0;
 isShining: Boolean=false;
 sound="assets/Hey_Ya_OutKast.mp3"

 faArrowCircleRight=faArrowCircleRight;

ngOnInit(): void {
  this.cards = this.shuffleArray(this.cards);
  this.vypis(this.cards[0]);
 }

/*setupCards(): void {
  this.cards.forEach((prvky) => {  //jedno pole pre samotnú hru naplnené defaultne 
    const prvkyJeden: prvkyData = {
      nazov: prvky.nazov
      /*imageId: image.id,
      state: 'default',
      sound: image.sound,
      path: image.path,
      preklad: image.preklad,
      front: image.front   }; */
   

  /*  this.cards.push({ ...prvkyJeden });
this.cards = this.shuffleArray(this.cards);
 }
  }); */

  console = console;

 shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  vypis(prvky:Prvky) {
    this.prvkyLookingFor=prvky;
  }



  clicked(prvky:FormGroup) {
    if(this.prvkyLookingFor.skupina==prvky.controls['skupina'].value && this.prvkyLookingFor.perioda==prvky.controls['perioda'].value) {
      this.index=this.index+1;
      this.matched.push(this.prvkyLookingFor.symbol);
      this.prvkyLookingFor=this.cards[this.index];
      
      
      this.advise="";
      this.isShining=false;
       
      this.console.log(prvky)

    }
    if(this.matched.length==64) {
      this.calculatedClasses();
      let audio=new Audio();
      audio.src=this.sound;
      audio.load(); audio.play();
    }
  }
  

/*clicked(prvky:String) {
  if(this.prvkyLookingFor==prvky) {
    this.prvkyLookingFor=" ";
    this.matched.push(prvky);
  }
} */

  clicked2() {
   
  this.advise=this.prvkyLookingFor.group; 
  this.advise2=this.prvkyLookingFor.classGroup; 
  this.isShining=true;

}

calculatedClasses() {
  if(this.matched.length==64) {
    return {
      "drzic1": true,
      "drzic": false
    }
  } else {
    return "drzic"
  }
}

reload() {
  window.location.reload();
}

}
  
    
  
  
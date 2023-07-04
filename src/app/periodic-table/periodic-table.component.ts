import { Component, EventEmitter, OnInit,Output, Input } from '@angular/core';
import prvky from 'src/prvky.json';

interface Prvky {  
    number: Number,  
    symbol: String,  
    element: String,  
    group: String,
    classGroup: String;
}  

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})

export class PeriodicTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() isClicked = new EventEmitter<String>();
  @Input() data:String[]=[];
  @Input() dataShine:Boolean=false;
  @Input() dataAdvice:String="";

  prvky: Prvky[] = prvky;  

  array: String[]=[];

  console=console;

  cardClicked(prvky:String) {
    this.array.push(prvky); //extractedValue.push(arr[i][prop]); 
    this.isClicked.emit(prvky);
  }

  calculatedClasses(prvky:String) {
    if(this.data.indexOf(prvky)>-1) {
      return {
          'text': false,
          'najdeny': true
      };
    }
    return null;
  }

  calculatedClassesShine(index:Number,prvky:String) {
    this.console.log(prvky,this.dataAdvice);
     if((index<91 || index>108) && this.dataShine==false) { return 'box box-'+index+' '+prvky; }
     else if((index>=91 || index<=108)  && this.dataShine==false) { return 'box-'+index+' '+prvky; } 
    else if((index<91 || index>108) && this.dataShine==true && prvky==this.dataAdvice) { return  'boxShining boxShining-'+index+' '+prvky; }
    else if((index>=91 || index<=108)  && this.dataShine==true && prvky==this.dataAdvice) { return 'boxShining-'+index+' '+prvky; } 
    else if((index<91 || index>108) && this.dataShine==true) { return 'box box-'+index+' '+prvky; }
     else if((index>=91 || index<=108)  && this.dataShine==true) { return 'box-'+index+' '+prvky; }
    return null;
  }
  
}

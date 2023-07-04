import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import prvky from 'src/prvky2.json';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



interface Prvky {  
    number: Number,  
    symbol: String,  
    element: String,  
    group: String,
    classGroup: String;
}  


@Component({
  selector: 'app-prvky',
  templateUrl: './prvky.component.html',
  styleUrls: ['./prvky.component.css']
})

export class PrvkyComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    skupina: '',  
    perioda: '',
      
  });

  constructor(private formBuilder: FormBuilder,) { }
  
  @Input() data = {} as Prvky;
  @Output() isClickedAdvice = new EventEmitter();
  @Output() isClickedForm = new EventEmitter();

  prvky: Prvky[] = prvky;  

  advise: String="";
  comparator: String="";

  ngOnInit(): void {
   // this.comparator=this.data.nazov; //box-6 box-6
   }

   isClickedAdv(): void {
   this.isClickedAdvice.emit();
   }

   isClickedF(): void {
   this.isClickedForm.emit(this.checkoutForm);
   this.checkoutForm.setValue({skupina:'',perioda: ''});
   }

   /*advice() {
    if(this.comparator==this.data.nazov) { //box-6 box-6
    this.advise=this.data.skupina; 
    this.comparator=this.data.nazov;    
  }
    else {
      this.advise="";
    }
   } */
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  person={
    name: "shyam",
    age: 19,
    role: "studnet",
  } 
 price:number =100;
 quantity:number =3;
 tax:number=8.5;
 editMode:boolean=true;
 
  calcualteTotal(){
   return this.price* this.quantity;
  }
 
  calculateTax(){
   return (this.price* this.tax)/100;
  }
}

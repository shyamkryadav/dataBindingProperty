import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  count=0;
  clickMehtod(){
    this.count++;
  }

  values:string ="shyam";
  changeValue(val:string){
    this.values=val;
  }

  eventValue:string=''
  impChange(event:any){
    // console.log(event)
    // console.log(event.target.value)
    this.eventValue=event.target.value

  }

  evetSelectvalue:string=''
  onSeletChnage(event:any){
    this.evetSelectvalue=event.target.value
  }


  onScroll(event:any){
    console.log(event)

  }
}

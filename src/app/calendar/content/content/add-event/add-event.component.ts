import { Component, OnInit } from '@angular/core';
import { Event } from '../../../../models/event.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

   public event: Event;
   public showEnd: boolean;

  constructor() {
    this.event = new Event({});
    this.event.inicio= new Date();
    this.event.fim= new Date();
    this.showEnd= false;

  }

  ngOnInit() {
  }
  addEvent(){
    if(!this.showEnd){
      this.event.fim=null;
    }
    console.log(this.event);
  }

}

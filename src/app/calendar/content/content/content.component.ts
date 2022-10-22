import { Component, OnInit, Input } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { EventService } from 'src/app/service/event.service';
import { IEvent } from 'src/app/interfaces/ievent.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() events: any;
  //public events:any[];
  public options: any;

  constructor(private service: EventService) {


 this.service.getEvents().subscribe(result => {
    this.events = result

      console.log(this.events)
  });


 /*this.events = [
   {
      id: '2',
      title: "Evento 99",
      start: new Date("10-22-2022 10:10:10")
    },
    {
      id: '4',
      title: "Evento 1",
      start: new Date("10/11/2022 14:45:10")
    }
  ]*/
  console.log(this.events)
}

  ngOnInit() {
  }

}

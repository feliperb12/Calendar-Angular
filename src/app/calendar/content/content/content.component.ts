import { Component, OnInit, Input } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() events: any;
  public options: any;

  constructor() { this.options = {
    plugins: [dayGridPlugin, timeGridPlugin,interactionPlugin],
    defaulDate: new Date(),
    locale: esLocale,
    header:{
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true
  }

  this.events = [
    {
      title: "Evento 1",
      start: new Date(),
      description: "Evento 1"
    },
    {
      title: "Evento 2",
      start: new Date(new Date().getTime() + 86400000 ),
      description: "Evento 3"
    },
    {
      title: "Evento 3",
      start: new Date(new Date().getTime() + (86400000 * 2) ),
      end: new Date(new Date().getTime() + (86400000 * 3) ),
      description: "Evento 3"
    },

 ]}

  ngOnInit() {
  }

}

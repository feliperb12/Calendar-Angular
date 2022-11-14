import { Component, Input, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import esLocale from '@fullcalendar/core/locales/es';
import { IEvent } from '../interfaces/ievent.interface';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  title = 'Calendario Mayk';
  @Input() events: IEvent[];
  public options: any;

  constructor(private service: EventService) {

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin,interactionPlugin],
      defaulDate: 'dd-MM-YY HH:mm:ss',
      timeZone:'local',
      locale: 'pt-br',
      header:{
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },buttonText: {
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Hoje',
        list: 'Lista'
      },
      editable: false
    }
  }



  ngOnInit() {
  }

}

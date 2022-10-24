import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/ievent.interface';

@Component({
  selector: 'app-read-event',
  templateUrl: './read-event.component.html',
  styleUrls: ['./read-event.component.css']
})
export class ReadEventComponent implements OnInit {

  events: IEvent[] = []

  constructor() { }

  ngOnInit(): void {
  }

}

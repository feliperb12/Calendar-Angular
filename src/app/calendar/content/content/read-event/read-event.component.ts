import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from 'src/app/interfaces/ievent.interface';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-read-event',
  templateUrl: './read-event.component.html',
  styleUrls: ['./read-event.component.css']
})
export class ReadEventComponent implements OnInit {

  events: IEvent[] = [];
  displayedColumns: string[] = ['id', 'start', 'title', 'acoes'];

  constructor(private service: EventService,private router : Router) {
  }

  ngOnInit(): void {

    this.findAll();

  }
  findAll(){
    this.service.getEvents().subscribe(resposta =>{
      console.log(resposta);
      this.events = resposta;
    })
  }

  navegarParaUpdateEvent(){
    this.router.navigate(["update/{id}"])
  }

}

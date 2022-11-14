import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from 'src/app/interfaces/ievent.interface';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  eventI: IEvent = {
    id:'',
    start: new Date(),
    title:'',
  }
  constructor( private service: EventService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.eventI.id = this.actRoute.snapshot.paramMap.get('id')!;
    this.findById();
  }
  findById():void{
    this.service.findById(this.eventI.id!).subscribe((resposta)=>{
      this.eventI.start=resposta.start;
      this.eventI.title=resposta.title;
      console.log(resposta);
    })
  }
  delete():void{
    this.service.delete(this.eventI.id!).subscribe((resposta)=>{
      this.router.navigate(['/listEvents'])
      this.service.mensagem('Evento deletado com sucesso!')
    }, err =>{
      this.service.mensagem(err.error.error)
    })
  }

  cancel():void{
    this.router.navigate(['/listEvents']);
  }


}

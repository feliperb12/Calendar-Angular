import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from 'src/app/interfaces/ievent.interface';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventI: IEvent = {
    id:'',
    start: new Date(),
    title:'',
  }

  constructor(private fb: FormBuilder,
    private service: EventService,
    private actRoute: ActivatedRoute,
    private router: Router) {
    }

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
  update(): void{
    this.service.update(this.eventI).subscribe((resposta)=>{
      this.router.navigate(['/events'])
      this.service.mensagem('Evento atualizado com sucesso!')
    }, err=>{
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamenta')
    }
    )
  }


  cancel():void{
    this.router.navigate(['/listEvents']);
  }

}

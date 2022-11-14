import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;


   constructor(private fb: FormBuilder,
    private eventService: EventService,
    private actRoute: ActivatedRoute,
    private router: Router) {
      this.eventForm = this.fb.group({
        id: '',
        start: new Date(),
        title: ''
      })

  }
//Desse formato que tem que ser a data "YYYY-MM-DDT00:00:00"

  ngOnInit() {
  }

  addEvent():void{

    this.eventService.create(this.eventForm.value).subscribe(result => {
      console.log(`evento ${result.id} foi cadastrado com sucesso !`)
      this.eventService.mensagem('Evento criado com sucesso!');
    },  err =>{
      for(let i=0; i<err.error.errors.length; i++){
        this.eventService.mensagem(err.error.errors[i].message)
      }
    }, () => {
      this.router.navigate(['/']);
    })


  }

}

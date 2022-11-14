import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IContas } from 'src/app/interfaces/contas.interface';
import { ContasService } from 'src/app/service/contas.service';

@Component({
  selector: 'app-add-contas',
  templateUrl: './add-contas.component.html',
  styleUrls: ['./add-contas.component.css']
})
export class AddContasComponent implements OnInit {
contas: IContas = {
  mes: null,
  descricao: '',
  valor: null,
  dataDaConta: ''
}
  constructor(private service: ContasService, private router : Router) { }

  ngOnInit(): void {
  }
  cancel():void{
    this.router.navigate([`/listarContas`])
  }

  create(): void {
    this.service.create(this.contas).subscribe((resposta) => {
      this.router.navigate([`/listarContas`])
      this.service.mensagem('Conta criada com sucesso!');
    }, err =>{
      for(let i=0; i<err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContas } from 'src/app/interfaces/contas.interface';
import { ContasService } from 'src/app/service/contas.service';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-delete-contas',
  templateUrl: './delete-contas.component.html',
  styleUrls: ['./delete-contas.component.css']
})
export class DeleteContasComponent implements OnInit {

  contas: IContas = {
    mes: null,
    descricao: '',
    valor: null,
    dataDaConta: ''
  }
  constructor(private service: ContasService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.contas.id = this.actRoute.snapshot.paramMap.get('id')!;
    this.findById();
  }
  findById(): void {
    this.service.findById(this.contas.id!).subscribe((resposta) => {
      this.contas.mes = resposta.mes;
      this.contas.descricao = resposta.descricao;
      this.contas.valor = resposta.valor;
      this.contas.dataDaConta = resposta.dataDaConta;
      console.log(resposta);
    })
  }
  delete(): void {
    this.service.delete(this.contas.id!).subscribe((resposta) => {
      this.router.navigate(['/listarContas'])
      this.service.mensagem('Conta deletada com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['/listarContas']);
  }

}

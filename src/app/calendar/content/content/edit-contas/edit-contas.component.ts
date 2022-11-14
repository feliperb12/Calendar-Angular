import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContas } from 'src/app/interfaces/contas.interface';
import { ContasService } from 'src/app/service/contas.service';

@Component({
  selector: 'app-edit-contas',
  templateUrl: './edit-contas.component.html',
  styleUrls: ['./edit-contas.component.css']
})
export class EditContasComponent implements OnInit {

  contas: IContas = {
    id:'',
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

  findById():void{
    this.service.findById(this.contas.id!).subscribe((resposta)=>{
      this.contas.mes=resposta.mes;
      this.contas.descricao=resposta.descricao;
      this.contas.valor= resposta.valor;
      this.contas.dataDaConta=resposta.dataDaConta;
      console.log(resposta);
    })
  }

  update(): void{
    this.service.update(this.contas).subscribe((resposta)=>{
      this.router.navigate(['/listarContas'])
      this.service.mensagem('Conta atualizada com sucesso!')
    }, err=>{
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamenta')
    }
    )
  }


  cancel():void{
    this.router.navigate(['/listarContas']);
  }

}

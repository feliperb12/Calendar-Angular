import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContas } from 'src/app/interfaces/contas.interface';
import { ContasService } from 'src/app/service/contas.service';

interface MesesDoAno {
  mes: String;
  nomeMes: String;
}

@Component({
  selector: 'app-read-contas',
  templateUrl: './read-contas.component.html',
  styleUrls: ['./read-contas.component.css']
})
export class ReadContasComponent implements OnInit {

  selectedValue: string;

  contas: IContas[]= [];
  displayedColumns: string[] = ['id', 'mes', 'descricao', 'valor','dataDaConta', 'acoes'];
  id_mes: String = '';

  constructor(private service:ContasService, private router:Router,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id_mes = this.route.snapshot.paramMap.get('id_mes')!;
    this.findAll();
  }

findAll():void{
  this.service.findAll().subscribe(resposta=>{
    console.log(resposta);
    this.contas=resposta;
  })
}

navegarParaContasCreate():void{
  this.router.navigate(["contas/create"]);
}

meses: MesesDoAno[] = [
  { mes: '1', nomeMes: "Janeiro" },
  { mes: '2', nomeMes: "Fevereiro" },
  { mes: '3', nomeMes: "Março" },
  { mes: '4', nomeMes: "Abril" },
  { mes: '5', nomeMes: "Maio" },
  { mes: '6', nomeMes: "Junho" },
  { mes: '7', nomeMes: "Julho" },
  { mes: '8', nomeMes: "Agosto" },
  { mes: '9', nomeMes: "Setembro" },
  { mes: '10', nomeMes: "Outubro" },
  { mes: '11', nomeMes: "Novembro" },
  { mes: '12', nomeMes: "Dezembro" },
];


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IContas } from 'src/app/interfaces/contas.interface';
import { ContasService } from 'src/app/service/contas.service';

interface MesesDoAno {
  mes: String;
  nomeMes: String;
}

@Component({
  selector: 'app-read-mes-contas',
  templateUrl: './read-mes-contas.component.html',
  styleUrls: ['./read-mes-contas.component.css']
})
export class ReadMesContasComponent implements OnInit {

  selectedValue: string;
  contas: IContas[] = [];
  displayedColumns: string[] = ['id', 'mes', 'descricao', 'valor', 'dataDaConta', 'acoes'];
  id_mes: String = '';

  valor: Number;

  constructor(private service: ContasService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id_mes = this.route.snapshot.paramMap.get('id_mes')!;
    this.findByMes();
    this.getValores();

  }

  getValores(){
    this.service.somaValores(this.id_mes!).subscribe(resposta => {
      this.valor = resposta;
      console.log(resposta )
    })
  }

  findByMes(): void {

    this.service.findByMes(this.id_mes!).subscribe(resposta => {
      this.contas = resposta;
      console.log(resposta);
    }
    )
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

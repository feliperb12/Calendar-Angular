import { IContas } from './../../../interfaces/contas.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Calendario Mayk';
  constructor() { }

  ngOnInit(): void {
  }

}

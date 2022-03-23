import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../feature/usuario/shared/model/usuario";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public id: string | null;
  public nombre: string | null;
  constructor() { }

  ngOnInit(): void {
   this.id = sessionStorage.getItem('id');
   this.nombre = sessionStorage.getItem('nombre');
  }

}

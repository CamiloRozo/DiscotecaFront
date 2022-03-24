import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public id: string | null;
  public nombre: string | null;

  ngOnInit(): void {
   this.id = sessionStorage.getItem('id');
   this.nombre = sessionStorage.getItem('nombre');
  }

}

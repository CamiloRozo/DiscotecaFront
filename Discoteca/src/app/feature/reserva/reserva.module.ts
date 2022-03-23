import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { HacerReservaComponent } from './components/hacer-reserva/hacer-reserva.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListarReservaComponent,
    HacerReservaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ReservaModule { }

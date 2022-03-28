import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { HacerReservaComponent } from './components/hacer-reserva/hacer-reserva.component';
import {FormsModule} from '@angular/forms';
import { ListarReservaUsuarioComponent } from './components/listar-reserva-usuario/listar-reserva-usuario.component';
import { EliminarReservaComponent } from './components/eliminar-reserva/eliminar-reserva.component';
import {RouterModule} from '@angular/router';
import {ReservaService} from './shared/service/reserva.service';
import {ReservaRoutingModule} from './reserva-routing.module';



@NgModule({
  declarations: [
    ListarReservaComponent,
    HacerReservaComponent,
    ListarReservaUsuarioComponent,
    EliminarReservaComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReservaRoutingModule
    ],
  providers: [ReservaService]
})
export class ReservaModule { }

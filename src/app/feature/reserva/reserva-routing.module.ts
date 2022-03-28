import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListarReservaComponent} from './components/listar-reserva/listar-reserva.component';
import {HacerReservaComponent} from './components/hacer-reserva/hacer-reserva.component';
import {ListarReservaUsuarioComponent} from './components/listar-reserva-usuario/listar-reserva-usuario.component';

const routes: Routes = [
  { path: 'listar-reservas', component: ListarReservaComponent },
  { path: 'reservar', component: HacerReservaComponent },
  { path: 'reserva-usuario', component: ListarReservaUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule {}

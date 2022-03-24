import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VerificarUsuarioComponent} from "./feature/usuario/components/verificar-usuario/verificar-usuario.component";
import {MenuComponent} from "./shared/components/menu/menu.component";
import {RegistrarUsuarioComponent} from "./feature/usuario/components/registrar-usuario/registrar-usuario.component";
import {ListarReservaComponent} from "./feature/reserva/components/listar-reserva/listar-reserva.component";
import {HacerReservaComponent} from "./feature/reserva/components/hacer-reserva/hacer-reserva.component";
import {
  ListarReservaUsuarioComponent
} from "./feature/reserva/components/listar-reserva-usuario/listar-reserva-usuario.component";

const routes: Routes = [
  { path: 'login', component: VerificarUsuarioComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'registro', component: RegistrarUsuarioComponent },
  { path: 'listar-reservas', component: ListarReservaComponent },
  { path: 'reservar', component: HacerReservaComponent },
  { path: 'reserva-usuario', component: ListarReservaUsuarioComponent },
  { path: '**', component: VerificarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

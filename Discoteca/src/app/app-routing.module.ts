import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VerificarUsuarioComponent} from "./feature/usuario/components/verificar-usuario/verificar-usuario.component";
import {MenuComponent} from "./shared/components/menu/menu.component";

const routes: Routes = [
  { path: 'login', component: VerificarUsuarioComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', component: VerificarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

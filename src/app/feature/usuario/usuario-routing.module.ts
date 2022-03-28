import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {VerificarUsuarioComponent} from './components/verificar-usuario/verificar-usuario.component';
import {RegistrarUsuarioComponent} from './components/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  { path: 'login', component: VerificarUsuarioComponent },
  { path: 'registro', component: RegistrarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {}

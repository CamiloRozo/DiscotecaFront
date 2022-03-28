import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'usuario', loadChildren: () => import('./feature/usuario/usuario.module').then(mod => mod.UsuarioModule)
  },
  {
    path: 'menu', loadChildren: () => import('./shared/shared.module').then(mod => mod.SharedModule)
  },
  {
    path: 'reserva', loadChildren: () => import('./feature/reserva/reserva.module').then(mod => mod.ReservaModule)
  },
  {
    path: '**',
    redirectTo: 'usuario/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

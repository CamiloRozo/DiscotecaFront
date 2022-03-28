import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import {CoreModule} from '../../core/core.module';
import {UsuarioService} from './shared/service/usuario.service';
import { VerificarUsuarioComponent } from './components/verificar-usuario/verificar-usuario.component';
import {FormsModule} from '@angular/forms';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
    ListarUsuariosComponent,
    VerificarUsuarioComponent,
    RegistrarUsuarioComponent
  ],
    imports: [
        CommonModule,
        CoreModule,
        FormsModule,
        UsuarioRoutingModule
    ],
    exports: [
        ListarUsuariosComponent,
        VerificarUsuarioComponent
    ],
  providers: [UsuarioService]
})
export class UsuarioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import {CoreModule} from "../../core/core.module";
import {UsuarioService} from "./shared/service/usuario.service";
import { VerificarUsuarioComponent } from './components/verificar-usuario/verificar-usuario.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListarUsuariosComponent,
    VerificarUsuarioComponent
  ],
    imports: [
        CommonModule,
        CoreModule,
        FormsModule
    ],
    exports: [
        ListarUsuariosComponent,
        VerificarUsuarioComponent
    ],
  providers: [UsuarioService]
})
export class UsuarioModule { }

import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../shared/service/usuario.service';
import {Usuario} from '../../shared/model/usuario';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.sass']
})
export class ListarUsuariosComponent implements OnInit {
  public listaUsuarios: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService) {
  }
  ngOnInit(): void {
    this.listaUsuarios = this.usuarioService.consultar();
  }

}

import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../shared/service/usuario.service';
import {Usuario} from '../../shared/model/usuario';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.sass']
})
export class ListarUsuariosComponent implements OnInit {
  public listaUsuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
     this.usuarioService.consultar().subscribe((res: Usuario[]) => this.listaUsuarios = res);
  }

}

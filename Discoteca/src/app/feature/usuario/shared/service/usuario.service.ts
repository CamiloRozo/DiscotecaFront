import {Injectable} from '@angular/core';
import {HttpService} from "../../../../core/services/http.service";
import {Usuario} from "../model/usuario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private HttpService: HttpService) {
  }

  private url = 'http://localhost:8083/discoteca/usuarios';

  public consultar(): Observable<Usuario[]> {
    return this.HttpService.get<Usuario[]>(this.url);
  }

  public  consultarCredenciales(credenciales: Object): any {
    return this.HttpService.put(this.url, credenciales);
  }

  public registrarUsuario (usuario: Usuario): any {
    return this.HttpService.post<Usuario, number>(this.url, usuario);
  }


}

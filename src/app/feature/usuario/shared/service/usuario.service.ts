import {Injectable} from '@angular/core';
import {HttpService} from '../../../../core/services/http.service';
import {Usuario} from '../model/usuario';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'any',

})
export class UsuarioService {
  constructor(private httpService: HttpService) {
  }

  private url = '/discoteca/usuarios';

  public consultar(): Observable<Usuario[]> {
    return this.httpService.get<Usuario[]>(this.url);
  }

  public consultarCredenciales(credenciales: object): any {
    return this.httpService.put(this.url, credenciales);
  }

  public registrarUsuario(usuario: Usuario): any {
    return this.httpService.post<Usuario, number>(this.url, usuario);
  }


}

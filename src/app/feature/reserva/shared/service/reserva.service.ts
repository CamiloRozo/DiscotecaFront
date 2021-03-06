import {Injectable} from '@angular/core';
import {HttpService} from '../../../../core/services/http.service';
import {Observable} from 'rxjs';
import {Reserva} from '../model/reserva';

@Injectable({
  providedIn: 'any'
})
export class ReservaService {

  constructor(private httpService: HttpService) {
  }

  private url = '/discoteca/reserva';

  public consultarReservas(): Observable<Reserva[]> {
    return this.httpService.get<Reserva[]>(this.url);
  }

  public hacerReserva(reserva: Reserva): any {
    return this.httpService.post<Reserva, number>(this.url, reserva);
  }

  public listarReservaUsuario(reserva: any): any {
    return this.httpService.post(`${this.url}/usuario`, reserva);
  }

  public eliminarReserva(id: number): any {
    return this.httpService.delete(`${this.url}/${id}`);
  }
}

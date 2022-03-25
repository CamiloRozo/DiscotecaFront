import {Component, Input} from '@angular/core';
import {ReservaService} from '../../shared/service/reserva.service';

@Component({
  selector: 'app-eliminar-reserva',
  templateUrl: './eliminar-reserva.component.html',
  styleUrls: ['./eliminar-reserva.component.sass']
})
export class EliminarReservaComponent {
  @Input() idReserva: any;

  constructor(private reservaService: ReservaService) {
  }


  async onClick(): Promise<void> {
    try {
      await this.reservaService.eliminarReserva(this.idReserva).toPromise();
      location.reload();
    } catch (e) {
      alert('something went wrong');
    }
  }

}

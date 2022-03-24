import {Component, OnInit} from '@angular/core';
import {ReservaService} from "../../shared/service/reserva.service";
import {Reserva} from "../../shared/model/reserva";

@Component({
  selector: 'app-listar-reserva-usuario',
  templateUrl: './listar-reserva-usuario.component.html',
  styleUrls: ['./listar-reserva-usuario.component.scss']
})
export class ListarReservaUsuarioComponent implements OnInit {
  public reservas: Reserva[];

  constructor(private reservaService: ReservaService) {
  }

  ngOnInit(): void {
    this.reservaService.listarReservaUsuario({
      idUsuario: sessionStorage.getItem('id')
    }).subscribe((data: Reserva[]) => {
      this.reservas = data;
    });
  }

}

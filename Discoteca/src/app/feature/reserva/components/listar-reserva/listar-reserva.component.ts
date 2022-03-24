import { Component, OnInit } from '@angular/core';
import {ReservaService} from '../../shared/service/reserva.service';
import {Reserva} from '../../shared/model/reserva';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.sass']
})
export class ListarReservaComponent implements OnInit {

  constructor(private reservaService: ReservaService) { }
  public listaReservas: Reserva[];
  ngOnInit(): void {
    this.reservaService.consultarReservas().subscribe((res: Reserva[]) => this.listaReservas = res);

  }

}

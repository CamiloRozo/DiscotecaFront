import {Component, OnInit} from '@angular/core';
import {ReservaService} from '../../shared/service/reserva.service';
import {Reserva} from '../../shared/model/reserva';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-hacer-reserva',
  templateUrl: './hacer-reserva.component.html',
  styleUrls: ['./hacer-reserva.component.scss']
})
export class HacerReservaComponent implements OnInit {
  reserva: Reserva;
  public nombre = sessionStorage.getItem('nombre');
  public id = sessionStorage.getItem('id');
  public fechaEvento: string;
  public modal = true;

  constructor(private reservaService: ReservaService, private router: Router) {
  }

  ngOnInit(): void {
    this.fechaEvento = this.ajustarFechas();
  }

  public async onClickSubmit(data: any): Promise<void> {
    try {
      const reserva = this.setData(data);
      const response = await this.reservaService.hacerReserva(reserva).toPromise();
      this.modal = false;
      setTimeout(() => {
        this.modal = true;
      }, 10000);
    } catch (e) {
      alert('something went wrong with the reserve');
    }

  }

  private ajustarFechas(): any {
    const date = new Date();
    const diaActual = date.getDay();
    const diaFinal = 7 - diaActual;
    date.setDate(date.getDate() + diaFinal);
    const datePipeEn = new DatePipe('en-US');
    return datePipeEn.transform(date, 'yyyy-MM-dd');
  }

  private setData(data: any): Reserva {
    this.reserva = {
      nombre: this.nombre,
      categoria: data.categoria,
      fechaReserva: this.fechaEvento,
      precio: undefined,
      obsequio: undefined,
      idUsuario: this.id,
      id: undefined
    };
    return this.reserva;
  }

  public async goBack(): Promise<void> {
    await this.router.navigate(['menu']);
  }


}

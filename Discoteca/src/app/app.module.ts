import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from '@angular/common/http';
import {UsuarioModule} from './feature/usuario/usuario.module';
import {SharedModule} from './shared/shared.module';
import {ReservaModule} from './feature/reserva/reserva.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UsuarioModule,
    ReservaModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

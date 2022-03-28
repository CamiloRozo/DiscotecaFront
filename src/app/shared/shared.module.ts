import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import {SharedRoutingModule} from './shared-routing.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule
  ],

})
export class SharedModule {
}

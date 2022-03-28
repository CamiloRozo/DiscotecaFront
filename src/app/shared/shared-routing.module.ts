import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MenuComponent} from './components/menu/menu.component';

console.warn('cargo el modulo shared');
const routes: Routes = [
  {path: '', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}

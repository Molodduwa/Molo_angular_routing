import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScarpeComponent } from './scarpe/scarpe.component';
import { MaglietteComponent } from './magliette/magliette.component';
const routes: Routes = [
  { path: 'magliette', component: MaglietteComponent},
  { path: 'scarpe', component: ScarpeComponent},
  { path: '', redirectTo: '/scarpe', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

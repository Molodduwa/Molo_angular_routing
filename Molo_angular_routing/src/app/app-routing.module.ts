import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScarpeComponent } from './scarpe/scarpe.component';
import { MaglietteComponent } from './magliette/magliette.component';
const routes: Routes = [
  { path: 'magliette', component: ScarpeComponent},
  { path: 'scarpe', component: MaglietteComponent},
  { path: '', redirectTo: '/scarpe', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

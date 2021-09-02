import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './views/agenda/agenda.component';
import { CajaComponent } from './views/caja/caja.component';
import { HomeComponent } from './views/home/home.component';
import { TurnoComponent } from './views/turno/turno.component';
import { UsuarioComponent } from './views/usuario/usuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'caja', component: CajaComponent},
  {path: 'turno', component: TurnoComponent},
  {path: 'usuario', component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

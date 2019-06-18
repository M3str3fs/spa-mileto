import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  {
    path: '', component: NavComponent,
    children: [
      {path: 'cadastro-cliente', component:CadastroClienteComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'testao', component: LoginComponent },
  // { path: 'dashboard-fazendas', component: DashboardFazendasComponent },
  // { path: 'fazenda-detalhes', component: FazendaDetalhesComponent },
  // { path: 'cadastro-cliente', component: CadastroClienteComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

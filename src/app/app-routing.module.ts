import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaComponent } from './tarefa/tarefa.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PropriedadeComponent } from './propriedade/propriedade.component';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'tarefas', component: TarefaComponent, canActivate:[AuthGuardService]},
  {path:"login",component:LoginComponent},
  { path: 'categorias', component: CategoriaComponent, canActivate:[AuthGuardService]},
  {path: 'propriedades', component: PropriedadeComponent, canActivate:[AuthGuardService]},
  { path: 'tarefa/:propriedades', component: TarefaComponent },
  {path:'cadastro',component:CadastroComponent},
  {path:'',redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
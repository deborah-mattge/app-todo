import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaComponent } from './tarefa/tarefa.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PropriedadeComponent } from './propriedade/propriedade.component';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: 'tarefas', component: TarefaComponent },
  { path: 'categorias', component: CategoriaComponent, canActivate:[AuthGuardService]},
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' },
  {path: 'propriedades', component: PropriedadeComponent},
  { path: 'tarefa/:propriedades', component: TarefaComponent },
  {path:'cadastro',component:CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
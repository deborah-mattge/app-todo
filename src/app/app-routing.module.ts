import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaComponent } from './tarefa/tarefa.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  { path: 'tarefas', component: TarefaComponent },
  { path: 'categorias', component: CategoriaComponent },
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
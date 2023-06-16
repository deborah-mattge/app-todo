import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaComponent } from './tarefa/tarefa.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PropriedadeComponent } from './propriedade/propriedade.component';

const routes: Routes = [
  { path: 'tarefas', component: TarefaComponent },
  { path: 'categorias', component: CategoriaComponent },
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' },
  {path: 'propriedades', component: PropriedadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
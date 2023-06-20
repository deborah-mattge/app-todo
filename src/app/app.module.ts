import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TarefaComponent } from 'src/app/tarefa/tarefa.component';
import { CategoriaComponent } from 'src/app/categoria/categoria.component';
import { AppRoutingModule } from './app-routing.module';
import { PropriedadeComponent } from './propriedade/propriedade.component';
import { userRepository } from 'src/repositories/user.repository';



@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    CategoriaComponent,
    PropriedadeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    userRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

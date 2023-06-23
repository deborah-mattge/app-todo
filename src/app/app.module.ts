import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TarefaComponent } from 'src/app/tarefa/tarefa.component';
import { CategoriaComponent } from 'src/app/categoria/categoria.component';
import { AppRoutingModule } from './app-routing.module';
import { PropriedadeComponent } from './propriedade/propriedade.component';
import { UserRepository } from 'src/repositories/user.repository';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from 'src/services/auth-guard.service';



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
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    UserRepository,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

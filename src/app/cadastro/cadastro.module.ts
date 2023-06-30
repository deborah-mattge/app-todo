import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';

@NgModule({
  imports: [
    CommonModule
  ],declarations: [CadastroComponent], 
  exports: [
    CadastroComponent,
  ]
})
export class CadastroModule { }

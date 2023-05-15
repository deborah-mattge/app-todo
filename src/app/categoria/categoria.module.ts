import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoriaComponent], 
  exports: [
    CategoriaComponent
  ]
})
export class CategoriaModule { }

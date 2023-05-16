import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  novaCategoria: string;
  categorias: string[] = [];
    
    
  cadastrarCategoria(){
    console.log(this.novaCategoria)
    this.categorias.push(this.novaCategoria);
    console.log(this.categorias)  
   this.novaCategoria='';
  
    

  }
  

}

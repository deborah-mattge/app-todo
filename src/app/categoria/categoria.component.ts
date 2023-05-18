import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.carregarCategorias();
  }

  carregarCategorias() {
    const salvo = localStorage.getItem('categoria');
    if (salvo) {
      this.categorias = JSON.parse(salvo);
    }
  }
  novaCategoria: string;
  categorias: string[] = [];
    
    
  cadastrarCategoria(){
    console.log(this.novaCategoria)
    this.categorias.push(this.novaCategoria);
    console.log(this.categorias)  
   this.novaCategoria='';
    this.salvar();
    

  }
  salvar(){
    localStorage.setItem('categoria',JSON.stringify(this.categorias));
  }
  remover(indice:number){
    console.log(indice)
    this.categorias.splice(indice,1);
    this.salvar()
  }
  

}

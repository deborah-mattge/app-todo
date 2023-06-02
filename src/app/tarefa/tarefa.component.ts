import { Component, OnInit } from '@angular/core';
interface Tarefa{
  nome:string
  categoria: string
}

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const tarefas = localStorage.getItem('tarefa');
    if (tarefas) {
      this.listas = JSON.parse(tarefas);
    }

    const categoriasSalvas = localStorage.getItem('categoria');
    if (categoriasSalvas) {
      const tarefas = localStorage.getItem('tarefa');
    if (tarefas) {
      this.listas = JSON.parse(tarefas);
    }

    const categoriasSalvas = localStorage.getItem('categoria');
    if (categoriasSalvas) {
      this.categorias = JSON.parse(categoriasSalvas);
    }
    }
  }
  title = 'todo-app';
  mostraInput: boolean=true;
  categorias: any []=[];
  listas: Tarefa[]=[];
    tarefa: Tarefa ={
      nome: '',
      categoria: ''
    }
    cadastrarTarefa():void{
      const usuario: Tarefa={
        nome:this.tarefa.nome,
        categoria:this.tarefa.categoria
      }

      
      this.listas.push(usuario);
      this.salvar();
      this.tarefa.nome=''
    }
    remover(indice:number){
      console.log(indice)
      this.listas.splice(indice,1);
      this.salvar()
    }
    salvar(){
      localStorage.setItem('tarefa',JSON.stringify(this.listas));
    }

    atualizarCategoriaTarefa(tarefa: Tarefa, novaCategoria: string){
      tarefa.categoria= novaCategoria;
      this.salvar();


    }
    salvarCat(categoria: String){
      localStorage.setItem("dropC",JSON.stringify(categoria))
    }
    atualizarDrop(tarefa:Tarefa){
      tarefa.categoria=JSON.parse(localStorage.getItem('dropC'));
      this.salvar();

    }
  

  

}

import { Component, Input} from '@angular/core';
interface Tarefa{
  nome:string
  categoria: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    const tarefas = localStorage.getItem('tarefa');
    if (tarefas) {
      this.listas = JSON.parse(tarefas);
      this.listas.forEach(usuario => {
        usuario.categoria = usuario.categoria || 'to-do'; 
        this.salvar()
      });
    }
  }

  title = 'todo-app';
  mostraInput: boolean=true;
  listas: Tarefa[]=[];
    tarefa: Tarefa ={
      nome: '',
      categoria: ''
    }
    categorias: string[] = [];
    
    cadastrarTarefa():void{
      
      

      const usuario: Tarefa={
        nome:this.tarefa.nome,
        categoria:this.tarefa.categoria
      }

      
      this.listas.push(usuario);
      this.salvar();
      this.tarefa.nome=''
      console.log(this.listas);
    }
    remover(indice:number){
      console.log(indice)
      this.listas.splice(indice,1);
      this.salvar()
    }
    salvar(){
      localStorage.setItem('tarefa',JSON.stringify(this.listas));
      localStorage.setItem('categoria',JSON.stringify(this.categorias));


    }
    cadastrarCategoria(){
      console.log(this.tarefa.categoria)
      this.categorias.push(this.tarefa.categoria);
      console.log(this.categorias)  
      this.tarefa.categoria='';
      this.salvar()
      

    }
    alterarCategoria(usario: Tarefa){
      this.salvar()

    }
    
    
  
    
  
}

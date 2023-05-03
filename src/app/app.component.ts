import { Component, Input} from '@angular/core';
interface Pessoa{
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
      this.usuarios = JSON.parse(tarefas);
      this.usuarios.forEach(usuario => {
        usuario.categoria = usuario.categoria || 'to-do'; 
        this.salvar()
      });
    }
  }

  title = 'todo-app';
  mostraInput: boolean=true;
  usuarios: Pessoa[]=[];
    pessoa: Pessoa ={
      nome: '',
      categoria: ''
    }
    cadastrarUsuario():void{
      
      

      const usuario: Pessoa={
        nome:this.pessoa.nome,
        categoria:this.pessoa.categoria
      }

      
      this.usuarios.push(usuario);
      this.salvar();
      this.pessoa.nome=''
      console.log(this.usuarios);
    }
    remover(indice:number){
      this.usuarios.splice(indice,1);
      this.salvar()
    }
    salvar(){
      localStorage.setItem('tarefa',JSON.stringify(this.usuarios));

    }
    alterarCategoria(usario: Pessoa){
      this.salvar()


    }
    
    
  
    
  
}

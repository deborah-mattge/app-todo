import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';



interface Tarefa{
  nome:string
  categoria: string
  propriedades?: any;

}

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})

export class TarefaComponent implements OnInit {
  private userId: string = 'diogo.defante';
  private users: User[] = [];
  user!: User;


  constructor( private userRepository: UserRepository) {
    userRepository.getUsers().subscribe({
      next:(value)=>{
        this.users=value;
       
        
      }

    })
  
   }

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
    const propriedadesSalvas = localStorage.getItem('propriedade');

    console.log(propriedadesSalvas)
    if (propriedadesSalvas) {
      this.propriedades = JSON.parse(propriedadesSalvas);
    }

    }
 
  }
  propriedades: any []=[]
  title = 'todo-app';
  mostraInput: boolean=true;
  categorias: any []=[];
  listas: Tarefa[]=[];
  posicaoTroca: number;
    tarefa: Tarefa ={
      nome: '',
      categoria: ''
      
    }
    cadastrarTarefa():void{
      const propriedadesCopiadas = this.propriedades.map(propriedade => ({ ...propriedade, valor: propriedade.valor }));
      const usuario: Tarefa={
        nome:this.tarefa.nome,
        categoria:this.tarefa.categoria,  
        propriedades: propriedadesCopiadas
      }

      this.listas.push(usuario);
      console.log(usuario);
      this.salvar();
      for (let propriedade of usuario.propriedades) {
        console.log(propriedade.valor);
      }
      
      this.tarefa.nome='';
      for (let propriedade of this.propriedades) {
        propriedade.valor = ''; 
      }
    
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
       if (!this.hasPermission('MoveCard')) {
         alert('Não pode mover'); 
         return;
       }
       alert('Pode mover');
       const categoriaDestino = JSON.parse(localStorage.getItem('dropC'));
       const targetIndex = this.listas.findIndex(item => item === tarefa);
       console.log(targetIndex);
    
       if (targetIndex !== -1) {
         tarefa.categoria = categoriaDestino; 
         this.listas.splice(targetIndex, 1); 
         this.listas.splice(this.posicaoTroca,0,tarefa); 
         this.salvar(); 
     }
     }
     pegarPosicao(tarefa:Tarefa){
       this.posicaoTroca=this.listas.indexOf(tarefa);


     }
    
 
 
   
  
    

   adicionarTarefa(): void {
     if (!this.hasPermission('Add')) {
       alert('Não pode cadastrar');
       return;
     }
     alert('Pode cadastrar');
   }

   editarTarefa(): void {
     if (!this.hasPermission('Edit')) {
       alert('Não pode editar');
       return;
     }
     alert('Pode editar');
   }

   removerTarefa(): void {
     if (!this.hasPermission('Remove')) {
       alert('Não pode remover');
       return;
     }
     alert('Pode remover');
   }

   hasPermission(permission: string): boolean {
    return this.user.cardPermissions === permission;
  }
 
   private getUsuarioLogado(): User {
     return this.users.find((user) => {
       return user.id === this.userId
     }) as User;
   }
 }
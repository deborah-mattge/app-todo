import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';


interface Propriedade{
  nome:string
  tipo: string
  valor:any
}


@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrls: ['./propriedade.component.css']
})
export class PropriedadeComponent implements OnInit {
  private userId: string = 'diogo.defante';
  private users: User[] = [];
  user!: User;


  constructor( private userRepository: UserRepository) {
    userRepository.getUsers().subscribe({
      next:(value)=>{
        console.log(value);
      }

    })

   }

  ngOnInit() {
    const propriedades = localStorage.getItem('propriedade');
    if (propriedades) {
      this.propriedades = JSON.parse(propriedades);
    }
    console.log(propriedades);
  }

  propriedades: Propriedade[]=[];
  propriedade: Propriedade ={
    nome: '',
    tipo: '',
    valor:null
  }
  valoresPropriedades: { [nome: string]: any } = {};
  cadastrarPropriedade():void{
    const propriedade: Propriedade={
      nome:this.propriedade.nome,
      tipo:this.propriedade.tipo,
      valor:this.propriedade.valor
    }

    
    this.propriedades.push(propriedade);
    this.salvar();
    this.propriedade.nome=''

}
salvar(){
  localStorage.setItem('propriedade',JSON.stringify(this.propriedades));
}
remover(indice:number){
  console.log(indice)
  this.propriedades.splice(indice,1);
  this.salvar()
}
 adicionarPropriedade(): void {
   if (!this.hasPermission('Add')) {
     alert('Não pode cadastrar');
     return;
   }
   alert('Pode cadastrar');
 }

 editarPropriedade(): void {
   if (!this.hasPermission('Edit')) {
     alert('Não pode editar');
     return;
   }
   alert('Pode editar');
 }

 removerPropriedade(): void {
   if (!this.hasPermission('Remove')) {
     alert('Não pode remover');
     return;
   }
   alert('Pode remover');
 }

 hasPermission(permission: string): boolean {
  return this.user.propertiesPermissions === permission;
}

 private getUsuarioLogado(): User {
   return this.users.find((user) => {
     return user.id === this.userId
   }) as User;
 }
 getCookie(name: string): string | null {
  const cookieString = decodeURIComponent(document.cookie);
  const cookies = cookieString.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.startsWith(name + '=')) {
      const valueString = cookie.substring(name.length + 1);
      return valueString;
    }
  }
 
}
}




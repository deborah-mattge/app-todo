import { Component, OnInit } from '@angular/core';
import { UserRepository } from 'src/repositories/user.repository';
import { User } from 'src/models/users/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users: User[] = [];
  id:string;
  password:string;
  constructor(private userRepository: UserRepository) { 
    userRepository.getUsers().subscribe({
      next:(value)=>{
        this.users=value;
      }
  
    })
  }

  ngOnInit() {
  }
  login(){
   const usuarioLogado=this.findUser();
   alert('login efetuado com sucesso')

   this.setCookie(usuarioLogado);
   const usuarioLogadoString = this.getCookie('usuarioLogado');
if (usuarioLogadoString) {
  const usuarioLogado = JSON.parse(usuarioLogadoString);
  console.log(usuarioLogado);
} else {
  console.log('Cookie não encontrado');
}
  }
  findUser() {
    return this.users.find(user => user.id === this.id && user.password === this.password);
  }

  setCookie(usuarioLogado) {
    const valueString = JSON.stringify(usuarioLogado);
    const encodedValue = encodeURIComponent(valueString);
    document.cookie = `usuarioLogado=${encodedValue}; path=/`;
    console.log('foi')
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
  
    return null;
  }
  
}
    
   

  
 
    
  



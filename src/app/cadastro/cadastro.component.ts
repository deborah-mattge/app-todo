import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';

// interface Usuario{
//   id:string;
//   name:string;
//   password:string;
//   email:string;
//   cardPermission:String;
//   proprertiesPermission:String; 

// }


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {
  id:string;
  name:string;
  password:string;
  email:string;
  cardPermission:String;
  proprertiesPermission:String; 

  constructor(private userRepository: UserRepository) { }

  ngOnInit() {
  }
  adicionarUsuario() {
    const novoUsuario: User = {
      // Preencha os campos do novo usuário aqui
      id:this.id,
      name:this.name,
      password: this.password,
      email: this.email,
      cardPermissions:'Remove',
      propertiesPermissions: 'Remove'
    };

    this.userRepository.addUser(novoUsuario).subscribe(
      (response) => {
        alert('Usuário adicionado com sucesso:');
        // Faça algo após adicionar o usuário
      },
      (error) => {
        console.error('Erro ao adicionar usuário:', error);
        alert('erro')
        // Trate o erro adequadamente
      }
    );
  }
}



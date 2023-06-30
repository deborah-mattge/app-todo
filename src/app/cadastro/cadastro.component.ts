import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private userRepository: UserRepository) { }

  ngOnInit() {
  }
  adicionarUsuario() {
    const novoUsuario: User = {
      // Preencha os campos do novo usuário aqui
      id: 'b',
      name: 'b',
      password: 'b',
      email: 'b',
      cardPermissions:'Edit',
      propertiesPermissions:'Edit'
    };

    this.userRepository.addUser(novoUsuario).subscribe(
      (response) => {
        console.log('Usuário adicionado com sucesso:', response);
        // Faça algo após adicionar o usuário
      },
      (error) => {
        console.error('Erro ao adicionar usuário:', error);
        // Trate o erro adequadamente
      }
    );
  }
}



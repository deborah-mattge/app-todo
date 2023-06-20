import { Component, Input} from '@angular/core';
import { users } from 'src/data/users';
import { User } from 'src/models/users/user';
import { userRepository } from 'src/repositories/user.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="teste-app";
  private userId: string ='joao.silva';
  private users: User[]=[];
   user: User []=[];
  ngOnInit() {
    
  }
  constructor( private userRepository: userRepository){
    this.user=this.userRepository.getUsers();
    this.getUsuarioLogado();
  }
  private getUsuarioLogado():User |undefined{
    return this.users.find((user)=>{
      return user.id===this.userId})
    
    }   

  }


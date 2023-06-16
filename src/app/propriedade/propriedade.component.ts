import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Propriedade{
  nome:string
  tipo: string
}


@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrls: ['./propriedade.component.css']
})
export class PropriedadeComponent implements OnInit {

  constructor(private router: Router) {}

  navigateToTarefa(propriedades: string[]) {
    this.router.navigate(['/tarefa', propriedades]);
  }

  ngOnInit() {
    const propriedades = localStorage.getItem('propriedade');
    if (this.propriedade) {
      this.propriedades = JSON.parse(propriedades);
    }

  }

  propriedades: Propriedade[]=[];
  propriedade: Propriedade ={
    nome: '',
    tipo: ''
  }
  cadastrarPropriedade():void{
    const propriedade: Propriedade={
      nome:this.propriedade.nome,
      tipo:this.propriedade.tipo
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
}

import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
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
}

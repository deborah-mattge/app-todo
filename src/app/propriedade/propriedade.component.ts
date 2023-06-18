import { Component, OnInit } from '@angular/core';
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

  constructor() { }

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

}


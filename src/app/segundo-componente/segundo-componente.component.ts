import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css'],
})
export class SegundoComponenteComponent {
  nome = 'José da Silva Martins';
  dataNascimento = '2018-12-22 ';
  urlImagem = '/assets/images.jpg';

  mostrarDataNascimento() {
    alert(`A data de nascimento do joão é: ${this.dataNascimento}`);
  }
}

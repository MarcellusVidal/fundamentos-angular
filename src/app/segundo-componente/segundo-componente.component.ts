import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css'],
})
export class SegundoComponenteComponent {
  nome = 'João';
  dataNascimento = '1981-12-22 ';
  urlImagem = '/assets/images.jpg';

  mostrarDataNascimento() {
    alert(`A data de nascimento do joão é: ${this.dataNascimento}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celulares';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css'],
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {
      id: 1,
      nome: 'Celular XL',
      descricao: 'um celular Grande',
      esgotado: false,
    },
    {
      id: 2,
      nome: 'Celular MI',
      esgotado: false,
    },
    {
      id: 3,
      nome: 'Celular JO',
      descricao: 'um celular Pequeno',
      esgotado: true,
    },
  ];
}

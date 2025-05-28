import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  imports: [],
  standalone: true,
  templateUrl: './nome-componente.component.html',
  styleUrl: './nome-componente.component.css'
})
export class NomeComponenteComponent {
  nome: string = "Rosivaldo da Fonseca";
  profissao: string = "Dsenvolvedor Web";
  hobbies: string[] =["Leitura", "Passear", "Tecnologia", "Jogar Bola"]
}

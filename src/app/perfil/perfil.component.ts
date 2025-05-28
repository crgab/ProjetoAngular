import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nome = '';
  perfil = {
    username: "crgab",
    nome:  "gabriel cruz",
    local: "Manaus",
    idade: 42,
    profissao: "pedreiro",
    empresa: "construindo sonhos",
    publicacoes: 50,
    seguidores: 1001,
    seguindo: 2,
    foto: "https://th.bing.com/th/id/OIP.Dg4-k3_iKwL9cuf6PcyFsAHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  }
}

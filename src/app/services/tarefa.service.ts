import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  getTarefas(): Tarefa[]{ 
    return[
      {titulo:"Estudar Angular", descricao:"Fazer um componente de tarefas", concluido:false},
      {titulo:"Exercicio", descricao:"Realizar os exercícios em sala", concluido:false},
      {titulo:"Atividade", descricao:"Fazer a atividade para casa", concluido:false}
    ]
  }
}

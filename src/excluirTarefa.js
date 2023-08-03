import readlineSync from 'readline-sync';
import { tarefas } from "./adicionarTarefas.js";
import { menu } from './menu.js';

export function excluirTarefa() {
    let achou = false
    const nomeDaTarefa = readlineSync.question('Qual tarefa deseja excluir: ')
    const index = parseInt(readlineSync.question('Qual tarefa deseja excluir: '))

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].titulo === nomeDaTarefa || i === index) {
            achou = true
            tarefas.splice(i, 1)
            break
        }
    }

    if (achou) {
        console.log(`${nomeDaTarefa} foi excluída com sucesso!`)
    } else {
        console.log(`${nomeDaTarefa} não existe!`)
        menu()
    }

    return tarefas
}
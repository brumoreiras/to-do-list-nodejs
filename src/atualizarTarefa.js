import readlineSync from 'readline-sync';
import { tarefas, validaStatus } from "./adicionarTarefas.js";
import { menu } from './menu.js';

export function atualizarListaDeTarefas() {
    let achou = false
    const nomeDaTarefa = readlineSync.question('Qual tarefa deseja atualizar: ')

    tarefas.forEach((item, index) => {
        if (tarefas[index].titulo.includes(nomeDaTarefa)) {
            achou = true
            const titulo = readlineSync.question('Digite o nome da tarefa: ')
            const status = readlineSync.question("Digite o status C para Concluido ou E para Em andamento ")
            const data = readlineSync.question("Digite a data da tarefa: ")

            tarefas[index].titulo = titulo,
                tarefas[index].completa = validaStatus(status),
                tarefas[index].data = data
        }
    })

    if (!achou) {
        console.log(`${nomeDaTarefa} não existe!`)
        menu()
    }

    return tarefas
}
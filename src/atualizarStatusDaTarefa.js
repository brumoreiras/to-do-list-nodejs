import readlineSync from 'readline-sync';
import { tarefas, validaStatus } from "./adicionarTarefas.js";

export function atualizarStatusDaTarefa() {
    let achou = false
    const nomeDaTarefa = readlineSync.question('Qual tarefa deseja atualizar: ')

    tarefas.forEach((item, index) => {
        if (tarefas[index].titulo.includes(nomeDaTarefa)) {
            achou = true
            const status = readlineSync.question("Digite o status C para Concluido ou E para Em andamento ")

            tarefas[index].completa = validaStatus(status)

        }
    })

    if (!achou) {
        console.log(`${nomeDaTarefa} não existe!`)
        menu()
    }

    return tarefas
}
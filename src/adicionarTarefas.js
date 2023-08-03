import readlineSync from 'readline-sync';
import { atualizarListaDeTarefas } from './atualizarTarefa.js';

export const tarefas = []

export function adicionarTarefa() {
    const titulos = readlineSync.question("Digite o titulo da tarefa: ")
    const status = readlineSync.question("Digite o status C para Concluido ou E para Em andamento ")
    const data = readlineSync.question("Digite a data da tarefa: ")

    const completa = validaStatus(status)
    const titulo =  validaAtividade(tarefas, titulos)

    tarefas.push({
        titulo,
        completa,
        data,
    })

    return tarefas
}

export function validaStatus(status) {
    if (status.toLowerCase() === 'c') {
        return '✅'
    }
    return '❌'
}

function validaAtividade(tarefas, titulos) {
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].titulo === titulos) {
            const tarefaJaExiste = readlineSync.question(`A tarefa foi localizada, você deseja atualiza-lá? Digite S para SIM ou N para NÃO: `)
            if (tarefaJaExiste.toLowerCase() === 's') {
              atualizarListaDeTarefas(titulos)
              break
            }
        }
    }
    return titulos
}
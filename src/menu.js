import readlineSync from 'readline-sync';
import { adicionarTarefa, tarefas } from './adicionarTarefas.js';
import { atualizarListaDeTarefas } from './atualizarTarefa.js';
import { vizualizarTarefa } from './exibirTarefas.js';
import { atualizarStatusDaTarefa } from './atualizarStatusDaTarefa.js';
import { excluirTarefa } from './excluirTarefa.js';

export function menu() {
    let opcao;

    while (opcao !== 0) {

        console.log(`
            *** >>> Menu de opções <<< ***
            |                            |
            |    1 - Adcionar tarefa     |
            |    2 - Atualizar tarefa    |
            |    3 - Concluir tarefa     |
            |    4 - Remover tarefa      |
            |    0 - SAIR                |
            |                            |
            ******************************
    `)

        if (tarefas.length !== 0) {
            vizualizarTarefa()
        }

        opcao = parseInt(readlineSync.question("Escolha uma opcao: "))

        switch (opcao) {
            case 1:
                adicionarTarefa()
                break
            case 2:
                atualizarListaDeTarefas()
                break
            case 3:
                atualizarStatusDaTarefa()
                break
            case 4:
                excluirTarefa()
                break
            case 0:
                console.log('Nos vemos em breve')
                break;
            default:
                console.log('Opção inválida. Tente novamente.')
        }
    }

}

menu()

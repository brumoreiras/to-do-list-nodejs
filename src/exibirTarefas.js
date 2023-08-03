import { tarefas } from "./adicionarTarefas.js";

export function vizualizarTarefa() {
    const tarefasFormatadas = tarefas.map((tarefa) => ({
        Ícone: tarefa.completa,
        Título: tarefa.titulo,
        Data: tarefa.data,
    }));

    console.table(tarefasFormatadas, ['Ícone', 'Título', 'Data']);
}

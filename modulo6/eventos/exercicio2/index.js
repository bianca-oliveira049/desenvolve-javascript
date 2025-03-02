const listaTarefas = []
function exibeTarefas() {
    const lista = document.querySelector('ul#lista');
    lista.innerHTML = '';
    for (let Tarefa of listaTarefas) {
        const concluida = document.createElement('input');
        concluida.type = 'checkbox';
        const item = document.createElement('li');
        item.innerText = `${Tarefa.descricao}`; 
        concluida.checked = Tarefa.statusTarefa;
        item.appendChild(concluida);
        lista.appendChild(item);
        if (Tarefa.statusTarefa) item.style.color = 'gray';
        concluida.addEventListener('change', () => {
            Tarefa.statusTarefa = concluida.checked;
            if (Tarefa.statusTarefa) item.style.color = 'gray';
            else item.style.color = 'black';
        })
    }
    console.log(listaTarefas);
}

function adicionarTarefa() {
    const descTarefa = document.getElementById('descTarefa').value.trim();
    if (descTarefa && !(listaTarefas.some(t => t.descricao === descTarefa))) {
        const Tarefa = {descricao: descTarefa, statusTarefa: false};
        listaTarefas.push(Tarefa);
        document.getElementById('aviso').innerText = "Tarefa adicionada com sucesso!"
        exibeTarefas();
        document.getElementById('descTarefa').value = ''; 
    }
    else if (descTarefa) document.getElementById('aviso').innerText = "Essa tarefa já existe!"
    else document.getElementById('aviso').innerText = "Preencha a descrição da tarefa"
}

const botao = document.getElementById('botaoAdd');
botao.addEventListener('click', adicionarTarefa);
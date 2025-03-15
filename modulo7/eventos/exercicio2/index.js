function carregaTarefas() {
  const Tarefas = [];
    for (let i = 0; i < localStorage.length; i++)
    {
        const chave = localStorage.key(i);
        Tarefas.push(JSON.parse(localStorage.getItem(chave)));
    }
    return Tarefas;  
}

function exibeTarefas() {
    const lista = document.querySelector('ul#lista');
    lista.innerHTML = '';
    const listaTarefas = carregaTarefas();
    for (let i = 0; i < listaTarefas.length; i++) {
        const Tarefa = listaTarefas[i];
        const concluida = document.createElement('input');
        concluida.type = 'checkbox';
        const item = document.createElement('li');
        item.innerText = `${Tarefa.descricao}`; 
        concluida.checked = Tarefa.statusTarefa;
        item.appendChild(concluida);
        lista.appendChild(item);
        const excluir = document.createElement('button');
        excluir.innerText = 'Excluir';
        item.appendChild(excluir);
        excluir.addEventListener('click', () => {
            for (let i = 0; i < localStorage.length; i++) {
                const chave = localStorage.key(i);
                const tarefa = JSON.parse(localStorage.getItem(chave));
                if (Tarefa.descricao === tarefa.descricao) {
                    localStorage.removeItem(chave);
                    exibeTarefas();
                    break;
                }
            }
        })
        if (Tarefa.statusTarefa) item.style.color = 'gray';
        concluida.addEventListener('change', () => {
            Tarefa.statusTarefa = concluida.checked;
            if (Tarefa.statusTarefa) item.style.color = 'gray';
            else item.style.color = 'black';
            localStorage.setItem(`Tarefa ${listaTarefas.indexOf(Tarefa) + 1}`, JSON.stringify(Tarefa)); 
        })
    }
    console.log(listaTarefas);
}

function adicionarTarefa() {
    const descTarefa = document.getElementById('descTarefa').value.trim();
    const listaTarefas = carregaTarefas();
    if (descTarefa && !listaTarefas.some(tarefa => tarefa.descricao === descTarefa)) {
        const Tarefa = {descricao: descTarefa, statusTarefa: false};
        listaTarefas.push(Tarefa);
        let i = 1;
        while (localStorage.getItem(`Tarefa ${i}`)) i++;
        localStorage.setItem(`Tarefa ${i}`, JSON.stringify(Tarefa));
        document.getElementById('aviso').innerText = "Tarefa adicionada com sucesso!"
        exibeTarefas();
        document.getElementById('descTarefa').value = ''; 
    }
    else if (descTarefa) document.getElementById('aviso').innerText = "Essa tarefa já existe!"
    else document.getElementById('aviso').innerText = "Preencha a descrição da tarefa"
}

const botao = document.getElementById('botaoAdd');
botao.addEventListener('click', adicionarTarefa);
window.onload = exibeTarefas;
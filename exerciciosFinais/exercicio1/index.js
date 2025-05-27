async function carregaUsuarios() {
    const textoInput = document.getElementById('campoBusca');
    nome = textoInput.value;
    textoInput.value = '';
    const dados = await fetch(`https://api.github.com/users/${nome}`);
    const usuario = await dados.json();
    listaUsuarios = document.getElementById('listaUsuarios');
    listaUsuarios.innerHTML = '';
    if (dados.status == 404) {
        const mensagem = document.createElement('p');
        mensagem.innerText = "Não foram encontrados usuários para esta pesquisa";
        const divRes = document.getElementById('resultado');
        divRes.appendChild(mensagem);
        textoInput.addEventListener('keyup', () => {mensagem.innerHTML = '';});
        return;
    }
    else {
        console.log(usuario);
        const item = document.createElement('li');
        item.innerText = `Usuário: ${usuario.login}, Id: ${usuario.id}`;
        listaUsuarios.appendChild(item);
    }
}
const botaoBuscar = document.getElementById('buscar');
botaoBuscar.addEventListener('click', carregaUsuarios);

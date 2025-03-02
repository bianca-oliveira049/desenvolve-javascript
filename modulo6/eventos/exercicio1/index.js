const curtidas = [];
function mostraCurtidas() {
    const nome = document.getElementById('campoNome').value.trim();
    console.log(nome);
    console.log(curtidas);
    if (nome && curtidas.indexOf(nome) == -1) {
        curtidas.push(nome);
        if (curtidas.length == 1) {document.getElementById('nomes').innerText = `${curtidas[0]} curtiu`;}
        else if (curtidas.length == 2) {document.getElementById('nomes').innerText = `${curtidas[0]} e ${curtidas[1]} curtiram`;}
        else {document.getElementById('nomes').innerText = `${curtidas[0]}, ${curtidas[1]} e mais ${curtidas.length - 2} curtiram`;}
    }
    else if (nome) document.getElementById('nomes').innerText = `${nome} já curtiu!`;
    else document.getElementById('nomes').innerText = 'Digite seu nome';
}
const botao = document.getElementById('botaoCurtir');
botao.addEventListener('click', mostraCurtidas);

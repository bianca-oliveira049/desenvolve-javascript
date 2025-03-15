var curtidas = localStorage.getItem('Curtidas');
if (!curtidas) 
    curtidas = [];
else 
    curtidas = JSON.parse(localStorage.getItem('Curtidas'));

function mostraCurtidas() {
    const nome = document.getElementById('campoNome').value.trim();
    if (nome && !curtidas.includes(nome)) {
        curtidas.push(nome);
        localStorage.setItem('Curtidas', JSON.stringify(curtidas));
        if (curtidas.length == 1) {document.getElementById('nomes').innerText = `${curtidas[0]} curtiu`;}
        else if (curtidas.length == 2) {document.getElementById('nomes').innerText = `${curtidas[0]} e ${curtidas[1]} curtiram`;}
        else {document.getElementById('nomes').innerText = `${curtidas[0]}, ${curtidas[1]} e mais ${curtidas.length - 2} curtiram`;}
    }
    else if (nome) document.getElementById('nomes').innerText = `${nome} já curtiu!`;
    else document.getElementById('nomes').innerText = 'Digite seu nome';
}

const botao = document.getElementById('botaoCurtir');
botao.addEventListener('click', mostraCurtidas);
const limpar = document.getElementById('botaoLimpar');
limpar.addEventListener('click', () => {
    localStorage.clear();
    curtidas.splice(0, curtidas.length);
})

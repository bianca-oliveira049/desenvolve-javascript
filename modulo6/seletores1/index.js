//Muda o texto do título
const mudaTitulo = () => {
    const titulo = document.getElementById('titulo');
    titulo.innerText = 'Primeira Prática Com Novo Título'; //Novo título
}

//Altera o estilo dos itens da lista
const alteraLista = () => {
    const lista = document.getElementsByTagName('li');
    for (let item of lista) {
        item.style.color = 'blue';
        item.style.listStyleType = 'circle';
    }
}

//Adiciona classe a todos os parágrafos
const addClasseParagrafo = () => {
    const paragrafos = document.getElementsByTagName('p');
    for (let paragrafo of paragrafos) {
        paragrafo.classList = 'paragrafo';
        console.log(paragrafo.classList)
    }  
}

//Altera o texto do botão
const alteraBotao = () => {
    const botao = document.getElementById('botao')
    botao.innerText = 'Botão'
}

setTimeout(() => mudaTitulo(), 2000)
setTimeout(() => alteraLista(), 2000)
addClasseParagrafo()
setTimeout(() => alteraBotao(), 2000)
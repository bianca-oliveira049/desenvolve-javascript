const livros = [
    {titulo: "livro 1", autor: "autor 1", quantidade: 10},
    {titulo: "livro 2", autor: "autor 2", quantidade: 15},
    {titulo: "livro 3", autor: "autor 3", quantidade: 20},
    {titulo: "livro 4", autor: "autor 4", quantidade: 25},
];

function adicionarLivro(Titulo, Autor, Quantidade) {
    let existe = false;
    for (let livro of livros) {
        if (livro.titulo == Titulo) {
            existe = true; 
            console.log("\nO livro já existe!\n");
            break;
        }
    }
    if (!existe) 
    {
        livros.push({titulo: Titulo, autor: Autor,  quantidade: Quantidade});
        console.log("\nLivro adicionado com sucesso!\n");
    }
}

function removerLivro(Titulo) {
    let existe = false
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].titulo == Titulo) {
            existe = true; 
            livros.splice(i, 1);
            console.log("\nLivro removido com sucesso!\n");
            break;
        }
    }
    if (!existe) console.log("\nLivro não existe!\n");
}

function atualizarQuantidade(Titulo, novaQuantidade) {
    for (let livro of livros) {
        if (livro.titulo == Titulo){
            livro.quantidade = novaQuantidade; 
            console.log("\nQuantidade atualizada!\n");
            break;  
        }
    }
}

function listarLivros() {
    for (let livro of livros) {
        console.log(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nQuantidade: ${livro.quantidade}\n`); 
    }
}

function executaEmostra(acao) {
    acao;
    listarLivros();
}

executaEmostra(adicionarLivro('livro 5', 'autor 5', 30));
executaEmostra(removerLivro('livro 5'));
executaEmostra(atualizarQuantidade('livro 1', 5));

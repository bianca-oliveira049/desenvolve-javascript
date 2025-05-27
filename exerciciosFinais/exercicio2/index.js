const posts = [];

async function buscarImgGato() {
  try {
    const resp = await fetch('https://api.thecatapi.com/v1/images/search');
    const dados = await resp.json();
    return dados[0].url;
  } catch (erro) {
    console.error("Erro ao buscar imagem do gato:", erro);
  }
}

async function postar() {
    const areaTexto = document.getElementById('textArea');
    let textoPost = areaTexto.value.trim();
    if (textoPost === "") return;
    let post = {nome: 'Eu', Data: new Date(), texto: textoPost, Imagem: await buscarImgGato(), numLikes: 0};
    posts.unshift(post); 
    areaTexto.value = "";
    atualizar();
}

function atualizar() {
    const lista = document.getElementById('postagens');
    lista.innerHTML = "";

    for (let post of posts) {
        let novoPost = document.createElement('li');

        let divPost = document.createElement('div');
        novoPost.appendChild(divPost);
        divPost.id= 'divPost';
        
        //Cabeçalho postagem
        let cabecalho = document.createElement('div');
        divPost.appendChild(cabecalho);
        cabecalho.className = 'cabecalho';

        const avatar = document.createElement('img');
        avatar.src = 'imgAvatar.jpg';
        avatar.className = 'avatar';
        cabecalho.appendChild(avatar);

        let Nome = document.createElement('h5');
        Nome.textContent = post.nome;
        cabecalho.appendChild(Nome);

        //corpo postagem
        let corpo = document.createElement('div');
        divPost.appendChild(corpo);
        corpo.className = 'corpo';

        let Texto = document.createElement('p');
        Texto.textContent = post.texto;
        Texto.className = 'texto';
        corpo.appendChild(Texto);

        let imagem = document.createElement('img');
        imagem.src = post.Imagem;
        imagem.className = 'imgGato';
        corpo.appendChild(imagem);

        //rodape postagem
        let rodape = document.createElement('div');
        divPost.appendChild(rodape);
        rodape.className = 'rodape';

        let data = document.createElement('p');
        data.textContent = post.Data;
        data.className = 'data';
        rodape.appendChild(data);

        let botaoCurtir = document.createElement('button');
        botaoCurtir.className = 'curtir';
        botaoCurtir.textContent = `Curtir ${post.numLikes}`;
        rodape.appendChild(botaoCurtir);
        botaoCurtir.addEventListener('click', () => {
          post.numLikes++;
          atualizar();
        });

        lista.appendChild(novoPost);
    }
}

const botaoPostar = document.getElementById('botaoPostar');
botaoPostar.addEventListener('click', postar);




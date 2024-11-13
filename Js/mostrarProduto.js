import { conectaApi } from "./conectaApi.js";
import { excluirProduto } from "./removerProduto.js";


const lista = document.querySelector("[data-lista]");

function constroiCard(nome, valor, imagem, id){
    const card = document.createElement("div");
    card.className = "produto_card";
    card.dataset.id = id;

    card.innerHTML = `
        <img src="${imagem}" alt="imagem produto" class="produto_card_img">
        <h3 class="produto_nome">${nome}</h3>
        <p class="produto_valor">${valor}</p>
        <button class="produto_card_button"> 
            <img src="./images/lixeira.png" class="icone_lixeira"> 
        </button>
        `;

    return card;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(produto => {
            const card = constroiCard(produto.nome, produto.valor, produto.imagem, produto.id );
            lista.appendChild(card);
    });

        lista.addEventListener("click",excluirProduto);
    } catch {
        console.error("Erro ao carregar a lista de produtos:", erro);
        lista.innerHTML = `<h2 class="mensagem__titulo">Nao foi possivel carregar a lista.</h2>`;
    }
    
}

listaProdutos();
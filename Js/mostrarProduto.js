import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, valor, imagem){
    const produto = document.createElement("li");

    produto.className = "produtos__item";
    produto.innerHTML = `
        <div class="produtos_card">
            <img src="${imagem}" alt="imagem produto">
            <h3 class="produto_nome">${nome}</h3>
            <p class="produto_valor">${valor}</p>
        </div>`

    return produto;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.nome,elemento.valor,elemento.imagem)));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Nao foi possivel carregar os produtos.</h2>`;
    }
    
}

listaProdutos();
import { conectaApi } from "./conectaApi.json";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, valor, imagem){
    const produto = document.createElement("li");

    produto.className = "produtos__item";
    produto.innerHTML = `
        <div>
            <img src="${imagem}" alt="imagem produto">
            <h3>${nome}</h3>
            <p>${valor}</p>
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
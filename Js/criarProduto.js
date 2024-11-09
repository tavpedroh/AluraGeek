import { conectaApi } from "./conectaApi.json";

const formulario = document.querySelector("[data-fornmulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try{
        await conectaApi.criarProduto(nome,valor,imagem);
        
    } catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarProduto(evento));
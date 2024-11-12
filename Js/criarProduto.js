import { conectaApi } from "./conectaApi.js";


async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try{
        await conectaApi.criaProduto(nome,valor,imagem);
    } catch(e){
        alert(e);
    }
}

function limparForm(evento) {
    evento.preventDefault();

    document.querySelector("[data-nome]").value = '';
    document.querySelector("[data-valor]").value = '';
    document.querySelector("[data-imagem]").value = '';
}

const botaoDeGuardar = document.querySelector("[data-botao-guardar]");
botaoDeGuardar.addEventListener("click", evento => criarProduto(evento));

const botaoDeLimpar = document.querySelector("[data-botao-limpar]");
botaoDeLimpar.addEventListener("click", evento => limparForm(evento));
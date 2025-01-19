async function listaProdutos() {
        const conexao = await fetch('https://my-json-server.typicode.com/tavpedroh/API-AluraGeek/produtos');
        
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
   
}

async function criaProduto(nome,valor,imagem) {
    const conexao = await fetch('https://my-json-server.typicode.com/tavpedroh/API-AluraGeek/produtos',{
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            nome: nome,
            valor: `R$ ${valor}`,
            imagem: imagem
        })
    });

    if(!conexao.ok)
        throw new Error("Nao foi possivel adicionar o produto.");

    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}


async function deletaProduto(id) {
    const conexao = await fetch(`https://my-json-server.typicode.com/tavpedroh/API-AluraGeek/produtos/${id}`, {
        method: "DELETE",
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível deletar o produto.");
    }
}

export const conectaApi = {
    listaProdutos,
    criaProduto,
    deletaProduto
}
async function listaProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaProduto(nome,valor,imagem) {
    const conexao = await fetch('http://localhost:3000/produtos',{
        method: "POST",
        headers: {"content-type": "application.json"},
        body: JSON.stringify({
            nome: nome,
            valor: `${valor}`,
            imagem: imagem
        })
    });

    if(!conexao.ok)
        throw new Error("Nao foi possivel adicionar o produto.");

    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos,
    criaProduto
}
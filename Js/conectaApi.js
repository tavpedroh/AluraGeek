async function listaProdutos() {
    try{
        const conexao = await fetch('http://localhost:3000/produtos');
        if (!conexao.ok) {
            throw new Error(`Erro na API: ${conexao.statusText}`);
        }
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch (erro) {
        console.error("Erro ao buscar produtos:", erro);
        throw erro;
    }
}

async function criaProduto(nome,valor,imagem) {
    const conexao = await fetch('http://localhost:3000/produtos',{
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
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
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
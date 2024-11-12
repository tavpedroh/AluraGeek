import { conectaApi } from "./conectaApi.js";

export async function excluirProduto(evento) {
    
    if (evento.target.closest(".produto_card_button")) {
        
        const card = evento.target.closest(".produto_card");
        const id = card.dataset.id; 

        try {
            
            await conectaApi.deletaProduto(id);
            
            card.remove();
            console.log(`Produto com ID ${id} foi excluído com sucesso.`);
        } catch (erro) {
            console.error("Erro ao excluir produto:", erro);
            alert("Não foi possível excluir o produto. Tente novamente.");
        }
    }
}

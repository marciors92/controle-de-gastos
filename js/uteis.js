// Funções utilitárias
const obterElemento = (id) => document.getElementById(id);

// Funções puras
export const valorNegativo = (valor) => valor < 0;

export const limparCampos = () => obterElemento('valor').value = '';

const formataMoeda = (valor) => valor.toFixed(2).replace('.', '.');

export const atualizarInterFace = (gastorPorCategoria) => {

    const categorias = gastosPorCategorias.categorias;

    categorias.forEach(({ nome, valor }) => {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R${formataMoeda(valor)}`
    })

    const elementoTotal = obterElemento("Total");
    elementoTotal.textContent = `Total: R$ ${formataMoeda(gastorPorCategoria.obterTotal())}`
}
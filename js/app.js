//Modularização (ES Module)
import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterFace } from "./uteis.js";

//POO
const gastosPorCategoria = new ListaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
)

//Manipulação do DOM
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    //Prevenção do comportamento padrão
    evento.preventDefault();

    const valorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;

    if (valorNegativo(valorInformado)) {
        alert("Valor inválido. o valor não poder ser negativo");
        return;
    }

    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
    categoria.adcionarValor(valorInformado);

    atualizarInterFace(gastosPorCategoria);
    formulario.reset();
})


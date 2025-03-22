//funções
const precoGasolina = 5.79;
const precoEtanol = 4.29;
const precoDiesel = 6.79;

//função principal
function atualizarValor(){
    const tipo = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;
    //switch case
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            document.getElementById("resultado").textContent = "Tipo inválido";
            return;
    }

    calcularValorAbastecimento(precoPorLitro, litros);
}

function calcularValorAbastecimento(precoCombustivel, litros){
    if(litros <=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Insira um valor positivo";
        return;
    }
    
    const valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = `Valor a pagar: ${formatarMoeda(valorTotal)}`; 
}

function formatarMoeda(valor){
    //return "R$ " + valor.toFixed(2);
    return "R$ " + valor.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

document.getElementById("litros").addEventListener("input", atualizarValor);
document.getElementById("combustivel").addEventListener("change", atualizarValor);

document.getElementById("litros").addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        event.atualizarValor();
    }
})

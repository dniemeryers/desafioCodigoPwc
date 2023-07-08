
function reverterOrdemPalavras() {
    
    var input = document.getElementById("revert").value;
    var palavras = input.split(" ");
    var palavrasRevertidas = palavras.reverse();
    var fraseRevertida = palavrasRevertidas.join(" ");
    var resultadoSpan = document.getElementById("resultado");
    resultadoSpan.textContent = fraseRevertida;
}

function limparInputRevert(){

    var input = document.getElementById("revert");
    var resultadoSpan = document.getElementById("resultado");
    resultadoSpan.innerHTML = "";
    input.value = "";
}




  
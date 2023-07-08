
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

function removeDuplicates() {
    var input = document.getElementById("remove").value;
    var remove = [...new Set(input)];
    var result = remove.join("");
    document.getElementById("remove_duplicates").textContent = result;
  }

  function limparInputRemove(){

    var input = document.getElementById("remove");
    var resultadoSpan = document.getElementById("remove_duplicates");
    resultadoSpan.innerHTML = "";
    input.value = "";
}



  
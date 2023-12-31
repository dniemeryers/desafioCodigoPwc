
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

function encontrarPalindromoMaisLongo() {
    const input = document.getElementById('palindromo').value;
    
    // Função auxiliar para verificar se uma string é palíndroma
    function isPalindromo(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    }
  
    let palindromoMaisLongo = '';
  
    // Encontrar a substring palíndroma mais longa
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j <= input.length; j++) {
        const substring = input.substring(i, j);
        if (isPalindromo(substring) && substring.length > palindromoMaisLongo.length) {
          palindromoMaisLongo = substring;
        }
      }
    }
  
    document.getElementById('saida_palindroma').textContent = palindromoMaisLongo;
  }
  
  function limparInputPalindromo() {
    document.getElementById('palindromo').value = '';
    document.getElementById('saida_palindroma').textContent = '';
  }

  
  function converterPrimeiraLetraMaiuscula() {
    var input = document.getElementById("frase").value;
    var output = input.replace(/(?:^|[.!?]\s+)(\w)/g, function(match) {
      return match.toUpperCase();
    });
    document.getElementById("frase_maiuscula").textContent = output;
  }

  function limparInputMaiuscula() {
    document.getElementById('frase').value = '';
    document.getElementById('frase_maiuscula').textContent = '';
  }

  function verificarPalindromo() {
    var palavra = document.getElementById("ana_palindromo").value;
    var resultado = document.getElementById("result_palindromo");

    if (palavra.toLowerCase() === palavra.toLowerCase().split('').reverse().join('')) {
        resultado.textContent = "true";
    } else {
        resultado.textContent = "false";
    }
}

function limparInputVerifica() {
    document.getElementById('ana_palindromo').value = '';
    document.getElementById('result_palindromo').textContent = '';
  }


  
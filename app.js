document.addEventListener("DOMContentLoaded", function () {
    var menos = document.querySelector(".minus");
    var mais = document.querySelector(".plus");
    var numero = document.querySelector(".num");
    var escolha = document.getElementById("meu-input");
    var armazenar = document.querySelector(".armazenar");
    if (!menos || !mais || !numero || !escolha || !armazenar) {
        console.error("Algum elemento não foi encontrado.");
        return;
    }
    var valorAtual = 0;
    var atualizarNumero = function () {
        numero.textContent = valorAtual.toString();
    };
    mais.addEventListener("click", function () {
        valorAtual++;
        atualizarNumero();
    });
    menos.addEventListener("click", function () {
        valorAtual--;
        atualizarNumero();
    });
    armazenar.addEventListener("click", function () {
        var valorInput = Number(escolha.value);
        if (!isNaN(valorInput)) {
            valorAtual = valorInput;
            atualizarNumero();
        }
        else {
            console.error("O valor digitado não é um número.");
        }
    });
    atualizarNumero();
});

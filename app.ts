document.addEventListener("DOMContentLoaded", () => {
  const menos = document.querySelector(".minus") as HTMLButtonElement;
  const mais = document.querySelector(".plus") as HTMLButtonElement;
  const numero = document.querySelector(".num") as HTMLSpanElement;
  const escolha = document.getElementById("meu-input") as HTMLInputElement;
  const armazenar = document.querySelector(".armazenar") as HTMLButtonElement;

  if (!menos || !mais || !numero || !escolha || !armazenar) {
    console.error("Algum elemento não foi encontrado.");
    return;
  }

  let valorAtual = 0;

  const atualizarNumero = () => {
    numero.textContent = valorAtual.toString();
  };

  mais.addEventListener("click", () => {
    valorAtual++;
    atualizarNumero();
  });

  menos.addEventListener("click", () => {
    valorAtual--;
    atualizarNumero();
  });

  armazenar.addEventListener("click", () => {
    const valorInput = Number(escolha.value);
    if (!isNaN(valorInput)) {
      valorAtual = valorInput;
      atualizarNumero();
    } else {
      console.error("O valor digitado não é um número.");
    }
  });

  atualizarNumero();
});

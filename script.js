// Grupo 1: Selecionando e Lendo Elementos

const titulo = document.getElementById("titulo-principal");
console.log("Exercício 1:", titulo.textContent);

const primeiroParagrafo = document.querySelector(".paragrafo");
console.log("Exercício 2:", primeiroParagrafo.innerHTML);

let itensLista = document.querySelectorAll("ul li");
itensLista.forEach((item, index) => {
  console.log(`Exercício 3 - Item ${index + 1}:`, item.textContent);
});

// Grupo 2: Modificando Conteúdo e Estilos

titulo.textContent = "DOM: A Missão";

const paragrafo2 = document.querySelectorAll(".paragrafo")[1];
paragrafo2.style.color = "red";

itensLista[0].classList.add("highlight");

function removerHighlight() {
  const elementoComHighlight = document.querySelector(".highlight");
  if (elementoComHighlight) {
    elementoComHighlight.classList.remove("highlight");
  }
}

// Grupo 3: Manipulando Atributos

const inputTexto = document.getElementById("campo-texto");
inputTexto.placeholder = "Novo texto de ajuda";

const botaoAdicionar = document.getElementById("btn-adicionar");
botaoAdicionar.setAttribute("disabled", true);
botaoAdicionar.removeAttribute("disabled");

// Grupo 4: Criando e Adicionando Elementos

const lista = document.querySelector("ul");

// Função para criar um item com botão de remover
function criarItem(texto) {
  const li = document.createElement("li");
  li.textContent = texto;

  const btnRemover = document.createElement("button");
  btnRemover.textContent = "Remover";
  btnRemover.style.marginLeft = "10px";
  btnRemover.style.padding = "4px 8px";
  btnRemover.style.cursor = "pointer";
  btnRemover.style.border = "none";
  btnRemover.style.background = "#e74c3c";
  btnRemover.style.color = "#fff";
  btnRemover.style.borderRadius = "5px";

  btnRemover.addEventListener("click", (event) => {
    event.stopPropagation(); // evita interferir no highlight
    li.remove();
  });

  li.appendChild(btnRemover);
  lista.appendChild(li);
}

// Adiciona o Item 4 inicialmente
criarItem("Item 4");

// Exercício 12 - Adicionar item do input
botaoAdicionar.addEventListener("click", () => {
  const valor = inputTexto.value.trim();
  if (valor !== "") {
    criarItem(valor);
    inputTexto.value = "";
  }
});

// Grupo 5: Removendo Elementos e Eventos

// Exercício 13 - remover segundo item inicial (Item 2)
if (itensLista[1]) {
  itensLista[1].remove();
}

// Exercício 14 - Botão Limpar lista
const botaoLimpar = document.createElement("button");
botaoLimpar.textContent = "Limpar Lista";
botaoLimpar.style.marginTop = "15px";
botaoLimpar.style.padding = "10px 20px";
botaoLimpar.style.border = "none";
botaoLimpar.style.borderRadius = "6px";
botaoLimpar.style.background = "#3498db";
botaoLimpar.style.color = "#fff";
botaoLimpar.style.cursor = "pointer";

document.body.appendChild(botaoLimpar);

botaoLimpar.addEventListener("click", () => {
  lista.innerHTML = "";
});

// Exercício 15 - toggle highlight
lista.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("highlight");
  }
});

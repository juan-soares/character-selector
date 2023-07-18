/*
    OBJETIVO 1)
    Ao passar o mouse em cima do card de um personagem, ele será selecionado.
    Apenas um personagem pode ser selecionado por vez.
    O card do personagem selecionado deve receber borda azul.
    OBJETIVO 2)
    Trocar as informações do card grande, de acordo com o personagem selecionado.
    Imagem, Nome e Descrição.*/

// OBJETIVO 1) Ao passar o mouse em cima do card de um personagem, ele será selecionado.
// Passo 1: Armazenar em uma variável, a lista de elementos que contém a classe indicada, para identificar quando o cursor estiver sob um eles.
const personagens = document.querySelectorAll(".personagem");

function substituirPersonagemSelecionado(personagem) {
  // Passo 3.1: Aramazenar em uma variável, o elemento com a classe ".selecionado".
  const personagemSelecionado = document.querySelector(".selecionado");
  // Passo 3.2: Remover a classe deste elemento.
  personagemSelecionado.classList.remove("selecionado");
  // Passo 3.3: Adicionar a classe "selecionado" no personagem atual.
  personagem.classList.add("selecionado");
}

function substituirImagemPersonagemSelecionado(personagem) {
  // Passo 1.1: Armazenar em uma variável, o id do personagem selecionado.
  const idPersonagem = personagem.attributes.id.value;
  // Passo 1.2: Armazenar em uma variável, o elemento de imagem que será manipulado.
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");
  // Passo 1.3: Substituir o caminho da imagem, de acordo com o personagem selecionado.
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function substituirNomePersonagemSelecionado(personagem) {
  // Passo 2.1: Armazenar em uma variável, o elemento de nome que será manipulado.
  const nomePersonagem = document.getElementById("nome-personagem");
  // Passo 2.2: Substituir o texto do elemento, de acordo com o atributo de nome do personagem selecionado.
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function substituirDescricaoPersonagemSelecionado(personagem) {
  // Passo 3.1: Armazenar em uma variável, o elemento de descrição que será manipulado.
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  // Passo 3.2: Substituir o texto do elemento, de acordo com o atributo de descrição do personagem selecionado.
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

// Passo 2: Percorrer a lista de personagens e realizar uma ação naquele em que o cursor passar por cima.
personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    // Ajuste para páginas vistas em celular, em que não há evento de mouse.
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Passo 3: Substituir seleção do personagem anterior para o personagem atual.
    substituirPersonagemSelecionado(personagem);

    // OBJETIVO 2) Substituir no campo ao lado, as informações, a imagem grande e o nome de acordo com o personagem selecionado.
    // Passo 1: Substituir a imagem grande de acordo com o personagem selecionado.
    substituirImagemPersonagemSelecionado(personagem);
    // Passo 2: Substituir o nome de acordo com o personagem selecionado.
    substituirNomePersonagemSelecionado(personagem);
    // Passo 3: Substituir a descrição de acordo com o personagem selecionado.
    substituirDescricaoPersonagemSelecionado(personagem);
  });
});

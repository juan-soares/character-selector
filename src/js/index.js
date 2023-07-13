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

// Passo 2: Percorrer a lista de personagens e realizar uma ação naquele em que o cursor passar por cima.
personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    // Passo 3: Verificar se já existe um personagem selecionado anteriormente e remover a seleção dele.
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
    // Passo 4: Adicionar a classe ".selecionado" no personagem atual.
    personagem.classList.add("selecionado");

    // OBJETIVO 2) As informações, a imagem grande e o nome do personagem selecionado devem aparecer ao lado.
    // Passo 1: Armazenar em uma variável, o id do personagem selecionado.
    const idPersonagem = personagem.attributes.id.value;

    // OBJETIVO 2.1) Alterar a imagem, de acordo com o personagem selecionado.
    // Passo 1: Armazenar em uma variável, o elemento de imagem que será manipulado.
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    // Passo 2: Substituir o caminho da imagem, de acordo com o personagem selecionado.
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

    // OBJETIVO 2.2) Alterar o nome, de acordo com o personagem selecionado.
    // Passo 1: Armazenar em uma variável, o elemento de nome que será manipulado.
    const nomePersonagem = document.getElementById("nome-personagem");
    // Passo 2: Substituir o texto do elemento, de acordo com o atributo de nome do personagem selecionado.
    nomePersonagem.innerText = personagem.getAttribute("data-name");
  });
});

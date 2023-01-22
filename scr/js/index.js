/*

OBJETIVO 1 - Quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer.

  - passo 1: pegar o elemento que representa o botão na tela usando o js.
  - passo 2: identificar quando o usuário clicar no botão.
  - passo 3: pegar o elemento da modal no js.
  - passo 4: abrir a modal na tela.

OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal.

  - passo 1: pegar o elemento de fechar a modal usando o js.
  - passo 2: identificar quando o usuário clicar no X.
  - passo 3: fechar a modal.

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
  modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkDoVideo);
});

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});

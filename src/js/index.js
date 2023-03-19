/* 
  Objetivo - quando clicarmos no batoa temos que 
  mostrar a imagem de fundo correspondete

  - passo 1 -dar um jeito de  pegar o elemento html dos botaos

  - passo 2 dar um jeito de indentifica o clique do usuario no batao

  - passo 3 desmarcar o botao selecionado anterioa 

  - passo 4 marca o botao clicado como se estivesse selecionado

  - passo 5 esconder a imagem de fundo anterior 

  - passo 6 fazer aparecer a imagem de fundo correspondente ao botao clicado


*/


const botaoCarrossel = (document.querySelectorAll('.botao'));
const imagens = document.querySelectorAll('.imagem');


botaoCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click',() =>{

        desativaBotaoSelecionado();

        selecionarBotaoCarrosel(botao);

        esconderImagemAtiva();

        mostrarImageDeFundo(indice);
        
    })
})

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function mostrarImageDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

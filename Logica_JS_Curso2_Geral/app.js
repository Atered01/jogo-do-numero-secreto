let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//Primeiro vai pegar a TAG no HTML e depois colocar o texto
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

//Função para verificar o chute
function verificarChute() {
    //vai pegar o VALOR do input do HTML e fazer uma comparação com o numero aleatorio
    let chute = document.querySelector('input').value
    if (chute == numerosecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let Palaveratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descubriu o número secreto com ${tentativas} ${Palaveratentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numerosecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');

        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');

        }
        tentativas++
        limparcampo()
    }

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reinicarJogo() {
    numerosecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
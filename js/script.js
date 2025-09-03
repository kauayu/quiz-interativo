import {aleatorio} from './aleatorio.js';
import {perguntas} from './perguntas.js;

const caixaprincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo(){
    atual = 0;
    telaInicial.computedStyleMap.display = 'none';
    caixaPerguntas.classList.remove(".mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResultado.classList.remove(".mostrar");
    mostrarPergunta();
}

function mostrarPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
}
perguntaAtual = perguntas [atual];
caixaPerguntas.textCcontent = pergunetaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

function mostraAlternativas() {}

function mostraResultado() {
    caixaPerguntas.textContent = 'Após isso, $ {none} descobriu que';
    textoResultado.textCcontent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add(".mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {}
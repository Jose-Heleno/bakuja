// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`
let btnEncriptar = document.querySelector('.btn-encriptar');
let btnDesencriptar = document.querySelector('.btn-desencriptar');
let mensagem = document.querySelector('.mensagem');
let contResultado = document.querySelector('.conteudo-resultado');
let texResultado = document.querySelector('.texto-resultado');

btnEncriptar.onclick = criptografar;
btnDesencriptar.onclick = descriptografar;

function criptografar() {
    escondeTexto();
    var cxTexto = mostraTexto();
    texResultado.textContent = criptografarTexto(cxTexto);
}

function descriptografar() {
    escondeTexto();
    var cxTexto = mostraTexto();
    texResultado.textContent = descriptografarTexto(cxTexto);
}

function retornaTexto(){
    var cxTexto = document.querySelector('.conteudo-textoarea');
    return cxTexto.value
}

function ocultaTexto(){
    mensagem.classList.add("esconder");
    conteudo-resultado.classList.add('esconder');
}
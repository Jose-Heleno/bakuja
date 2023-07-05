const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida pa ra "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    let textoCopia = document.querySelector(".mensagem");
    navigator.clipboard.writeText(textoCopia.value);
    textoCopia.value = '';
}

function ocultarTexto(){
    let boneco = document.querySelector(".mensagem")
    boneco.classList.add("ocultar");

}
   






/*const btnEncriptar = document.querySelector(".btn-criptografar");
const btnDesencriptar = document.querySelector(".btn-desencriptografar");
const boneco = document.querySelector(".conteudo-boneco");
const mensagem = document.querySelector(".mensagem");
const resultado = document.querySelector(".conteudo-texto");
 

btnEncriptar.onclick = criptografar;
btnDesencriptar.onclick = desencriptografar;

function criptografar(){
    ocultarTexto();
    let caixaTexto = recuperarTexto()
    resultado.textContent = encriptarTexto(caixaTexto);
}

function desencriptografar(){
    ocultarTexto();
    let caixaTexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(caixaTexto);
}

function recuperarTexto(){
    let caixaTexto = document.querySelector(".area-texto")
    return caixaTexto.value
}

function ocultarTexto(){
    boneco.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function encriptarTexto(textArea){
    let texto = textArea;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "ai"
        }
        else if(texto[i] == "e"){
            textoFinal += "enter"
        }
        else if(texto[i] == "i"){
            textoFinal += "imes"
        }
        else if(texto[i] == "o"){
            textoFinal += "ober"
        }
        else if(texto[i] == "u"){
            textoFinal += "ufat"
        }
        else{
            textoFinal += texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(textArea){
    let texto = textArea;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "a"
            i += 1;
        }
        else if(texto[i] == "e"){
            textoFinal += "e"
            i += 4;
        }
        else if(texto[i] == "i"){
            textoFinal += "i"
            i += 3;
        }
        else if(texto[i] == "o"){
            textoFinal += "o"
            i += 3;
        }
        
        else if(texto[i] == "u"){
            textoFinal += "u"
            i += 3;
        }
        else{
            textoFinal += texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    let conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("Olá"); 
});*/



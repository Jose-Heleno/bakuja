function criptografar(){

    var codificador = document.getElementById("idTexto").value;
    var resultCripto = codificador.replace(/e/gi, "enter").replace(/i/gi, "imes")
    .replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");


    document.getElementById("areaCodficador").innerText = resultCripto;
}

function descriptografar(){

    var codificador = document.getElementById("idTexto").value;
    var resultDesripto = codificador.replace(/enter/gi, "e").replace(/imes/gi, "i")
    .replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    document.getElementById("areaCodficador").innerText = resultDesripto;
}

function copia(){

    var copiar = document.getElementById("areaCodficador").value;

    navigator.clipboard.writeText(copiar);
}
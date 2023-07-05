function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}
function mostra (frase) {
    document.write(frase);
    pulaLinha();
}
function calculaImc(){

    let imc = peso / (altura**2)
    mostra(`O imc calculado é ${imc}`);
}   
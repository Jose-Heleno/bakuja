function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listKeys = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listKeys.length; contador++) {

    const tecla = listKeys[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    
}

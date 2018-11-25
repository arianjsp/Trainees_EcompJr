var lampada = 0;
var lampada2 = 0;
function acendeLampada(id) {
    if (id == "lamp1" && lampada == 0) {
        document.getElementById("lampada1").src = "imagens/ligada.jpg";
    } else if (lampada2 == 0) {
        document.getElementById("lampada2").src = "imagens/ligada.jpg";
    }
}


function apagaLampada(id) {
    if (id == "lamp1" && lampada == 0) {
        document.getElementById("lampada1").src = "imagens/apagada.jpg";
    } else if (lampada2 == 0) {
        document.getElementById("lampada2").src = "imagens/apagada.jpg";
    }

}

function quebrarLampada(id) {

    if (id == "lamp1") {
        document.getElementById("lampada1").src = "imagens/quebrada.jpg";
        lampada = 1;
    } else {
        document.getElementById("lampada2").src = "imagens/quebrada.jpg";
        lampada2 = 1;
    }
}
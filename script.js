var texto = ' online sem sair de casa';
var result;

var count = 0;
function digitar() {
    result = document.getElementById("txt");
    window.setTimeout(function() { inserir(texto[count]) }, 10);
}

function inserir(letra) {
    result.innerHTML += letra;
    count++;
    if(count < texto.length)
        window.setTimeout(function() { inserir(texto[count]) }, 100);
}

window.onload = digitar;

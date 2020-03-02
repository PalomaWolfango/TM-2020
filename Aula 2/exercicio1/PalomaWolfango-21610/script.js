function lerInput() {
    var texto = document.getElementById(  "numero").value;
    if(!texto.length) alert("Sem Conteudo no Input");
    alert("Texto");

    document.getElementById(  "texto").innerText = texto
}
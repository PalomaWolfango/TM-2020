function getInfo() {
    var linkVar = document.getElementById("link");
    var lista = document.getElementById("info");

    lista.innerHTML =
        "ID:"+ linkVar.id + "<br>" +
        "Target:"+ linkVar.target + "<br>" +
        "Type:"+ linkVar.type + "<br>" +
        "Href:"+ linkVar.href + "<br>";

}

function changeColorToRed() {
    var titulos = document.getElementsByClassName("titulo");
    for(let element of titulos) {
        element.style.color = "red";
    }
}

function clickOnCell(cell) {
    cell.innerText = prompt("Novo valor");
    cell.style.backgroundColor = "green";
}



function setClickOnEachTD() {
    var cells = document.getElementsByTagName("td");   //Vai buscar todos os td do documento
    for(let cell of cells){
        cell.onclick = function(){
            clickOnCell(cell);
        }
    }
}

setClickOnEachTD();
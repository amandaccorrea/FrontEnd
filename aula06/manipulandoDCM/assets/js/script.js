var nomes=[];
function alterartitulo(){
    var novotitulo = prompt("Digite um titulo: ");
    var titulo = document.getElementById("titulo");
    titulo.innerHTML = novotitulo;
    //innerHTML recebe o valor de novo titulo
}
function alterarcor(){
    var cor = document.getElementById("input-cor").value;
    document.getElementById("titulo").style.color = cor;
}
function adicionarNaLista(){
    var nome = document.getElementById("input-nome").value;
    document.getElementById("input-name").value ='';
    if(nome === ''){
        return alert("Digite um nome");
    }
    nomes.push(nome);
    atualizarLista();
}
function atulizarLista(){
    if (nomes.length === 0) return;
    document.getElementById("lista-area").innerHTML = '';
    var ol = document.createElement("ol");
    nomes.forEach(function(nome){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(nome));
        ol.appendChild(li);
    });

    document.getElementById("lista-area").innerHTML = ol;
}
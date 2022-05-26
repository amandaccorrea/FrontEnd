// var escopo de funcao
//let qualquer escopo
//const mesmo comportamento de let

/*var exibirTexto = function(){
    if(true){
        let textoIf = "Let dentro do IF"

    }
    console.log(textoIf);
}
exibirTexto();*/
var exibirTexto = function(){
    if(true){
        let textoIf = "Const dentro do IF"

    }
    console.log(textoIf);
}
exibirTexto();
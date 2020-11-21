function botao(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigador por clicar");
}

function redirecionar(){
   //window.open("https://www.proway.com.br/"); //abre em outra página
    window.location.href = "https://www.proway.com.br/"; // abre na mesma página
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto")
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function trocar2(elemento){
   elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto")
}
function voltar2(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)  //carregar o valor do elemento - value
}

//var nome ="Martina Keunecke Beck";
//var idade = 27;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo");
//alert(nome + " tem " + idade + "anos.")
//alert(idade + idade2); //somando duas variáveis
//console.log(nome);
//console.log(idade * idade2);
//console.log(frase.toLowerCase()); //deixa tudo minúsculo
//alert(frase.replace("Japão, "Brasil")); //trocar a palavra por outra
//console.log(nome.toUpperCase()) // deixar tudo maisculo

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); // adicionar item na lista
//lista.pop(); //excluir último item da lista
//console.log(lista.length); //tamanho da lista
//console.log(lista.reverse()); //inverte ordem da lista
//console.log(lista.toString()); //perde referencia de arry, vira string
//console.log(lista.join("-")); // muda a separação maça, uva -> maça - uva
//alert(lista[1]);

/*var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva" , cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);*/

/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

/*var idade = prompt("Qual sua idade?") //receber valor da variável
if (idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
};*/

/*var count =0;
while (count < 5){
    console.log(count);
    count++; // ele recebe ele mesmo mais ele mesmo
}*/

/*var count;
for(count = 0; count <= 5; count++){
    alert(count);
}*/

/*var d = new Date(); //pegar data do sistema
alert(d); //mostra data
alert(d.getHours() + "hrs");
alert("dia" + d.getDay());
alert(d.getMinutes() + "minutos");*/

/*function soma(n1,n2){
    return n1 + n2;
}

//alert(soma(5,10));
*/
/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        return true
    }else{
        return false
    }
}

//var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/



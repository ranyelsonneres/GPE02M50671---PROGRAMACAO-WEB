var meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);

var paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

for (let i=0; i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

var paragrafo2 = document.getElementsByTagName("p");
for (let i=0; i<paragrafo2.length;i++){
    console.log(paragrafo2[i].textContent);
}

var cabecalho1 = document.querySelector(".cabecalho");
console.log(cabecalho1.textContent);

var cabecalho2 = document.querySelectorAll(".cabecalho");
console.log(cabecalho2);

var nome = "Pedro";

//document.getElementById("paragrafo1").textContent = "Texto via JS";
//document.getElementById("paragrafo1").innerHTML = "<h2>Texto via JS</h2>";
document.getElementById("paragrafo1").textContent = `Texto via JS - Seja bem-vindo: ${nome}`;

var botao1 = document.getElementById("botao1");

botao1.onclick = function(){
    alert("Clicou!");
    botao1.textContent = "Clicado";
}

var botao2 = document.getElementById("botao2");

botao2.addEventListener("mouseover", function(){
    botao2.style.backgroundColor = "red";
})

botao2.addEventListener("mouseout", function(){
    botao2.style.backgroundColor = "";
})

botao2.addEventListener("click", function(){
    alert("Você clicou!");
})



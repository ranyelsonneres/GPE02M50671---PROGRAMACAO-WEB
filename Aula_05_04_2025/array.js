//array
let numeros = [10, 20, 30, 40];
let nomes = ["Ana", "Maria", "João"];

console.log(numeros);
console.log(nomes);

let lista = [];
lista[0] = "item 1";
lista[1] = "item 2";
console.log(lista);
console.log(lista[1]);

let cores = new Array("vermelho", "azul", "verde");
console.log(cores);

//metodos
numeros.push(50);
console.log(numeros);

numeros.unshift(0);
console.log(numeros);

numeros.splice(1, 0, 5);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

numeros.splice(2,1);
console.log(numeros);

console.log(numeros.includes(2));
let maiorQue10 = numeros.find(num => num > 10);
console.log(maiorQue10);

for (let i=0; i< numeros.length;i++){
    console.log(numeros[i]);
}

for (let numero of numeros){
    console.log(numero);
}




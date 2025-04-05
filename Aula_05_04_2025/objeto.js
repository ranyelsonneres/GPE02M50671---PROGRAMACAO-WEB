//criar o objeto
const pessoa = {
    nome: "Fulano",
    idade: 20
};

console.log(pessoa);

let pessoa2 = {};
pessoa2.nome = "Ciclano";
pessoa2.idade = 20;
pessoa2.altura = 1.50;

console.log(pessoa2);

let carro = new Object();
carro.nome = "Toyota";
carro.ano = 2020;
console.log(carro);

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let p1 = new Pessoa("João", 25);
let p2 = new Pessoa("Maria", 25);
console.log(p1.nome);
console.log(p2.idade);

console.log(p1);

let pessoas = [p1, p2];
console.log(pessoas);

for (let pessoa of pessoas) {
    console.log("--Pessoa--");
    for (let chave in pessoa){
        console.log(`${chave}: ${pessoa[chave]}`);
    }
}

class Animal {
    constructor(tipo, nome) {
        this.tipo = tipo;
        this.nome = nome;
    }

    emitirSom(){
        return `${this.nome} faz um som!`;
    }
}

let gato = new Animal("Felino", "Fofinho");
console.log(gato.emitirSom());

let cachorro = new Animal();
console.log(cachorro.emitirSom());


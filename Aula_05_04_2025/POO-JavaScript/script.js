class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }


    descricao() {
        return `${this.nome} - ${this.idade} anos`;
    }
}


class GerenciadorPessoas {
    constructor() {
        this.pessoas = [];
    }


    adicionar(nome, idade) {
        if (nome === "" || idade === "") {
            alert("Preencha todos os campos!");
            return;
        }

        const novaPessoa = new Pessoa(nome, idade);
        this.pessoas.push(novaPessoa);
        this.atualizarDOM();
    }


    atualizarDOM() {
        const lista = document.getElementById("listaPessoas");
        lista.innerHTML = "";

        this.pessoas.forEach((pessoa, index) => {
            const li = document.createElement("li");
            li.textContent = pessoa.descricao();


            const botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = () => this.remover(index);

            li.appendChild(botaoRemover);
            lista.appendChild(li);
        });
    }

    remover(index) {
        this.pessoas.splice(index, 1);
        this.atualizarDOM();
    }
}

const gerenciador = new GerenciadorPessoas();


function adicionarPessoa() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    gerenciador.adicionar(nome, idade);


    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}

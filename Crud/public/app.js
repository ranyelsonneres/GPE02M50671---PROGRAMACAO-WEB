const form = document.getElementById('form-user');

const userList = document.getElementById('user-list');

//carregar os usuários do banco de dados
//fetch
function carregarUsuarios() {
    fetch('/api/users')
        .then(res => res.json()) //converte os dados via json
        .then(data => {
            userList.innerHTML = '';
            data.forEach(user => {
                const li = document.createElement('li'); //criar uma lista
                li.innerHTML = `Nome: ${user.nome} - Email: ${user.email}
                <button onclick="atualizarUsuario(${user.id})">Editar</button>
                <button onclick="excluirUsuario(${user.id})">Excluir</button>
                `;
                userList.appendChild(li);
            });
        });
};

carregarUsuarios();

//capturar os dados do formulario
form.addEventListener('submit', e=> {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    //chamar a função para cadastrar
    cadastrarUsuario(nome, email);
})

//funcao para cadastrar
function cadastrarUsuario(nome, email) {
    fetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(() => {
        form.reset();
        carregarUsuarios();
    })
}

//funcao para editar
function atualizarUsuario(id) {
    const nome = prompt('Nome: ');
    const email = prompt('Email');

    fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(() => {
        carregarUsuarios();
    })

}

//funcao para excluir
function excluirUsuario(id) {
    fetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        carregarUsuarios();
    })
}

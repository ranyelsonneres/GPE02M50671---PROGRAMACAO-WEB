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
                li.innerHTML = `Nome: ${user.nome} - Email: ${user.email}`;
                userList.appendChild(li);
            });
        });
};

carregarUsuarios();

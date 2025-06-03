- Copie os arquivos e organize o projeto dessa forma:
```
crud/
├── server.js
├── db.js
├── routes/
│   └── api.js
└── public/
    ├── index.html
    ├── app.js
    └── style.css
```
- Crie o package.json: ```npm init -y```
- Instale o framework e o banco de dados: ```npm install express mysql2 cors```
- Crie o banco de dados utilizado o mysql: ```users.sql``
- Execute o projeto: ```node server.js``` ou ```npx nodemon server.js```

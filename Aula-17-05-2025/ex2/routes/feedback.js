const express = require("express");
const path = require("path");
const router = express.Router();

let listaFeedbacks = [];

router.post("/enviar", (req, res) => {
    const { nome, comentario } = req.body;
    if (nome && comentario) {
        listaFeedbacks.push({ nome, comentario });
        res.redirect("/feedbacks/lista");
    } else {
        res.send("Preencha todos os campos.");
    }
});

router.get("/lista", (req, res) => {
    let html = `
        <h1>Feedbacks Recebidos</h1>
        <ul>`;
    listaFeedbacks.forEach((f, i) => {
        html += `<li><strong>${f.nome}</strong>: ${f.comentario}
            <form method="POST" action="/feedbacks/remover" style="display:inline;">
                <input type="hidden" name="indice" value="${i}">
                <button>Remover</button>
            </form>
        </li>`;
    });
    html += `</ul><a href="/">Voltar</a>`;
    res.send(html);
});

router.post("/remover", (req, res) => {
    const i = parseInt(req.body.indice);
    if (!isNaN(i) && listaFeedbacks[i]) {
        listaFeedbacks.splice(i, 1);
    }
    res.redirect("/feedbacks/lista");
});

module.exports = router;

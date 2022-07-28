"use strict";
const andre = {
    nome: "André",
    idade: 28,
    profissao: 'pintor'
};
const bia = {
    nome: "Bia",
    idade: 20,
    profissao: 'dev'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Dev"] = 2] = "Dev";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 27,
    profissao: Profissao.Professora
};
const jessica = {
    nome: 'Jessica',
    idade: 21,
    profissao: Profissao.Dev,
    materias: ['Matemática discreta', 'programação']
};
const monica = {
    nome: 'Monica',
    idade: 20,
    // profissao: Profissao.Dev,
    materias: ['Matemática discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);

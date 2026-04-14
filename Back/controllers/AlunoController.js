import Aluno from "../models/Aluno.js";

async function listar(req, res) {
    const dados = await Aluno.findAll();
    res.json(dados);
}

async function selecionar(req, res) {
    const matricula = req.params.matricula;
    const dados = await Aluno.findByPk(matricula);
    return res.json(dados);
}

async function excluir(req, res) {
    const matricula = req.params.matricula;
    const dados = await Aluno.destroy({ where: { matricula: matricula } });
    return res.json(dados);
}

async function inserir(req, res) {
    const nome = req.body.nome;
    const email = req.body.email;
    const dados = await Aluno.create({ nome: nome, email: email });
    return res.json(dados);
}

async function alterar(req, res) {
    const matricula = req.params.matricula;
    const nome = req.body.nome;
    const email = req.body.email;
    const dados = await Aluno.update({ nome: nome, email: email }, {
        where: { matricula: matricula }
    });
    res.json(dados);
}

export default { listar, selecionar, excluir, inserir, alterar };
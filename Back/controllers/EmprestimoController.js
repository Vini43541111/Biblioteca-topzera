import Emprestimo from "../models/Emprestimo.js";

async function listar(req, res) {
    const dados = await Emprestimo.findAll();
    return res.json(dados);
}

async function selecionar(req, res) {
    const idemprestimo = req.params.idemprestimo;
    const dados = await Emprestimo.findByPk(idemprestimo);
    return res.json(dados);
}

async function excluir(req, res) {
    const idemprestimo = req.params.idemprestimo;
    const dados = await Emprestimo.destroy({ where: { idemprestimo: idemprestimo } });
    return res.json(dados);
}

async function inserir(req, res) {
    const idexemplar = req.body.idexemplar;
    const idusuario = req.body.idusuario;
    const emprestimo = req.body.emprestimo;
    const vencimento = req.body.vencimento;
    const devolucao = req.body.devolucao;

    const dados = await Emprestimo.create({
        idexemplar: idexemplar,
        idusuario: idusuario,
        emprestimo: emprestimo,
        vencimento: vencimento,
        devolucao: devolucao
    });

    return res.json(dados);
}

async function alterar(req, res) {
    const idemprestimo = req.params.idemprestimo;
    const idexemplar = req.body.idexemplar;
    const idusuario = req.body.idusuario;
    const emprestimo = req.body.emprestimo;
    const vencimento = req.body.vencimento;
    const devolucao = req.body.devolucao;

    const dados = await Emprestimo.update({
        idexemplar: idexemplar,
        idusuario: idusuario,
        emprestimo: emprestimo,
        vencimento: vencimento,
        devolucao: devolucao
    }, {
        where: { idemprestimo: idemprestimo }
    });
    res.json(dados);
}

export default { listar, selecionar, excluir, inserir, alterar };
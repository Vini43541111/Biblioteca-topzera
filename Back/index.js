import Express from "express";
import cors from "cors";
import banco from "./Banco.js";
import usuario from "./controllers/UsuarioController.js";
import obra from "./controllers/ObraController.js";
import exemplar from "./controllers/ExemplarController.js";
import emprestimo from "./controllers/EmprestimoController.js";


try {
    await banco.authenticate();
    console.log('Banco conectado com sucesso.');
} catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
}

const api = Express();
api.use(Express.json());
api.use(cors());

api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

api.get('/teste', (req, res) => {
    res.send('Api funcionando');
});

api.get('/usuario', usuario.listar);
api.get('/usuario/:idusuario', usuario.selecionar);
api.delete('/usuario/:idusuario', usuario.excluir);
api.post('/usuario', usuario.inserir);
api.put('/usuario/:idusuario', usuario.alterar);

api.get('/obra', obra.listar);
api.get('/obra/:idobra', obra.selecionar);
api.delete('/obra/:idobra', obra.excluir);
api.post('/obra', obra.inserir);
api.put('/obra/:idobra', obra.alterar);

api.get('/exemplar', exemplar.listar);
api.get('/exemplar/:idexemplar', exemplar.selecionar);
api.delete('/exemplar/:idexemplar', exemplar.excluir);
api.post('/exemplar', exemplar.inserir);
api.put('/exemplar/:idexemplar', exemplar.alterar);

api.get('/emprestimo', emprestimo.listar);
api.get('/emprestimo/:idemprestimo', emprestimo.selecionar);
api.delete('/emprestimo/:idemprestimo', emprestimo.excluir);
api.post('/emprestimo', emprestimo.inserir);
api.put('/emprestimo/:idemprestimo', emprestimo.alterar);

api.listen(3001, () => { console.log('Api rodando na porta 3001...') });

import banco from "./Banco.js";
import Usuario from "./models/Usuario.js";
import Obra from "./models/Obra.js";
import Exemplar from "./models/Exemplar.js";
import Emprestimo from "./models/Emprestimo.js";

const tabelas = [
    { nome: 'usuario', model: Usuario },
    { nome: 'obra', model: Obra },
    { nome: 'exemplar', model: Exemplar },
    { nome: 'emprestimo', model: Emprestimo }
];

console.log('=== Validacao do banco ===\n');

try {
    await banco.authenticate();
    console.log('[OK] Conexao com o banco estabelecida.\n');
} catch (error) {
    console.error('[FALHA] Nao foi possivel conectar ao banco:');
    console.error('       ', error.message);
    process.exit(1);
}

console.log('--- Verificando tabelas ---');
for (const t of tabelas) {
    try {
        const total = await t.model.count();
        console.log(`[OK]    ${t.nome.padEnd(12)} -> ${total} registro(s)`);
    } catch (error) {
        console.log(`[FALHA] ${t.nome.padEnd(12)} -> ${error.message}`);
    }
}

console.log('\n--- Verificando JOINs (relacionamentos) ---');
try {
    const exemplaresComObra = await Exemplar.findAll({ include: Obra, limit: 1 });
    console.log(`[OK]    exemplar JOIN obra (${exemplaresComObra.length} amostra)`);
} catch (error) {
    console.log(`[FALHA] exemplar JOIN obra -> ${error.message}`);
}

try {
    const emprestimosComUsuario = await Emprestimo.findAll({ include: [Usuario, Exemplar], limit: 1 });
    console.log(`[OK]    emprestimo JOIN usuario+exemplar (${emprestimosComUsuario.length} amostra)`);
} catch (error) {
    console.log(`[FALHA] emprestimo JOIN -> ${error.message}`);
}

console.log('\n=== Fim da validacao ===');
await banco.close();

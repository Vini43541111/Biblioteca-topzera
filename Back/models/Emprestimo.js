import banco from "../Banco.js";
import { DataTypes } from "sequelize";
import Exemplar from "./Exemplar.js";
import Usuario from "./Usuario.js";

const Emprestimo = banco.define(
    'emprestimo',
    {
        idemprestimo: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idexemplar: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        idusuario: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        emprestimo: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        vencimento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        devolucao: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    }
);


Emprestimo.belongsTo(Exemplar, {
    foreignKey: 'idexemplar'
});

Emprestimo.belongsTo(Usuario, {
    foreignKey: 'idusuario'
});

Exemplar.hasMany(Emprestimo, {
    foreignKey: 'idexemplar'
});

Usuario.hasMany(Emprestimo, {
    foreignKey: 'idusuario'
});

export default Emprestimo;
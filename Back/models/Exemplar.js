import banco from "../Banco.js";
import { DataTypes } from "sequelize";
import Obra from "./Obra.js";

const Exemplar = banco.define(
    'exemplar',
    {
        idexemplar: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idobra: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }
);

// 🔗 Relacionamento (FK)
Exemplar.belongsTo(Obra, {
    foreignKey: 'idobra'
});

Obra.hasMany(Exemplar, {
    foreignKey: 'idobra'
});

export default Exemplar;
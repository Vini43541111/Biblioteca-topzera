import { Sequelize } from "sequelize";

const banco = new Sequelize('postgres', 'postgres', 'ixcsoft6001', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

export default banco;

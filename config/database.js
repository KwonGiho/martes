/**
 * Created by kwongiho on 2017. 11. 7..
 */
import Sequelize from 'sequelize';

const mysql = {
    host: "localhost",
    database: "martes",
    username: "root",
    password: "siddid",
    dialect: "mysql",
    pool: {
        max: 8,
        min: 0,
        idle: 10000
    }
};

// make Sequelize object using connection pool
const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
    host: mysql.host,
    dialect: mysql.dialect,
    pool: mysql.pool
});

export default sequelize;
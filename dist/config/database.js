"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mysql = {
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
/**
 * Created by kwongiho on 2017. 11. 7..
 */
var sequelize = new _sequelize2.default(mysql.database, mysql.username, mysql.password, {
    host: mysql.host,
    dialect: mysql.dialect,
    pool: mysql.pool
});

exports.default = sequelize;
//# sourceMappingURL=database.js.map
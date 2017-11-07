'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var findUser = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email) {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:

                        console.log("modles/users.js ", email);
                        user = void 0;
                        _context.prev = 2;
                        _context.next = 5;
                        return User.findOne({ where: { email: email }, attribute: 'email' });

                    case 5:
                        user = _context.sent;
                        _context.next = 11;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](2);

                        console.log(_context.t0);

                    case 11:
                        return _context.abrupt('return', user);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[2, 8]]);
    }));

    return function findUser(_x) {
        return _ref.apply(this, arguments);
    };
}();

var register = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email, password) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function register(_x2, _x3) {
        return _ref2.apply(this, arguments);
    };
}();

var _database = require('../config/database');

var _database2 = _interopRequireDefault(_database);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by kwongiho on 2017. 11. 7..
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var User = _database2.default.define('user', {
    id: {
        type: _sequelize2.default.STRING,
        primaryKey: true
    },
    email: {
        type: _sequelize2.default.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: _sequelize2.default.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});
exports.default = { findUser: findUser };
//# sourceMappingURL=user.js.map
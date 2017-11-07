'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var register = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function register(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var findUser = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var result, email, password;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        result = {};


                        if (!req.body["email"] || !req.body["password"]) {
                            res.status(400).json({ code: _responsecode2.default.NO_PARAM });
                        }
                        email = req.body["email"], password = req.body["password"];


                        console.log("email :", email, "password :", password);
                        _user2.default.findUser(email, password);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function findUser(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _responsecode = require('../config/responsecode');

var _responsecode2 = _interopRequireDefault(_responsecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by kwongiho on 2017. 11. 7..
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


exports.default = { register: register, findUser: findUser };
//# sourceMappingURL=userc.js.map
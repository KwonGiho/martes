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
                        user = void 0;
                        _context.prev = 1;
                        _context.next = 4;
                        return User.findOne({ where: { email: email } });

                    case 4:
                        user = _context.sent;
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](1);

                        console.log(_context.t0);

                    case 10:
                        return _context.abrupt('return', user);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[1, 7]]);
    }));

    return function findUser(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _database = require('../config/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by kwongiho on 2017. 11. 7..
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


//import code from '../config/responsecode';

var User = _database2.default.define('user', {}, {
    classMethods: {
        findUser: findUser
    }
});
exports.default = { findUser: findUser };
//# sourceMappingURL=user.js.map
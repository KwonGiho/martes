'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// async function register (req,res) {
//     var result = {};
//
//     if( !req.body["email"] || !req.body["password"] ) {
//         res.status(400).json({ code: code.NO_PARAM });
//     }
//     let email = req.body["email"],
//         password = req.body["password"];
//
//     console.log("email :",email ,"password :",password);
//     User.findUser(email,password);
// }
/**
 * Get information one user.
 * @param req
 * @param res
 * @returns {Promise.<void>}
 */
var findUser = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var email, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        email = req.query.email;
                        user = void 0;
                        _context.prev = 2;
                        _context.next = 5;
                        return _user2.default.findUser(email);

                    case 5:
                        user = _context.sent;


                        if (user) {
                            res.status(200).json({ code: _responsecode2.default.GET_USERINFO_SUCCESS, data: user });
                        } else {
                            res.status(200).json({ code: _responsecode2.default.GET_USERINFO_NOT_EXIST });
                        }
                        _context.next = 13;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](2);

                        console.log(_context.t0);
                        res.status(500).json({ code: _responsecode2.default.GET_USERINFO_FAIL });

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[2, 9]]);
    }));

    return function findUser(_x, _x2) {
        return _ref.apply(this, arguments);
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


exports.default = { findUser: findUser };
//# sourceMappingURL=userc.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userc = require("../controllers/userc");

var _userc2 = _interopRequireDefault(_userc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//let UserController = require('../controllers/userc');


/* GET users listing. */

var router = function router(app) {
    app.route("/user/:email").get(_userc2.default.findUser);
};

exports.default = router;
//# sourceMappingURL=router.js.map
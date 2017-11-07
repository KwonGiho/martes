"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var UserController = require('../controllers/userController');

/* GET user listing. */

var router = function router(app) {
    app.route("/user").post(UserController.register);
};

//router.post()

exports.default = router;
//# sourceMappingURL=router.js.map
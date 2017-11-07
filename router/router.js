import UserController from "../controllers/userc";

//let UserController = require('../controllers/userc');


/* GET users listing. */

const router = function(app){
    app.route("/user/:email")
        .get(UserController.findUser);
}


export default router;
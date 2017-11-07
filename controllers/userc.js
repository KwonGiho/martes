/**
 * Created by kwongiho on 2017. 11. 7..
 */
import User from '../models/user';
import code from '../config/responsecode';

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
async function findUser(req,res) {
    let email = req.query.email;
    let user;
    try {
        user = await User.findUser(email);

        if (user) {
            res.status(200).json({ code: code.GET_USERINFO_SUCCESS, data: user });
        } else {
            res.status(200).json({ code: code.GET_USERINFO_NOT_EXIST });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ code: code.GET_USERINFO_FAIL });
    }

}
export default { findUser };
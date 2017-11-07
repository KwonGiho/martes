/**
 * Created by kwongiho on 2017. 11. 7..
 */
import sequelize from '../config/database';
//import code from '../config/responsecode';

const User = sequelize.define('user', {}, {
    classMethods: {
        findUser
    }
});
async function findUser(email) {
    let user;
    try {

        user = await User.findOne({ where: { email:email } });
    } catch (error) {
        console.log(error);
    }

    return user;

}

export default {findUser};
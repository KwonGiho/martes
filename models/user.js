/**
 * Created by kwongiho on 2017. 11. 7..
 */
import sequelize from '../config/database';
import Sequelize from 'sequelize';


const User = sequelize.define('user', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false
});
async function findUser(email) {

    console.log("modles/users.js ",email);
    let user;
    try {

        user = await User.findOne({ where: { email },attribute :'email'});
    } catch (error) {
        console.log(error);
    }

    return user;

}
async function register(email,password) {

}

export default {findUser};
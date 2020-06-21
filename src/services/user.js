const db = require('../models');
const User = db.users;

class UserService {
    constructor() { }

    async create(phone) {
        try {
            const user = new User({ phone });
            const newUser = await user.save(user);
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    async patch(id, data) {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, data, { useFindAndModify: false });
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;
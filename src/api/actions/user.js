const UserService = require('../../services/user');

const update = async (req, res, next) => {
    try {
        const { body, params: { id } } = req;
        const service = new UserService();  // should use DI
        const result = await service.patch(id, body);
        return res.json(result).status(200);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    update
};
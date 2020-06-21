const { countries } = require('countries-list');
const VerificationService = require('../../services/verification');
const UserService = require('../../services/user');

const sendCode = async (req, res, next) => {
    try {
        const { body: { country: countryCode, phone } } = req;
        const country = countries[countryCode];
        if (!country) {
            return res.status(404).send('Country could not be found!');
        }
        const phoneNumber = "+" + country.phone + phone;    // "+" + dial code + phone

        const service = new VerificationService();  // should use DI
        const { to, status, valid } = await service.sendCode(phoneNumber);

        return res.json({ phone: to, status, valid }).status(200);
    } catch (error) {
        return next(error);
    }
};

const verifyCode = async (req, res, next) => {
    try {
        const { body: { phone, verificationCode } } = req;

        const service = new VerificationService();  // should use DI
        const { status, valid } = await service.verifyCode(phone, verificationCode);

        let result = { status, valid };
        if (status === 'approved' || valid === true) {
            const userService = new UserService();  // should use DI
            const user = await userService.create(phone);
            result = { ...result, user };
        }

        return res.json(result).status(200);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    sendCode,
    verifyCode
};
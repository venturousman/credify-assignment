const { countries } = require('countries-list');

class VerificationController {

    constructor(verificationService, userService) {
        this.verificationService = verificationService;
        this.userService = userService;
    }

    async sendCode(req, res, next) {
        try {
            const { body: { country: countryCode, phone } } = req;
            const country = countries[countryCode];
            if (!country) {
                return res.status(404).send('Country could not be found!');
            }
            const phoneNumber = "+" + country.phone + phone;    // "+" + dial code + phone

            const verificationRequest = await this.verificationService.sendCode(phoneNumber);

            return res.json({ verificationRequest }).status(200);
        } catch (error) {
            return next(error);
        }
    }

    async verifyCode(req, res, next) {
        try {
            const { body: { phoneNumber, verificationCode } } = req;
            const verificationResult = await this.verificationService.verifyCode(phoneNumber, verificationCode);
            return res.json({ verificationResult }).status(200);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = VerificationController;
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, VERIFICATION_SID } = require('../config/twilio');
const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

class VerificationService {
    constructor() { }

    async sendCode(phoneNumber, channel = 'sms') {
        let verificationRequest;
        try {
            verificationRequest = await twilio.verify.services(VERIFICATION_SID)
                .verifications
                .create({ to: phoneNumber, channel });
        } catch (error) {
            throw error;
        }
        return verificationRequest;
    }

    async verifyCode(phoneNumber, code) {
        let verificationResult;
        try {
            verificationResult = await twilio.verify.services(VERIFICATION_SID)
                .verificationChecks
                .create({ to: phoneNumber, code });
        } catch (error) {
            throw error;
        }
        return verificationResult;
    }
}

module.exports = VerificationService;
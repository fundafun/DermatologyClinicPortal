require("dotenv").config();
const twilio = require("twilio");

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const sendTextConfirmation = async (name, phone, date, time) => {
  try {
    const message = `Hello ${name}, your appointment is confirmed for ${date} at ${time}. Thank you!`;
    const response = await twilioClient.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: phone,
    });
    console.log(`SMS sent: ${response.sid}`);
  } catch (error) {
    console.error("Error sending SMS:", error);
    throw error;
  }
};

module.exports = { sendTextConfirmation };

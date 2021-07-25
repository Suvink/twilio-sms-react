const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';

exports.handler = function (context, event, callback) {
    const twilioClient = context.getTwilioClient();

    //Incoming Message Body
    const body = event.Body;

    //Create a message
    twilioClient.messages
        .create({
            body: body,
            messagingServiceSid: 'TWILIO_MESSAGING_SERVICE_ID',
            to: 'RECEIVERS PHONE'
        })
        .then((message) => {
            console.log('SMS successfully sent');
            console.log(message.sid);
            //Send response to the user
            return callback(null, {
                "status": "success",
                "messageSID": message.sid
            });
        })
        .catch((error) => {
            console.error(error);
            return callback(error);
        });
};
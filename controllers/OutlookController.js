var nodeMailer = require("nodemailer");
const SendMail = async (req, res) => {
  try {
    //Transporter configuration
    let transporter = nodeMailer.createTransport({
        host: "outlook.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: "it@veninecable.com", //REPLACE WITH YOUR EMAIL ADDRESS
            pass: "Venine@2018" //REPLACE WITH YOUR EMAIL PASSWORD //REPLACE WITH YOUR EMAIL PASSWORD
        }
    })

    //Email configuration
    await transporter.sendMail({
        from: "it@veninecable.com", //SENDER
        to: "sabtawee_s@veninecable.com", //MULTIPLE RECEIVERS
        subject: "TEST", //EMAIL SUBJECT
        text: "This is a test email.", //EMAIL BODY IN TEXT FORMAT
        html: "<b>This is a test email.</b>", //EMAIL BODY IN HTML FORMAT
    })
  } catch (error) {
    console.log({ message : error.message })
  }
};

module.exports = { SendMail }


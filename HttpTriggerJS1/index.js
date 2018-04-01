const nodemailer = require("nodemailer");

async function asyncAzureFn(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  context.log("nodemailer", nodemailer);

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let account = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "jtougas@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  };

  let info = await transporter.sendMail(mailOptions);
  context.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  context.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

function azureFn(context, req) {
  asyncAzureFn(context, req)
    .then(function() {
      context.log("Finished succesfully");
      context.done();
    })
    .catch(function(err) {
      context.log("Finished with error", err);
      context.done();
    });
}

module.exports = azureFn;

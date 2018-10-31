const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'demeules.barrett@gmail.com', // generated ethereal user
    pass: '' // generated ethereal password
  }
};
const transporter = nodemailer.createTransport(transport);

app.post('/api/form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;
  let mailOptions = {
    from: name,
    to: 'demeules.barrett@gmail.com',
    subject: 'New Message',
    text: content
  };

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log('Error occurred');
      console.log(error.message);
    } else {
      console.log('Message sent: %s', response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

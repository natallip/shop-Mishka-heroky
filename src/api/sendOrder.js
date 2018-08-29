const router = require('express').Router();
const nodemailer = require('nodemailer');
const config = require('../config/config.json');

router.post('/', (req, res) => {
  if (!req.body.user || !req.body.email || !req.body.phone || !req.body.typeOfGoods || !req.body.colorOfGoods || !req.body.text) {
    res.json({error: 'Specify the data'});
    return res.status(400);
  }

  const transporter = nodemailer.createTransport(config.mail.smtp);
  const text = `phone: ${req.body.phone},
  typeOfGoods: ${req.body.typeOfGoods},
  colorOfGoods: ${req.body.colorOfGoods},
  wishes: ${req.body.text}`;

  const mailOptions = {
    from: `"${req.body.user}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text: text
  };
  transporter.sendMail(mailOptions, (error, info) => {
     if (error) {
      res.json('error');
      return res.status(400);
    }
    res.json('success');
  });
});

module.exports = router;

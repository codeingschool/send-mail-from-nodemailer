/*
var nodemailer = require('nodemailer');
var ejs = require("ejs")

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shubhamroy12345@gmail.com',
      pass: 'Roy@12345'
    }
  });
  
  var data = ejs.renderFile(__dirname+"/mail.ejs", { name: 'Stranger' })

  var mailOptions = {
    from: 'shubhamroy12345@gmail.com',
    to: 'shubham.roy021@gmail.com',
    subject: 'Sending Email using Node.js',
    html: data
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  */

//  var fs = require("fs");
 var nodemailer = require("nodemailer");
 var ejs = require("ejs");
 var transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 465,
     secure: true, // use SSL
     auth: {
         user: 'shubhamroy12345@gmail.com',
         pass: 'Roy@12345'
     }
 });
 
 ejs.renderFile( __dirname + "\\mail.ejs", { name: 'Stranger' }, function (err, data) {
 if (err) {
     console.log(err);
 } else {
     var mainOptions = {
         from: '"Subham" shubhamroy12345@gmail.com',
         to: "ritamde1998@gmail.com",
         subject: 'Email Verification',
         html: data
     };
     console.log("html data ======================>", mainOptions.html);
     transporter.sendMail(mainOptions, function (err, info) {
         if (err) {
             console.log(err);
         } else {
             console.log('Message sent: ' + info.response);
         }
     });
 }
 
 });
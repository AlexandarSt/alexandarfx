const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const date = new Date().toLocaleDateString();

const time = new Date().toLocaleTimeString();

// SENDGRID

// Narudzbina

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/order/order', (req, response) => {
  
  const {
    firstName,
    lastName,
    address,
    city,
    phone,
    email,
    text,
    rng,
    cartItems,
    total
  } = req.body;

  const orderedItems = cartItems.map((cartItem) => {
    return {
        "name": cartItem.name,
        "price": cartItem.price,
        "quantity": cartItem.quantity,
        "imageUrl": cartItem.imageUrl
    }
  })

  let items = JSON.stringify({orderedItems})
  items = JSON.parse(items)
  

  const msg = {
    to: [process.env.MAIL,`${email}`],
    from: 'office@alexandarfx.com',
    templateId: 'd-f7252ad5b03842689f417e6ea5930d8f',
    dynamic_template_data: {
      subject: 'Order',
      rng: `#${rng}`,
      date: `${date}`,
      time: `${time}`,
      firstName: `${firstName}`,
      lastName: `${lastName}`,
      address: `${address}`,
      city: `${city}`,
      phone: `${phone}`,
      email: `${email}`,
      text: `${text}`,
      total: `${total}€`,
      items
    }
  }
  
  sgMail.send(msg).then(() => console.log('Email sent succesfully!'))
  .catch((error) => {console.log(error)})
})


// Contact

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/contact/mail', (req, response) => {
  
  const {firstlastName, email, text} = req.body;

  const msg = {
    to: process.env.MAIL,
    from: 'office@alexandarfx.com',
    templateId: 'd-8fdc2cd3bdf9459ba654c536c5f8b277',
    dynamic_template_data: {
      subject: 'Poruka sa AlexandarFx',
      name: `${firstlastName}`,
      email: `${email}`,
      text: `${text}`,
      date: `${date}`,
      time: `${time}`,
    }
  }

  sgMail.send(msg).then(() => console.log('Email sent succesfully!'))
  .catch((error) => {console.log(error)})
})



if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, 'client/build')));
   
   app.get('*', function(req, res){
       res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
   })
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});


//Stripe

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// app.post('/payment', (req, res) => {
//     const body = {
//         source: req.body.token.id,
//         amount: req.body.amount,
//         currency: 'usd'
//     };
//     stripe.charges.create(body, (stripeErr, stripeRes) => {
//         if (stripeErr) {
//             res.status(500).send({error: stripeErr})
//         } else {
//             res.status(200).send({success: stripeRes})
//         }
//     })
// })
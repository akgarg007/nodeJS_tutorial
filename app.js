const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const errorController = require('./controllers/error');

// Import User Model
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) =>{
    User.findById('5c4f38cb45441c274c7c9be7')
    .then(user => {
        // this is full mongoose model, we can call all the mongoose models and methods on this req.user object
        req.user = user;
        next();
    })
    .catch(err => console.log(err))
})

// app.use((req, res, next) => {
//     console.log(req.user);
//     next()
// })

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://akgarg007:Zwtlieat65qHNq9s@cluster0-bwmrr.mongodb.net/shop?retryWrites=true')
.then(result => {
    // console.log('ok');
    User.findOne().then(user => {
        // console.log(user);
        if(!user){
            const user = new User({
                name: 'Ashwani Garg',
                email: 'akgarg007@gmail.com',
                cart: {
                    items:[]
                }
            });
            user.save();
        }
    })
    app.listen(3000);
})
.catch(err => console.log(err));



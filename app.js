const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

// import sequelize
const sequelize = require('./util/database');

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');




const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) =>{
    User.findById(1)
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => console.log(err))
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);



// to create the tables in the database using models via sequelize
// it syncs your models with the database tables
// if the model name is product
// then it will create table "products"
// with timestamps as in Laravel Database Migrations

Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
});

User.hasMany(Product);

// A user has one cart
User.hasOne(Cart);
Cart.belongsTo(User);

// An order belongs to a user / User can have many orders
Order.belongsTo(User);
User.hasMany(Order);

// an order can belongs to many products
Order.belongsToMany(Product, {through: OrderItem});


// http://docs.sequelizejs.com/manual/tutorial/associations.html#belongs-to-many-associations
// Cart belongs to many products - ManytoMany
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
// because,we have already created the tables, so now to make relations between them, overwrites the tables
// Use with caution in production, it will delete the old tables with data
// use force: true
sequelize
    // .sync({force: true})
    .sync()
    .then(result => {
        return User.findById(1);
        // console.log(result);
    })
    .then(user => {
        if(!user){
            return User.create({
                name: 'Ashwani',
                email: 'akgarg007@gmail.com'
            })
        }
        return user;
    })
    .then(user => {
        // console.log(user);
        return user.createCart();

    })
    .then(cart => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err)
    });



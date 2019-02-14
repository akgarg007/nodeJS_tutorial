const path = require('path');

const express = require('express');
require('express-group-routes');

const adminController = require('../controllers/admin');

// here we are adding the middleware is-auth to all the needed routes
// we will simply add the isAuth in the routes in the left of the controllers
// as request always travels from left to route
const isAuth = require('../middleware/is-auth.js');

const router = express.Router();

router.group((passRoutes) => {
    passRoutes.use(isAuth);
});
// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;

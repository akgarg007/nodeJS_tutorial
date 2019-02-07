const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
    User.findById('5c4f38cb45441c274c7c9be7')
        .then(user => {
            // this is full mongoose model, we can call all the mongoose models
            // and methods on this req.user object
            req.session.isLoggedIn = true;
            req.session.user = user;
            // console.log(req.session.isLoggedIn);
            res.redirect('/');
        })
        .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(req.session);
        res.redirect('/');
    });
};

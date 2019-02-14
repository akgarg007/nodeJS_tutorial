
// this middleware is used to protect routes from unauthorised access

// you have pass all admin or authorised routes via this middleware
module.exports = (req, res, next) =>{
    if(!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}
const mongoose = require('mongoose');
const User = require('../models/User.model')

module.exports.register = (req, res, next) => {
    res.render('register');
};

module.exports.doRegister = (req , res, next) => {
    User.create(req.body)
        .then((user)=>{
            console.log(user)
            user.checkpassword(req.body.password);
            res.redirect('/login');
        })
        .catch((err)=>{
            if (err instanceof mongoose.Error.ValidationError) {
                res.render("register", {
                  user: {
                    email: req.body.email,
                  },
                  errors: err.errors,
                });
              } else {
                next(err);
              }
        })
}

module.exports.login = (req,res, next) => {
    res.render('login');
}

module.exports.doLogin = (req,res,next) => {
    const { email, password} = req.body;

    User.findOne({email})
    .then((user) => {
        if(!user){
            res.redirect('login');
        } else {
            user.checkpassword(password)
                .then((match)=>{
                    if (match){
                        res.redirect('login-page')
                    } else {
                        res.redirect('login')
                    }
                })
        }
    })
}

module.exports.loggedIn = (req,res,next) => {
    res.render("login-page")
}
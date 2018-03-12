const express = require('express');
const user = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/db');
const router = express.Router();

//user register
router.post('/user-register', function(req, res) {
    user.count({ 'email': req.body.email })
        .then(cnt => {
            if (cnt > 0) {
                return res.json({ success: false, msg: 'Email already Exist' });
            }
            let userData = new user({
                'email': req.body.email,
                'username': req.body.username,
                'fullname': req.body.fullname,
                'phno': req.body.phno
            });
            userData.password = userData.generateHash(req.body.password);
            userData.save((err) => {
                if (err) {
                    return res.json({ success: false, msg: 'Error in saving form', err });
                }
                res.json({ success: true, msg: 'Data Saved Succefully...' })

            })
        });
});

//Login with email and password
router.post('/login', function(req, res) {
    user.findOne({ 'email': req.body.email })
        .then((user) => {
            //if (err) res.json({ 'success': false, 'msg': err });

            if (!user) {
                return res.json({ 'success': false, msg: 'Email Id Not Found' });
            } else {
                const password = user.validPassword(req.body.password);
                if (!password) {
                    return res.json({ 'success': false, msg: 'Password not found' });
                } else {
                    let token = jwt.sign({ 'userId': user._id }, config.secret, { expiresIn: '12h' })
                    return res.json({ 'success': true, 'token': token, user: { 'email': user.email } });
                }
            }
        });
});

router.use((req, res, next) => {
    var token = req.headers['token'];
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({ 'success': false, 'msg': err });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
});


module.exports = router;
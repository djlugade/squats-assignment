const express = require("express");
const router = express.Router();

//live connect
const mongojs = require('mongojs');
const db = mongojs('mongodb://djlugade:djlugade123@ds261078.mlab.com:61078/squats', ['users']);


// User add post
router.post('/add-post', (req, res) => {
    db.users.update({ "email": req.body.email }, {
        "$push": {
            "blog": {
                "title": req.body.title,
                "msg": req.body.msg,
                "date": req.body.date
            }
        }
    }, (err) => {
        if (err) return res.json({ 'success': false, 'msg': `error ${err.message}` });
        return res.json({ 'success': true });
    });

});


// get user post
router.get('/user-post', (req, res) => {
    db.users.find({ 'email': req.query.email }, (err, data) => {
        if (err) return res.json({ 'success': false, 'msg': err });
        if (!data) return res.json({ 'success': false, 'msg': 'No data found' });
        return res.json({ 'success': true, 'userData': data });
    });
});

module.exports = router;
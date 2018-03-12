const express = require("express");
const router = express.Router();

//live connect
const mongojs = require('mongojs');
const db = mongojs('mongodb://djlugade:djlugade123@ds261078.mlab.com:61078/squats', ['users']);


// Find user
router.get('/userData', (req, res) => {
    db.users.find({}).toArray((err, data) => {
        if (err) return res.json({ 'success': false, 'msg': err });
        if (!data) return res.json({ 'success': false, 'msg': 'No data found' });
        return res.json({ 'success': true, 'userdata': data });
    });
});


module.exports = router;
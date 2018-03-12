const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    url: 'mongodb://djlugade:djlugade123@ds261078.mlab.com:61078/squats',
    secret: crypto,
    db: 'squats'
}
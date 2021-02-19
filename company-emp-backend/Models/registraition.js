var db = require('../dbConnection');

var Registraition = {
    getAllRegistraition: function (callback) {
        return db.query('select * from registraition', callback);
    },
    getAllRegEmailPhone: function (email, callback) {
        return db.query('select * from registraition where email=?', [email], callback);
    },
    getAllRegEmailPhonePass: function (user, password, callback) {
        return db.query('select * from registraition where email=? OR phone=? AND password=?', [user, user, password], callback);
    },
    // getAllRegEmailPhonePass: function (email, phone, password, callback) {
    //     return db.query('select * from registraition where email=? OR phone=? AND password=?', [email, phone, password], callback);
    // },
    addReg: function (object, callback) {
        return db.query(
            "insert into registraition values(?,?,?,?)",
            [
                object.name,
                object.email,
                object.phone,
                object.password,
            ],
            callback
        );
    },
};

module.exports = Registraition;
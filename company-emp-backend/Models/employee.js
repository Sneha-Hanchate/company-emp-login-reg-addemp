var db = require('../dbConnection');

var Employee = {
    getAllEmployee: function (callback) {
        return db.query('select * from employee ', callback);
    },
    addEmp: function (object, callback) {
        return db.query(
            "insert into employee values(?,?,?,?)",
            [
                object.name,
                object.age,
                object.sallary,
                object.phonenumber,
            ],
            callback
        );
    },

    getAllNamePhone: function (name, phonenumber, callback) {
        return db.query('select * from employee where name=? AND phonenumber=?', [name, phonenumber], callback);
    },
};

module.exports = Employee;
var express = require('express');
var router = express.Router();
var employee = require('../Models/employee');

router.get('/', function (req, res, next) {
    employee.getAllEmployee(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res, next) {
    employee.addEmp(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:name/:phonenumber', function (req, res, next) {

    if (req.params.name && req.params.phonenumber) {
        employee.getAllNamePhone(
            req.params.name,
            req.params.phonenumber,
            function (err, rows) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
            }
        );
    } else {
        employee.getAllEmployee(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

module.exports = router;
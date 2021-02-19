var express = require('express');
var router = express.Router();
var register = require('../Models/registraition');


router.get('/', function (req, res, next) {
    register.getAllRegistraition(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/:email', function (req, res, next) {

    if (req.params.email) {
        register.getAllRegEmailPhone(
            req.params.email,

            function (err, rows) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
            }
        );
    } else {
        register.getAllRegistraition(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.get('/:user/:password', function (req, res, next) {

    if (req.params.user && req.params.password) {
        register.getAllRegEmailPhonePass(
            req.params.user,
            // req.params.phone,
            req.params.password,
            function (err, rows) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
            }
        );
    } else {
        register.getAllRegistraition(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
// router.get('/:email/:phone/:password', function (req, res, next) {

//     if (req.params.email || req.params.phone && req.params.password) {
//         register.getAllRegEmailPhonePass(
//             req.params.email,
//             req.params.phone,
//             req.params.password,
//             function (err, rows) {
//                 if (err) {
//                     res.json(err);
//                 } else {
//                     res.json(rows);
//                 }
//             }
//         );
//     } else {
//         register.getAllRegistraition(function (err, rows) {
//             if (err) {
//                 res.json(err);
//             } else {
//                 res.json(rows);
//             }
//         });
//     }
// });

router.post('/', function (req, res, next) {
    register.addReg(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

// router.get('/:email/:phone', function (req, res, next) {
//     register.getAllRegEmailPhone(req.params.email, req.params.phone, function (err, rows) {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });
// });

// router.get('/:email/:phone/:password', function (req, res, next) {
//     register.getAllRegEmailPhonePass(req.params.email, req.params.phone, req.params.password, function (err, rows) {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });
// });

module.exports = router;
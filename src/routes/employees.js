const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Show all the employees
router.get('/',  (req,res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;
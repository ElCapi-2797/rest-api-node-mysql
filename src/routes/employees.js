const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Request all the employees
router.get('/',  (req,res) => {
    
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//Requeste a employee by Id
router.get('/:id', (req,res) => {
    
    const { id } = req.params;
    
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err,rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

//Create a new employee
router.post('/', (req,res) => {
    const { id, name, salary } = req.body;
    
    const query = `
        CALL employeeAddOrEdit(?,?,?);
    `;
    
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Employeed Saved'});
        }else{
            console.log(err);
        }
    });
});

//Edit a employee
router.put('/:id', (req,res) => {
    const { name, salary } = req.body;
    const { id } = req.params;

    const query = 'CALL employeeAddOrEdit(?, ?, ?);';

    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Employeed Updated'});
        }else{
            console.log(err);
        }
    });


});

//Delete a employee
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Employeed Deleted'});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;
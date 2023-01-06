const express=require('express');
const Router=express.Router();
const expensecontroller=require('../controllers/expense');


Router.post('/expense/add-expense',expensecontroller.postaddexpense);
module.exports=Router;
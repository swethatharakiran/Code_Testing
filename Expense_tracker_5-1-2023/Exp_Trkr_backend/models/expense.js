const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        //allowNull:false,
        primaryKey:true
    },
    amount:{
        type:Sequelize.INTEGER,
        //allowNull:false

    },
    desc:{
        type:Sequelize.STRING,
        //allowNull:false
    },
    category:{
        type:Sequelize.INTEGER,
        //allowNull:false
    }
})

module.exports=Expense;

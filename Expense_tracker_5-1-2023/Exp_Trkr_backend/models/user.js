const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
        
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

const Expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    desc:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=User;
module.exports=Expense;
const Expense=require('../models/expense');


exports.postaddexpense=async(req,res,next)=>{
    try{
    const amount=req.body.amount;
    const desc=req.body.desc;
    const category=req.body.category;
    
    await Expense.create({amount,desc,category})
    .then(()=>{res.status(200).json({message:"Successfully added expense"})})
    .catch(err=>{res.send(err)})
    }
    catch(err){
        console.log(err)
    }


}
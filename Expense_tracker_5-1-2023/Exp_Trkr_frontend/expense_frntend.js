const f3=document.getElementById('expenseform');
f3.addEventListener("submit",addexpense);
async function addexpense(e){
    e.preventDefault();
    const expense={
        amount:document.getElementById('amount').value,
        desc:document.getElementById('desc').value,
        category:document.getElementById('category').value

    }
    try{
    const response=await axios.post("https://localhost:3000/expense/add-expense",expense)
    alert(response.data.message);
    }
    catch(err){
        document.body.innerHTML+=`<div "style=color:red">${err.message}</div>`
    }
}
const fp=document.getElementById('fp_form');
fp.addEventListener('submit',recoverpassword);
//const localhost='18.183.18.49';
const localhost='localhost';

async function recoverpassword(e){
    e.preventDefault();
    const email=document.getElementById('email').value ;
    const obj1={
        email:email
    }
    try{
    const response=await axios.post(`http://${localhost}:3000/password/forgotpassword`,obj1);
    alert(response.data.message);
    }
    catch(err){
        console.log(err)}
    
}
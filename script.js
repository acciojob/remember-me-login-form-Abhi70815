//your JS code here. If required.
document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault()
let checkbox=document.getElementById('checkbox');
let username=document.getElementById('username');
let password=document.getElementById('password');
	if(checkbox.checked==true){
localStorage.setItem("username",username.value);
localStorage.setItem("password",password.value);
    }
    else{
 localStorage.removeItem('username');
 localStorage.removeItem('password');
    }
})
//your JS code here. If required.
let checkbox=document.getElementById('checkbox');
let username=document.getElementById('username');
let password=document.getElementById('password');
document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault()
	if(checkbox.checked==true){
localStorage.setItem("username",username.value);
localStorage.setItem("password",password.value);
    }
    else{
 localStorage.removeItem('username');
 localStorage.removeItem('password');
    }
})

document.getElementById('existing').addEventListener('click',()=>{
if(username.value==localStorage.getItem('username') && password.value==localStorage.getItem('password')){
	alert("Logged in as "+localStorage.getItem('username'));

}
})
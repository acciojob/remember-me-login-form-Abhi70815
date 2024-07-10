//your JS code here. If required.
let checkbox=document.getElementById('checkbox');
let username=document.getElementById('username');
let password=document.getElementById('password');
document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();
    if(checkbox.checked==true){
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
        alert("Logged in as " + username.value);
    }
    else{
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
});

if (localStorage.getItem('username') && localStorage.getItem('password')) {
    document.getElementById('existing').style.display = 'block';
} else {
    document.getElementById('existing').style.display = 'none';
}

document.getElementById('existing').addEventListener('click',()=>{
    alert("Logged in as " + localStorage.getItem('username'));
});
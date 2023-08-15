 
 document.getElementById('btn-login').addEventListener('click', function(){

    const email = document.getElementById('input-email');
    const inputEmail = email.value;
    
    const password = document.getElementById('input-password');
    const inputPassword = password.value;
    console.log(inputPassword)

    if ( inputEmail !== 'support@bestflashfile.com' ){
        alert('invalid email')
    }
else if ( inputPassword !== '12345678'){
    alert('invalid password')
}
    else if ( inputEmail === 'support@bestflashfile.com' && inputPassword === '12345678'  ){
        window.location.href = "./login.bank.html";
        }   
    else {
        alert('invalid user')
        }


 })
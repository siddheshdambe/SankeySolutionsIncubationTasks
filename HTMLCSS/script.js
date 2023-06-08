const username = "xyz@example.com";
const password = "Admin@123";

let button = document.querySelector('#login-now');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
    
    let entered_pwd = passwordInput.value;
    let entered_un = emailInput.value.toLowerCase();
    if(entered_un == '' && entered_pwd == ''){
        document.querySelector('.reqd-msg-pwd').style.display='inline';
        document.querySelector('.reqd-msg-email').style.display='inline';
        document.querySelector('.error-msg-pwd').style.display='none';
        document.querySelector('.error-msg-email').style.display='none';
        document.querySelector('#login-now').textContent="Login now";

    }else if(entered_un=='' && entered_pwd!=''){
        document.querySelector('.reqd-msg-email').style.display='inline';
        document.querySelector('.reqd-msg-pwd').style.display='none';
        document.querySelector('.error-msg-pwd').style.display='none';
        document.querySelector('.error-msg-email').style.display='none';
        document.querySelector('#login-now').textContent="Login now";
    }
    else {
        if(entered_un == username){
        if(entered_pwd== password){
            
            document.querySelector('#login-now').textContent="Successfull Login";
            document.querySelector('.error-msg-pwd').style.display='none';
            document.querySelector('.error-msg-email').style.display='none';
            document.querySelector('.reqd-msg-pwd').style.display='none';
            document.querySelector('.reqd-msg-email').style.display='none';
        }else{
            document.querySelector('.error-msg-pwd').style.display='inline';
            document.querySelector('#login-now').textContent="Login now";
            document.querySelector('.error-msg-email').style.display='none';
            document.querySelector('.reqd-msg-pwd').style.display='none';
            document.querySelector('.reqd-msg-email').style.display='none';
        }
    }else{
        document.querySelector('.error-msg-email').style.display='inline';
        document.querySelector('.error-msg-pwd').style.display='none';
        document.querySelector('#login-now').textContent="Login now";
        document.querySelector('.reqd-msg-pwd').style.display='none';
        document.querySelector('.reqd-msg-email').style.display='none';
    }}
});
    
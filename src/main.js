function getBack() {
    window.location.href = '/';
}

function signUp() {
    window.location.href = 'signup.html'
}

function validSignUp() {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (username.length < 8) {
        alert('Username must be longer than 8 characters');
        return false
    } else if (password.length < 8) {
        alert('Password must be longer than 8 characters');
        return false
    } else {
        return true;
    }
}
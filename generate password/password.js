


function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    const length = 12;

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").value = password;
    checkStrength(password);
}

function copyPassword() {
    const passField = document.getElementById("password");
    passField.select();
    document.execCommand("copy");
    alert("Password copied!");
}

// function generatePassword(){
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
//     let password = "";
//     const length = 12;

//     for (let i = 0; i < length; i++){
//         password += chars.charsAt(Math.floor(Math.random() * chars.length)) ;
// }
//    document.getElementById("password").value= password
//     checkStrength(password);
// }

// function copyPassword() {
//     const passField = document.getElementById("password");
//     passField.select();
//     document.execCommand("copy");
//     alert("Password copied!");
// }

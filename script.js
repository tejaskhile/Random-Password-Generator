const passwordBox = document.querySelector("#password-txt");
const length = 8;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$^&*";

const all = uppercase + lowercase + numbers + symbols;

function createPassword(){
    let password = "";
    password+= uppercase[Math.floor(Math.random() * uppercase.length)];
    password+= lowercase[Math.floor(Math.random() * lowercase.length)];
    password+= numbers[Math.floor(Math.random() * numbers.length)];
    password+= symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password+= all[Math.floor(Math.random() * all.length)];
    }
    passwordBox.value = password;
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}
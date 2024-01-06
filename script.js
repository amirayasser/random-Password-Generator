// get dom elements 
let passwordTxtField = document.querySelector('.password-box input')
let copyIcon = document.querySelector(".password-box i");
let range = document.querySelector('.range-box input')
let passwordLength = document.querySelector('.range-box span')
let btn = document.querySelector('.genBtn')


var length = range.value  



function generateRandomPassword(length) {

    const capitalAlphaCharset = generateCharset('A', 'Z');
    const smallAlphaCharset = generateCharset('a', 'z');
    const numericCharset = generateCharset('0', '9');
    const fullCharset = capitalAlphaCharset + smallAlphaCharset + numericCharset;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * fullCharset.length);
        password += fullCharset[randomIndex];
    }

    console.log(length)

    return password;
}
function generateCharset(startChar, endChar){
    // Convert the starting and ending characters to their Unicode values
    const startCode = startChar.charCodeAt(0);
    const endCode = endChar.charCodeAt(0);

    // Initialize an empty string to store the generated characters
    let charset = "";

    // Loop through the Unicode values from startCode to endCode
    for(let i = startCode; i <= endCode; i++){
        // console.log('i = ' , i)
        // Convert the current Unicode value back to a character and append it to the charset
        charset += String.fromCharCode(i)
        // console.log('charset = ' ,charset)
    }

    // Return the dynamically generated charset
    return charset;
}


function isPasswordValid(password) {
    // At least one capital letter, at least one digit (number)
    const regex = /^(?=.*[A-Z])(?=.*\d).+$/;
    return regex.test(password);
}



range.addEventListener("input",function(){
    passwordLength.textContent = range.value
    generateRandomPassword(range.value)
})


btn.addEventListener('click', function(){
   length = range.value
  let randomPassword;
   
  do {
    randomPassword = generateRandomPassword(length);
} while (!isPasswordValid(randomPassword));   

    console.log("Valid Password:", randomPassword);
    passwordTxtField.value = randomPassword

})

copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordTxtField.value);
    copyIcon.classList.replace("fa-regular", "fa-solid"); //replace icon
});




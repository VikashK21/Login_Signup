// const fs=require('fs');

// function formula() {
//     var read=fs.readFileSync('Login_Signup.txt', 'utf-8')
//     var verify=(require('readline-sync')).question('Enter your Gmail: ')
//     var verify2=(require('readline-sync')).question('Enter your Password: ')
//     if (read.includes(verify, verify2)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(`1. Login Account\n2. SignUp Account`);
// var opt=(require('readline-sync')).question('Enter your option: ') 
// if (opt==1){
//     if (formula()){
//         console.log('Welcome to your logged in page.');
//     }
//     else{
//         console.log('Your account does not exits, go for SignUp!!');
//     }
// }
// else if(opt==2){
//     var username=(require('readline-sync')).question('Enter your full name: ')
//     var email=(require('readline-sync')).question('Enter your Gmail: ')
//     if (email.includes('@gmail.com')){
//         let check=fs.readFileSync('Login_Signup.txt', 'utf-8');

//         if (!check.includes(email)){
//             var pass=(require('readline-sync')).question('Enter your Password: ');
//             if (pass.length>=8){
//                 console.log('Your SignUp successfully done.');
//                 fs.appendFileSync('Login_Signup.txt', `\n${username}  ${email}  ${pass}`)
//             } 
//             else{
//                 console.log('Invalid Password!!');
//             }       
//         }
//         else{
//             console.log('This gmail already exits.');
//         }
//     }
//     else{
//         console.log('Invalid Gmail!!');
//     }
// }






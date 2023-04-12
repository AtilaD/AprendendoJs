var userName = '';
userName ? console.log('Hello, ${userName}!') : console.log('Hello!');
const userQuestion = 'Usuario deseja fazer Bola Magica 8?';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
var eightball = '';
switch(randomNumber){
  case 0:
    eightball = 'It is certain';
    break;
  case 1:
    eightball = 'It is decidedly so';
    break;
  case 2:
    eightball = 'Reply hazy try again';
    break;
  case 3:
    eightball = 'Cannot predict now';
    break;
  case 4:
    eightball = 'Do not count on it';
    break;
  case 5:
    eightball = 'My sources say no';
    break;
  case 6:
    eightball = 'Outlook not so good';
    break;
  case 7:
    eightball = 'Signs point to yes';
    break;
}
console.log(eightball);

let randomNumber2 = Math.floor(Math.random() * 8);
var eightball2 = '';

if(randomNumber2 == 0){
  eightball2 = 'It is certain';
  console.log(eightball2);
  return;
}else if(randomNumber2 == 1){
  eightball2 = 'It is decidedly so';
  console.log(eightball2);
  return;
}else if(randomNumber2 == 2){
  eightball2 = 'Reply hazy try again';
  console.log(eightball2);
  return;
}else if(randomNumber2 == 3){
  eightball2 = 'Cannot predict now';
  console.log(eightball2);
  return;
}else if(randomNumber2 == 4){
  eightball2 = 'Do not count on it';
  console.log(eightball2);
  return;
}else if(randomNumber2 == 5){
  eightball2 = 'My sources say no';
  console.log(eightball2);
  return;
}else if(randomNumber2 == 6){
  eightball2 = 'Outlook not so good';
  console.log(eightball2);
  return;
}else if(randomNumber2 == 7){
  eightball2 = 'Signs point to yes';
  console.log(eightball2);
  return;
}

console.log(eightball2);
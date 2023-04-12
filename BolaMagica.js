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

randomNumber = Math.floor(Math.random() * 8);
eightball = '';

if(randomNumber === 0){
  eightball = 'It is certain';
  return;
}else if(randomNumber === 1){
  eightball = 'It is decidedly so';
  return;
}else if(randomNumber === 2){
  eightball = 'Reply hazy try again';
  return;
}else if(randomNumber === 3){
  eightball = 'Cannot predict now';
  return;
}else if(randomNumber === 4){
  eightball = 'Do not count on it';
  return;
}else if(randomNumber === 5){
  eightball = 'My sources say no';
  return;
}else if(randomNumber === 6){
  eightball = 'Outlook not so good';
  return;
}else if(randomNumber === 7){
  eightball = 'Signs point to yes';
  return;
}
console.log(eightball);
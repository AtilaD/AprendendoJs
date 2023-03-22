var myAge = 23; //Minha idade
var earlyYears = 2; //Anos iniciais
earlyYears *= 10.5;
var laterYears = myAge - 2;
laterYears *= 4; // Anos depois dos 2 anos decorridos
console.log(earlyYears  , laterYears);
var myAgeInDogYears = earlyYears + laterYears; //minha idade como idade de cachorro
var myName = 'Atila Dutra'.toLowerCase(); // meu nome
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);// usando as variaveis
let raceNumber = Math.floor(Math.random() * 1000);
let registroAnt = false;
let idadeCorredor = 19;

if (idadeCorredor > 18 && registroAnt === true) {
  raceNumber = raceNumber + 1000;
  console.log(raceNumber);
}else{
    console.log(raceNumber)
}
if (idadeCorredor > 18 && registroAnt === true) {
  console.log("9h30");
} else if (idadeCorredor > 18 && registroAnt !== true) {
  console.log("11h");
} else if (idadeCorredor < 18) {
  console.log("12h30");
} else {
  console.log("va para o balcao");
}
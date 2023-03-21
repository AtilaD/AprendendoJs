const kelvin = 0; //variavel kelvin
const celsius =kelvin - 273; // Celsius é menos 273 kelvin
let fahrenheit = celsius * (9 / 5) + 32; // temperatura em fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
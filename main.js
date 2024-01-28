// This is the constant variable for the forecasted temp in kelvin measurements
var kelvin = 293;

// This is the temp converted from kelvin to celsius.
var celsius = kelvin -= 273;

// This is the temp converted from celsius to fahrenheit.
var fahrenheit = celsius * (9/5) + 32;

// This is the temp coverted from celsius to newton.
var newton = celsius * (33/100);

// Reassigns variable and converts any decimal numbers by rounding down.
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees newton.`);

const convertToCelsius = function(degrees) {
  //Formula for Fahrenheit to Celcius
  const celcius = ((degrees-32) * (5/9));
  //Return without decimals or return with one decimal to the right
  return Number.isInteger(celcius) ? celcius : Number(celcius.toFixed(1));
};

const convertToFahrenheit = function(degrees) {
  //Formula for Celcius to Fahrenheit
  const fahrenheit = ((degrees * (9/5)) + 32);
  //Return without decimals or return with one decimal to the right
  return Number.isInteger(fahrenheit) ? fahrenheit : Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function(fahrenheit) {
  const fTemp = fahrenheit;
  const cTemp = (5/9) * (fTemp - 32);
  return Math.round(cTemp * 10) / 10;


};

const convertToFahrenheit = function(celsius) {
  const cTemp = celsius;
  const fTemp = (cTemp * 1.8) + 32;
  return Math.round(fTemp * 10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

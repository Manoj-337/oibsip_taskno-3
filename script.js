function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var unit = document.getElementById("unit").value;
  var convertedTemperature;
  var units;

  if (unit === "celsius") {
    // Convert Celsius to Fahrenheit
    convertedTemperature = (temperatureInput * 9/5) + 32;
    units='°F';
  } else if (unit === "fahrenheit") {
    // Convert Fahrenheit to Celsius
    convertedTemperature = (temperatureInput - 32) * 5/9;
    units='°C';
  } else if (unit === "kelvin") {
    // Convert Kelvin to Celsius
    convertedTemperature = temperatureInput - 273.15;
    units='°C';
  }

  document.getElementById("result").textContent = "Converted Temperature: " + convertedTemperature.toFixed(2) + units;
}

//script

const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree"); 
const convertBtn = document.querySelector("#convert-btn"); 
const fromType = document.querySelector("#temp-typeFrom"); 
const toType = document.querySelector("#temp-typeTo"); 

// window loading reset
window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertBtn.innerHTML =
  "<span><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
 
  setTimeout(() => {
    convertToCelsius();
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 500);



  // Adding loading feature with a proper spinner element

});

function convertToCelsius() {
  let inputvalue = parseFloat(degree.value); // value to a float

  console.log(fromType.value);
  console.log(toType.value);

  if (fromType.value == "celsiusFrom" && toType.value == "kelvinTo") {
    celsiusField.innerHTML = `${celsiusToKelvin(inputvalue)} Kelvin`

  } else if (
    fromType.value == "celsiusFrom" &&
    toType.value == "fahrenheitTo"
  ) {
    celsiusField.innerHTML = `${celsiusToFahrenheit(inputvalue)} Fahrenheit`


  } else if (fromType.value == "kelvinFrom" && toType.value == "fahrenheitTo") {
    celsiusField.innerHTML = `${kelvinToFahrenheit(inputvalue)} Fahrenheit`

  } else if (fromType.value == "kelvinFrom" && toType.value == "celsiusTo") {
    celsiusField.innerHTML = `${kelvinToCelsius(inputvalue)} Celcius`

  } else if (
    fromType.value == "fahrenheitFrom" &&
    toType.value == "celsiusTo"
  ) {
    celsiusField.innerHTML = `${fahrenheitToCelsius(inputvalue)} Celcius`

  } else if (fromType.value == "fahrenheitFrom" && toType.value == "kelvinTo") {
    celsiusField.innerHTML = `${fahrenheitToKelvin(inputvalue)} Kelvin`

  }

 
}


// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Celsius to Kelvin
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  // Kelvin to Celsius
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  // Fahrenheit to Kelvin
  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
  }
  
  // Kelvin to Fahrenheit
  function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
  }
  

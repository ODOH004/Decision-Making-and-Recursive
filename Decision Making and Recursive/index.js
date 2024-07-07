function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}


function weatherClothingAdviser() {
    // Get user input for temperature and raining status
    let temperature = prompt("What is the current temperature in degrees Celsius?");
    let isRaining = prompt("Is it raining? (yes/no)").toLowerCase();

    // Convert temperature to a number
    temperature = parseFloat(temperature);

    // Determine clothing advice based on temperature and raining status
    let clothingAdvice = "";

    if (isNaN(temperature)) {
        clothingAdvice = "Please enter a valid temperature.";
    } else {
        if (temperature < 0) {
            clothingAdvice = "It's freezing outside! Wear a heavy coat, gloves, scarf, and a hat.";
        } else if (temperature < 10) {
            clothingAdvice = "It's quite cold. Wear a coat, hat, and gloves.";
        } else if (temperature < 20) {
            clothingAdvice = "It's a bit chilly. Wear a jacket or sweater.";
        } else if (temperature < 30) {
            clothingAdvice = "The weather is warm. Light clothing is fine.";
        } else {
            clothingAdvice = "It's very hot outside! Wear shorts and a t-shirt, and stay hydrated.";
        }

        if (isRaining === "yes") {
            clothingAdvice += " Don't forget to take an umbrella or a raincoat.";
        }
    }

    // Display the clothing advice
    console.log(clothingAdvice);
    alert(clothingAdvice);
}

// Call the function to execute the program
weatherClothingAdviser();


function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function power(base, exponent) {
    // Base case: Any number raised to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }
    // Handle negative exponents
    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    // Recursive case: base^exponent = base * base^(exponent-1)
    return base * power(base, exponent - 1);
}

// Example usage:
console.log(power(2, 3));  // 8
console.log(power(5, -2)); // 0.04
console.log(power(7, 0));  // 1
console.log(power(3, 4));  // 81
console.log(power(10, -1)); // 0.1


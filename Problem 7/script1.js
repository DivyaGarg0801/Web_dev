class BMI {
    calculate() {
        let height = parseFloat(document.getElementById("height").value);
        let weight = parseFloat(document.getElementById("weight").value);

        if (!height || !weight) {
            document.getElementById("result").innerText = "Please enter valid values";
            return;
        }

        let bmi = weight / (height * height);
        let category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        }
        else if (bmi < 25) {
            category = "Normal weight";
        }
        else if (bmi < 30) {
            category = "Overweight";
        }
        else {
            category = "Obese";
        }

        document.getElementById("result").innerText =
            "Your BMI is " + bmi + " (" + category + ")";
    }

    clear() {
        document.getElementById("height").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("result").innerText = "";
    }
}

let bmiObj = new BMI();

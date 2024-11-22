function calculate(operation) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultDiv = document.getElementById("result");

    if (num1 === "" || num2 === "") {
        resultDiv.innerHTML = "<span style='color: red;'>Can not be empty!</span>";
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                resultDiv.innerHTML = "<span style='color: red;'>Cannot divide by zero!</span>";
                return;
            }
            result = number1 / number2;
            break;
    }

    resultDiv.innerHTML = `<strong>Result:</strong> ${result}`;
}
function resetInputs(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("result").innerHTML="";
}
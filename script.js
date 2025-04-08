function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter a number!!!!!";
    }
    else {
        switch (op) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? (num1 / num2) : "Cannot divide by zero";
                break;
            default:
                result = "Invalid!!!!";
        }
    }

    document.getElementById('result').value = result;
}
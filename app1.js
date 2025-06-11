function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  let result;

  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  }

  document.getElementById("result").value = result;
}

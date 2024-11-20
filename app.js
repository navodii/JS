function calc(){
  let num1
  let num2
  num1 = Number(document.getElementById("num1").value)
  num2 = Number(document.getElementById("num2").value)

  let output = document.getElementById("output")
  let operator = document.getElementById("op").value

  switch (operator) {
    case "+":
      output.innerHTML = num1+num2;
      break;

    case "-":
      output.innerHTML = num1-num2;
      break;

    case "*":
      output.innerHTML = num1*num2;
      break;

    case "/":
      output.innerHTML = num1/num2;
      break;
  }
  
}

console.log("hi");

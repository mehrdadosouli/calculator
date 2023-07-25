let result = document.querySelector("#result");
let result_sum = document.querySelector(".result_sum");
let flag_calc = true;
let clicks=0
// ------------onclick number-----------------------
const appendCharacter = (num) => {
    if(clicks<4){
        result.innerHTML += num;
        clicks++
    }
};

// ------------onclick calc-----------------------
const calc = (c) => {
    clicks=0
    if (flag_calc) {
      console.log('hii');
    result.innerHTML += " " + c + " ";
    flag_calc=false;
    console.log(flag_calc);
  }
  if(result_sum.innerHTML){
    result.innerHTML="";
    result.innerHTML +=`${result_sum.innerHTML} ${c}`+ " ";
    flag_calc=false;
  }
  
};

// --------------onclick resultSum-----------------
const calculateResult = () => {
    let res=result.innerHTML.split(" ")
    console.log(res);
    let num1=res[0]
    let calcMath=res[1]
    let num2=res[2]
    switch (calcMath) {
        case "+":
            result_value=num1 + num2
            break;
        case "-":
            result_value=num1 - num2
            break;
        case "*":
            result_value=num1 * num2
            break;
        case "/":
            result_value=num1 / num2
            break;
    
        default:
            break;
    }
    result_sum.innerHTML=result_value
};

// -------------onclick clear-----------------
const clearResult = () => {
    result_sum.innerHTML=""    
    result.innerHTML=""   
    flag_calc=true 
    clicks=0
};

// function calculator(n1,n2,op){
// let result;
// switch(op){
//     case '+':
//         result = n1 + n2;
//     break;

//     case '-':
//         result = n1 - n2;
//     break;

//     case '*':
//         result = n1 * n2;
//     break;

//     case '/':
//         if(n2===0){
//        console.log("you can not divide by 0");
//       }
//       else{
//         result= n1/n2;
//       }
//       break;

//       default:
//         console.log("error operator");
//         break;

// }
// return result;
// }

// console.log(calculator(5,0,'/'));









const calculatorContainer = document.getElementById("calculator_container");
const displayArea = document.getElementById("display");

function clear() {
  displayArea.textContent = " ";
}
function addToDisplayArea(value) {
  displayArea.textContent = displayArea.textContent + value;
}


function deleteOneValue() {
  let currentContent = displayArea.textContent;
  displayArea.textContent = currentContent.substring(
    0,
    currentContent.length - 1
  );
}


function evaluate() {
    try {
      let result = eval(displayArea.textContent);
      displayArea.textContent = result;
    } catch (error) {
      displayArea.textContent = "error";
    }
  }
calculatorContainer.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    switch (e.target.textContent) {
      case "C":
        clear();
        break;
      case "DEL":
        deleteOneValue();
        break;
      case "=":
        evaluate();
        break;
      default:
        addToDisplayArea(e.target.textContent);
    }
  }
});

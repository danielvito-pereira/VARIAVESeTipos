var a = 1;
var b = 2;


if (a===1) {
    var a = 11; // escopo global 
    let b = 22;// escopo local de bloco 

    console.log(a,b);//11 e 22
    
}

console.log(a,b);//1 e 2


// conceito de hoisting 
// o hoisting consiste basicamente em declarar o valor da variavel antes de declarar a variavel 

// exeplos 

numberOne = 1;

console.log(numberOne + 2);

var numberOne;

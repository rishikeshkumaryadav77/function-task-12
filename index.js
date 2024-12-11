// 1. How would you define a function that takes two numbers as parameters and returns their sum?
//-------------------js CODE-------------------------
function sumOfTwoNumbers(a, b){
  
    return a+b
}
console.log(sumOfTwoNumbers(5, 7))








// 2. If you define a function that accepts a string as a parameter, how would you modify it to print the string in uppercase?
//-------------------js CODE
function toConvertUpperCase(string){
  return string.toUpperCase();
}
var res = toConvertUpperCase("rishikesh");
console.log(res)






// 3. In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?
//------------------js CODE

function greet(name) {
  return (`Hello, ${name}!`);
}

console.log(greet(undefined)); 
//when we pass argument as undefiend,so parameter also store undefiend value only












// 4. Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?
//-------------js Code
function toCheckArrayIsEmpty(arr){
  if (arr == (arr.lentgth == 0)){
    return "array is empty"
  }
  else{
    return `array is not empty`
  }
}

res = toCheckArrayIsEmpty([1,2])
console.log(res)















// 5. write a function that takes two numbers as parameters and returns their difference.
//------js code----------
function differenceOfTwoNumbers(a, b){
  return a-b;
}
res = differenceOfTwoNumbers(8, 6);
console.log(res)







// 6. Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."
//--------------js code-----------------
function nameAndAge(name, age){
  return `Hello, ${name.toUpperCase()}! you are ${age} years old...`
}
res = nameAndAge("rishikesh", 20);
console.log(res)








// 7. Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false.

//-----js code
function toCheckEvenNumber(a){
  if (a%2 ==0){
    return "True"
  }
  else{
    return "False"
  }
}

res = toCheckEvenNumber(99);
console.log(res)

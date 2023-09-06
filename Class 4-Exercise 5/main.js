//Write a JavaScript function called reverseString that takes a string as an argument and returns the reverse of the string. For example, if the input is "Hello", the function should return "olleH".

function reverseString(userstring) {
 const newstring = userstring.split("").reduce((acc, char) => char + acc, "");
console.log(newstring)}
reverseString("Amanda")

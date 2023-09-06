//Write a function that checks if a given word or phrase is a palindrome (reads the same backward as forward, ignoring spaces, punctuation, and capitalization).

function checkPalindrome(string) {
  const arrayValues = string.split("");

  const reverseArrayValues = arrayValues.reverse();

  const reverseString = reverseArrayValues.join("");

  if (string == reverseString) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}

checkPalindrome("radar");

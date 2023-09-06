//Balanced Parentheses

//Given a string containing just the characters '(', ')', ', ', '[' and ']', determine if the input string is valid (i.e., has balanced parentheses). Write a function that determines this.

function checkBalance(s) {
  let i = -1;
  let stack = [];
  for (let ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
      i++;
    } else {
      if (
        i >= 0 &&
        ((stack[i] === "(" && ch === ")") ||
          (stack[i] === "{" && ch === "}") ||
          (stack[i] === "[" && ch === "]"))
      ) {
        stack.pop();
        i--;
      } else {
        return false;
      }
    }
  }
  return i === -1;
}

let expr = "(', ')', ', ', '[' and ']";

if (checkBalance(expr)) console.log("Valid");
else console.log("Invalid");

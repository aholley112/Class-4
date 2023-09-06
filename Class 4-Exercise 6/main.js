//Write a JavaScript function called calculateArea that takes the radius of a circle as an argument and returns the area of the circle. Use the formula A = π * r^2.

function calculateArea(r) {
  let π = Math.PI;
  return π * r * r;
}

let r, Area;
r = 10;

Area = calculateArea(r);

console.log("Area of Circle is: " + Area);

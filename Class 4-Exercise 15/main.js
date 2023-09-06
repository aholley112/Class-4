//Write a function that prints the numbers from 1 to 100. But for multiples of three, instead of the number, print "Fizz"; for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzBuzz(num) {
    console.log(num);
      for (var i = 0; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0 ) {
          console.log('fizzbuzz');
        } else if (i % 5 === 0) {
          console.log('buzz');
        } else if (i % 3 === 0) {
          console.log('fizz');
        } else {
          console.log(i);
        }
      }
    }
  
  console.log(fizzBuzz(100));
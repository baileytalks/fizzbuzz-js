function FizzBuzz(number) {
  if(number % 15 === 0) {return 'fizzbuzz'}
  else if(number % 3 === 0) {return 'fizz'}
  else if(number % 5 === 0) {return 'buzz'}
  else {return number}
}

function FizzBuzzPrinter() {
    for (i = 1; i < 101; i++) {
      console.log(FizzBuzz(i))};
  }

FizzBuzzPrinter()

/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('ball player', 'spain', 'Shaq', 3);
=> "You will be a ball player in spain, and married to Shaq with 3 kids."
*/
function tellFortune(x, y, z, n) {
  var result =
    "You will be a " +
    x +
    " in" +
    y +
    " and married to " +
    z +
    " with " +
    n +
    " kids";
  return result;
}
console.log(tellFortune("programmer", "jordan", "Alex", 3));

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(nn) {
  var result = "Your doggie is " + nn * 7 + " years old in dog years!";
  return result;
}
console.log(calculateDogAge(3));

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, apd) {
  var maxOfAge = 70;
  var total = apd * 365 * (maxOfAge - age);
  var result =
    "You will need " +
    total +
    " to last you until the ripe old age of " +
    maxOfAge;
  console.log(result);
}
calculateSupply(23, 1);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Jouza")
=> "Hello Jouza"
*/

function greet(name) {
  var result = 'hello ' + name;
  return result;
}
console.log(greet('Asma'))
/*
5
what is the error:
function double(cat) { // x not defined
  return 2 * x;
}

function double(7) { // must parameter not number
  return 2 * 7;
}

function double('7') { // must parameter not number and
  // we can't put * between number and text
  return 2 * 'x';
}
*/



/*
6
fix these functions:
func double1(x { // this is the correct function  (x)
  return 2 * x ;
}

functiondouble2 x) // this is the correct function double2 (x)
return 2 * x;
}

function (x) double3 { // this the correct function double3(x)
  return 2 * x;

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x) {
  var result = x ** 3;
  return console.log('the size of the cube is: ' + result)
}
cube(3);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12

*/
function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}
console.log(multiply(5, 6))

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

*/
function canIGetADrivingLicense(age) {
  if (age >= 20) {
    var result = " yes you can"
    return result
  } else {
    var x = 20 - age;
    var result = "please come back after " + x + " years to get one"
    return result
  }
}
console.log(canIGetADrivingLicense(25))
console.log(canIGetADrivingLicense(18))

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, 
and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(text1, text2) {
  var x = text1.length;
  var y = text2.length;
  if (x === y) {
    return "true";
  } else {
    return "false"
  }
}
console.log(sameLength('rashed', 'asma'))
console.log(sameLength('tree', 'good'))
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1, num2) {
  if (num1 > num2) {
    return num1
  } else if (num1 < num2) {
    return num2
  } else {
    return 'are equal'
  }
}
console.log(largerNubmer(15, 1))
console.log(largerNubmer(15, 20))
console.log(largerNubmer(15, 15))

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5
*/
function smallerNubmer(n1, n2, n3) {
  if (n1 < n2 && n1 < n3) {
    return n1;
  } else if (n2 < n1 && n2 < n3) {
    return n2;

  } else {
    return n3;
  }

}
console.log('the small number is : ', smallerNubmer(2, 3, 5))
console.log('the small number is : ', smallerNubmer(15, 7, 5))


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by
*/
function length1(s) {
  var x = s.length;
  return x;
}

function shorterString(x1, x2, x3, x4, x5) {
  if (length1(x1) < length1(x2) && length1(x1) < length1(x3) &&
    length1(x1) < length1(x4) && length1(x1) < length1(x5)) {
    return x1;
  } else if (length1(x1) > length1(x2) && length1(x2) < length1(x3) &&
    length1(x2) < length1(x4) && length1(x2) < length1(x5)) {
    return x2;
  } else if (length1(x1) > length1(x3) && length1(x3) < length1(x2) &&
    length1(x3) < length1(x4) && length1(x3) < length1(x5)) {
    return x3;
  } else if (length1(x1) > length1(x4) && length1(x4) < length1(x3) &&
    length1(x2) > length1(x4) && length1(x4) < length1(x5)) {
    return x4;
  } else
    return x5;
}
console.log(shorterString("air", "school", "car", "by", "github"))

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: shorterString("air","school","car","github")
=> school
*/
function longerString(x1, x2, x3, x4) {
  if (length1(x1) > length1(x2) && length1(x1) > length1(x3) &&
    length1(x1) > length1(x4)) {
    return x1;
  } else if ((length1(x1) < length1(x2) && length1(x2) > length1(x3)) &&
    length1(x2) > length1(x4)) {
    return x2;
  } else if ((length1(x1) < length1(x3) && length1(x3) > length1(x2)) &&
    length1(x3) > length1(x4)) {
    return x3;
  } else
    return x4;
}
console.log(longerString("air", "school", "car", "by"))

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/
function isEven(n1) {
  var y = n1 % 2;
  if (y === 0) {
    return 'true'
  }
  return 'false'
}
console.log(isEven(8))
console.log(isEven(67))

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even
Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/
function isOdd(n1) {
  var y = n1 % 2;
  if (y === 1) {
    return 'true'
  }
  return 'false'
}
console.log(isOdd(8))
console.log(isOdd(67))

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed
Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/
function positive(x) {
  if (x >= 0) {
    return x
  } else {
    return -1 * x;
  }
}
console.log(positive(0))
console.log(positive(-2))

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName, lastName) {
  return console.log(firstName, lastName)
}
fullName('Asma', 'Alfauri')
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
Ex: average(1,2,3,4,5)
=> 3
Ex: average(5,7,9,3,5)
=> 5.8
*/
function average(x1, x2, x3, x4, x5) {
  var sum = x1 + x2 + x3 + x4 + x5;
  var avg = sum / 5;
  return console.log(avg)
}
average(5, 7, 9, 3, 5)
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN
Ex: randomNumber()
=> 0.2278
Ex: randomNumber()
=> 0.475
*/
console.log(Math.random());
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN
Ex: randomBetweenNumbers(1,8)
=> 7.5412
Ex: randomBetweenNumbers(3,100)
=> 23
*/
function randomBetweenNumbers(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomBetweenNumbers(5, 9))
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49
Ex: scoreInUniversty(96)
=> "A"
Ex: randomBetweenNumbers(3)
=> "F"
*/
function scoreInUniversty(scor) {
  if (0 < scor && scor < 49) {
    return 'F'
  } else if (50 < scor && scor < 69) {
    return 'D'
  } else if (70 < scor && scor < 84) {
    return 'C'
  } else if (85 < scor && scor < 94) {
    return 'B'
  } else
    return "A";
}
console.log(scoreInUniversty(90))

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*/
var x = 0;

function counter() {
  x = x + 1;
  return x
}
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*/
function resetCounter() {
  var m = x
  x = 0;
  return m + " and the counter reset now"
}
console.log(resetCounter())
console.log(counter())


/*
25
// this question is in progress wait
Write a function called guessMe
that will take an argument (number)
if the number not between 0 and 5 [0,1,2,3,4]
it will return "Please insert a number between 0 and 5"
if it is between 0 and 5, and guessed the correct number 0-5 [0,1,2,3,4]
will return "you guess me correctly"
if it is between 0 and 5, and not the same number randomly 0-5 [0,1,2,3,4]
will return "you didnt guess me I was 3"
Ex: guessMe(0)
=> "you didnt guess me I was 3"
Ex: guessMe(10)
=>"Please insert a number between 0 and 5"
Ex: guessMe(-5)
=> "Please insert a number between 0 and 5"
Ex: guessMe(3)
=> "you guess me correctly"
*/
function gussMe(n) {
  if (n > 5) {
    return "Please insert a number between 0 and 5"
  } else if (n !== 3) {
    return "you didn't guess me I was 3"
  } else if (n === 3) {
    return "you guess me correctly"
  }
}
console.log(gussMe(15))
console.log(gussMe(3))
console.log(gussMe(1))
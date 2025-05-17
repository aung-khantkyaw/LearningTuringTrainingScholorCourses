# Day 1 (4/1/2025) - Introduction

## Programming Language

- syntax : How it looks
- semantics : How it works
- pragmatics : How to use it in the proper way

**The lexical structure** of a programming language is the set of elementary rules that specifies how you write programs in that language.

- Comments
- Literals : a data value that appears directly in a program
- Identifiers : simply a name, must begin with a letter, an underscore (\_), or a dollar sign ($)

## Day 2 (5/1/2025) - Lexical Element

- Reserved Words : keywords that must not be used as the names of constants, variables, functions, or classes
- Unicode
- Optional Semicolons : Like many programming languages, JavaScript uses the semicolon (;) to separate statements from one another.

**Variable** : Value inside variable can change.

`type variable = value;`

- variable => ခွက်
- value => ခွက်ထဲရှိတဲ့ ပစ္စည်း
- type => ပစ္စည်း အမျိုးအစား (value & operation)

```javascript
let a = 16;
console.log('type of : ', typeof a);
//output => type of : number

let b = "hello";
console.log('type of : ', typeof b);
//output => type of : string
```

dynamic type programming => type က value နဲ့ ချိတ်တယ်

- Python
- PHP
- JS
- Ruby

```javascript
let a;
a = 1;          //number
a = 'hello';    //string
a = True;       //bollean
```

static type programming => type က variable နဲ့ ချိတ်တယ်

- C Family
- Java
- Go

```javascript
int a = 1;          //number
String b = 'hello';    //string
bool c = True;       //bollean
```

### JavaScript Types

1. Primitive types => number, string, boolean, undefined, null, symbol
2. Object types => anything else

Number => JS မှာ int, float မခွဲ

**Integer Literals** </br>
|- base-2 => 0b </br>
|- base=8 => 0o </br>
|- base-16 => 0x </br>

**Floating-Point Literals**</br>
|- E-n => 10^n ( eg; E-32 => 10^32 )

### Arithmetic

1. addition => +
2. subtraction => -
3. multiplication => \*
4. division => /
5. modulo => %
6. exponentiation => \*\*

In JavaScript => any number divided by zero : Infinity
In Java => any number divided by zero : divition by zero error

NaN => not-a-number ( NaN != NaN )

### 3 Zero in Programming

```javascript
let a = 0;  // positive zero
let b = -0; // negative zero

a == b  => // true
1/a     => positive infinity
1/b     => negative infinity
```

computer can store only rational number. if you try to store iratonal number, storage may be full. (rounding error)

```javascript
let a = 0.3;
let b = 0.2;
let c = a - b;

c   => 0.1
a - b == 0.1 => false
```

you cannot directly check floating number. (equally)

### String

```javascript
let text = "Price = " + price
            +" Quantity = " + quantity;
let text = `Price = ${price}
            Quantity = ${quantity}`;
```

## Day 3 (6/1/2025) - Type, Variable, Value

### String Literal

1. 'two\nlines' => A string representing 2 lines written on one line
2. "one\
   long\
   line" => A one-line string written on 3 lines
3. `the newline character
at the end of this line` => A two-line string written on two lines is included literally in this string

### String Concat

1. str3 = str1 + str2; // Recommand, more pragmatics
2. str3 = str1.concat(str2);

```javascript
let s = "Hello, world";

// Obtaining portions of a string
s.substring(1,4) // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.split(", ") // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l")       // => 2: position of first letter l
s.indexOf("l", 3)    // => 3: position of first "l" at or after 3
s.indexOf("zz")      // => -1: s does not include the substring "zz"
s.lastIndexOf("l")   // => 10: position of last letter l

s.includes("or")     // => true: s includes substring "or"
```

You can use not only indexOf but also includes to search a word from string. But includes is more pragmatics

### Boolean

any JavaScript value can be converted to a boolean value.

This six values are falsely values.

1. undefined
2. null
3. 0
4. -0
5. NaN
6. ""  
   Other values are True.

type of Null is Object. (from Java)

## Day 4 (12/1/2025) - Expressions and Operators

let arr = [10,20,30]; => Statements => Full Meaning ( Sentences )
[10,20,30] => Expressions => Partial Meaning ( Phases )

let obj = {
   name : "AKK", => Property
   age : 22,
   accress : {
      city : 'MUB',
   }
}

Property Access Expression => obj.name || obj['name']
Conditional Property Access (?.) => obj?.address?.city //Apperar at ES2020
Object Creation Expression => new Object()

### Oprand & Operator

a + b => + is operator, a & b are oprands.

```javascript
let a = 10;
console.log(a++); // 10
console.log(++a); // 11
```

**Operator Precedence** : pg-149
**
*/%
+-

**Operator Associativity** : left to right, right to left
Binary operator has left-to-right associativity.
exponentiation, unary, assignment, and ternary conditional operators have right-to-left associativity.

obj
   object to primitive
      valueOf?
         toString

Date Object => toString? => valueOf

"+" semantics
   if obj
      obj -> toPrimitive
         if one of the operand string
            conact
         else arithmetic
            convert operand => number
               do arithmetic

ConvertToNumber (old school -> Number())
+true -> 1
+false -> 0
+null -> 0
+'' -> 0
+'a' -> NaN
+NaN -> NaN
undefined -> NaN

## Day 5 (13/1/2025) - Expressions and Operators 2

### Unary Arithmetic Operators

Unary plus (+)
   The unary plus operator converts its operand to a number (or to NaN) and returns that converted value.

Unary minus (-)
   it converts its operand to a number, if necessary, and then changes the sign of the result.

Increment (++) [ a = a + 1; a += 1; ] (effect on original value)
   The operator converts its operand to a number, adds 1 to that number, and assigns the incremented value back into the variable, element, or property.

Decrement (--) [ a = a - 1; a -= 1; ] (effect on original value)
   It converts the value of the operand to a number, subtracts 1, and assigns the decremented value back to the operand.

### Relational Expressions

   always evaluate to a boolean value, and that value is often used to control the flow of program execution in if, while, and for statements

```javascript
let mark = +window.prompt("Enter mark");
let isPass = mark >= 40;
console.log('Is pass ', isPass);
```

Assignment (=)
Equality (==)
Strict Equality (===)

"10" == 10 => true (check only value)
"10" === 10 => false (check both value and data type)

### Comparison Operators

Less than (<)
Greater than (>)
Less than or equal (<=)
Greater than or equal (>=)

### The in Operator

   The in operator expects a left-side operand that is a string, symbol, or value that can be converted to a string. It expects a right-side operand that is an object. It evaluates to true if the left-side value is the name of a property of the right-side object.

```javascript
let point = {x: 1, y: 1};  // Define an object
 "x" in point // => true: object has property named "x"
 "z" in point // => false: object has no "z" property.
```

### The instanceof Operator

   The instanceof operator expects a left-side operand that is an object and a right-side operand that identifies a class of objects. The operator evaluates to true if the left-side object is an instance of the right-side class and evaluates to false otherwise.

```javascript
let date = new Date();  // Create a new object with the Date() constructor
date instanceof Date    // => true: d was created with Date()
date instanceof Object  // => true: all objects are instances of Object
date instanceof Number  // => false: d is not a Number object
```

### Logical Expressions

Logical AND (&&) -> all true => true
   0 0 => 0
   0 1 => 0
   1 0 => 0
   1 1 => 1

if LHS falsy
   return LHS
else if LHS truthy
   return RHS

Logical OR (||) -> only one true => true
   0 0 => 0
   0 1 => 1
   1 0 => 1
   1 1 => 1

if LHS falsy
   return RHS
else if LHS truthy
   return LHS

Logical NOT (!) -> true <=> false
   1 => 0
   0 => 1

### Assignment Expressions

```javascript
let string = "3+2";
eval(string); => 5
```

Why should not use eval?

```javascript
let string = "3+2;Console.log("Hello")"; // RCE => Remote Command Execution
```

### The Conditional Operator (?:)

```javascript
x > 0 ? true : false;
```

## Day 6 (18/1/2025) - Statement

### First-Defined (??)

The first-defined operator ?? evaluates to its first defined operand: if its left operand is not null and not undefined, it returns that value.

```javascript
// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.
 let max = maxWidth || preferences.maxWidth || 500;

// If maxWidth is defined, use that. Otherwise, look for a value in
// the preferences object. If that is not defined, use a hardcoded constant.
 let max = maxWidth ?? preferences.maxWidth ?? 500;
```

### The typeof Operator

typeof is a unary operator that is placed before its single operand, which can be of any type. Its value is a string that specifies the type of the operand.

### The delete Operator

delete is a unary operator that attempts to delete the object property or array element specified as its operand. Like the assignment, increment, and decrement operators, delete is typically used for its property deletion side effect and not for the value it returns.

### The comma Operator (,)

The comma operator is a binary operator whose operands may be of any type. It evaluates its left operand, evaluates its right operand, and then returns the value of the right operand.

```javascript
// The first comma below is part of the syntax of the let statement
// The second comma is the comma operator: it lets us squeeze 2
// expressions (i++ and j--) into a statement (the for loop) that expects 1.
 
for(let i=0,j=10; i < j; i++,j--) {
   console.log(i+j);
}
```

### Conditionals

#### if

if(expression) statement;

if(expression){
   statement_one;
   statement_two;
}

#### if else

if(expression)
   statement_one;
else
   statement_two;

if(expression)
   statement_one;
else if(expression)
   statement_two;
else
   statement_three;

#### switch

switch(expression){
   statements
}

switch(n){
   case 1:
      statement_one;
      break;
   case 2:
      statement_two;
      break;
   default:
      statement_default;
      break;
}

### while loop

```javascript
let counter = 0;  // initialization

while(counter < 5) // condition -> truthy
{
   console.log(counter);
   counter++; // step
}

console.log("end");
```

## Day 7 (19/1/2025) - Statement 2

### do while loop

```javascript
let num = Math.round(Math.random()*10); => output number 0 to 9

let input;
let count = 0;
do{
   input = +prompt("Enter num");
   if(input < num){
      console.log('Too Small');
   }
   if (input > num){
      console.log('Too large');
   }
   count++;
}while(num != input);

console.log('Correct at time ', count);
```

### for loop

```javascript
for(let counter = 0; //initialization
   counter < 5; //condition -> loop enter -> truthy -> enter -> else -> exit
   counter++ //step
){
   console.log('Hi ', counter); //loop body
}
```

### for of loop => go every step, can't jump and edit

```javascript
let arr = [1,2,3];
for(const item of arr){
   console.log(item);
}

let obj = {
   name: "Mg Mg",
   age: 13
};

console.log('Keys ', Object.keys(obj));   //keys
console.log('Values ', Object.values(obj));  //values
console.log('Entries ', Object.entries(obj));   //key+value
```

### while and do while loop are conditional control loop

loop
   conditional
      while/do while
         at least once -> do while
         else
            while
   counter
      for

## Day 8 (20/1/2025) - Statement 3 -> Jump, Try Catch

Set function remove duplicate items from array

```javascript
let set = new Set([1,2,3,3,2,1]);
for(const item of set){
   console.log('Item ', item);
}
```

Map function work with key and value, key must be unique

```javascript
let map = new Map([
   [1, 'one'],
   [2, 'two'],
]);
for(const [key, value] of map){
   console.log('Key ', key, ' value ', value); 
}
```

### for in loop

```javascript
let obj = {
   name : "AKK",
   age : 22,
   city : "MUB",
}
for(let prop in obj){
   console.log('Props ', prop, ' value ', obj[prop]);
}
```

### Jump => break

```javascript
let arr = [10, 20, 30];
let item = 30;
for(let i=0; i<arr.length; i++){
   if(arr[i] == item){
      console.log('Found at index ', i);
      break; // out of nearest loop
   }
   console.log('Loop ', i);
}
console.log('End of loop');
```

```javascript
let arr = [
   [10, 20, 30],
   [40, 50, 60],
   [70, 80, 90]
];
let item = 30;
outer:for(let i=0; i<arr.length; i++){
   for(let j=0; j<arr[i].length; j++){
      if(arr[i][j] == item){
         console.log('Found at i ', i, ' j ', j);
         break another; // break label statement
      }
      console.log('Loop j ', j);
   }
   console.log('Loop i ', i);
}
another: console.log('End of loop');
```

### Jump => continue

```javascript
for(let i=0; i<5; i++){
   if(i == 2){
      continue; 
   }
   console.log('Loop ', i);
}
```

### Jump => return

```javascript
function hello(){
   console.log('Hello');
   return;
   console.log('world');
}
console.log('start');
hello(); // only output "Hello"
console.log('end');
```

### Jump => throw, try catch finally

```javascript
function div(a,b) // return , error
{
   if(isNaN(a) || isNaN(b)){
      throw new Error('A or B is NaN');
   }
   else{
      return a/b;
   }
}
 
function process(){
   try{
      let result = div(10,5); //return
      console.log('Result ', result);
      return result;

      let result = div(10,NaN);  //error
   }
   catch(e){
      console.log('Error ', e);
      return 500;
   }
   finally{ // clean up and finally always win
      console.log('Finally');
      return 200;
   }
}

let data = process();
console.log('Data ', data)
console.log('End');
```

const VS let VS var(never use)

var => function scope, hoisting, redeclaration
let => block scope, !redeclaration
const => block scope, !redeclaration, Capital letter

## Day 9 (25/1/2025) - Object

Array => same type -> index
Object => different type -> property

## Day 10 (26/1/25) - Array

get => read only, derivable property
set => validate

JavaScript Array is dynamic and can accept difference types. Bcz JavaScript is Dynamic Programming Language.

push => to add new item

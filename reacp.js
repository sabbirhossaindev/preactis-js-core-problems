// 1. feet to inch convert use to function.
function feetToInch(feetes) {
   const inch = 12 * feetes;
   return inch;
}
const feet = 12;
const feets = feetToInch(feet);
console.log(feets);


// inch to feet convert use to function.
function inchToFeet(inches) {
   const feet = inches / 12;
   return feet;
}
const dadaInche = 144;
const dadaFeets = inchToFeet(dadaInche);
console.log(dadaFeets);

// 2. centimeter to meter convert use to function.
function centimeterToMeter(centimeter) {
   const meter = 100 * centimeter;
   return meter;
}
 // centimeter
const myCentimeter = 5;
const result = centimeterToMeter(myCentimeter);
console.log('my meter of 5: ', result);


/* km to mile convert:
km = miles*1.60934;
mile =km/1.60934;
 */


// centimeterToMeter

// 3. count paper
/* book1 ---> 100;
   book2 ---> 200;
   book3 ---> 300;
*/
// paperRequirements

// 4. ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'Chinku'];
// bestFriend

// 5. [45, 87, 96, 11, 63, -56, 71, 28];
// onlyPositive

// my problem solve total 12 ta

// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।

var myString = 'sabbir';
var myBook = true;
console.log(typeof myString); // string
console.log(typeof myBook); // boolean


// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।

/*
   Variables defined with let cannot be Redeclared.
   Variables defined with let must be Declared before use.
   Variables defined with let have Block Scope.
*/
let check = 100;
check = 200;
console.log(check); 

/*
   Variables defined with const cannot be Redeclared.
   Variables defined with const cannot be Reassigned.
   Variables defined with const have Block Scope.
*/
const carPrice = 30000000;
// carPrice = 2500000;
// console.log(carPrice); // Assignment to constant variable

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।

// + explore
var num1 = 10;
var num2 = 20;
var results = num1 + num2;
console.log(results);

// - explore;
var num1 = 10;
var num2 = 20;
var results = num2 - num1;
console.log(results);

// * explore
var num1 = 10;
var num2 = 20;
var results = num1 * num2;
console.log(results);

// / explore
var num1 = 10;
var num2 = 20;
var results = num1 / num2;
console.log(results);

// % explore
var num1 = 10;
var num2 = 20;
var results = num1 % num2;
console.log(results); // done

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

let number1 = 10
let number2 = 20;
let output = number1 < number2;
console.log('my output of geterden: ', output); // true

let number3 = 10
let number4 = 20;
let otp = number3 > number4;
console.log('my output of leasden: ', otp); // false

let number6 = 10
let number7 = 10;
let rslt = number6 == number7;
console.log('my output of duble equal: ', rslt); // true

let a = 10
let b = 10;
console.log(a == b); // true

console.log(6 !== 6); // !==


let e = 10
let f = 20;
let resul = e <= f;
console.log('my output of geterden or equal: ', resul); // true
 
let c = 10
let d = 20;
let rst = d >= c;
console.log('my output of leasden or equal: ', rst); // true done


// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

let isDeploma = true;
let selori = 61000;
let cars = 1;
if (isDeploma === true && selori > 50000 || cars === 1) {
   console.log('tomer number daw beya korbo');
}
else {
   console.log('tomer friend er number daw tomer sata kota nai');
}

// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো

let paturn = 0808;
if (paturn === 0808) {
   console.log('unlock & open the display');
}
else {
   console.log('Please try again!');
}

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।

var i = 7;
for (var i = 7; i <= 19; i+=2) {
    console.log('My odd number of 7 to 19: ',i);
}// done


// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

let myArray = [40, 50, 60, 70, 80, 90, 30, 20, 10];
console.log(myArray.length); // array ta koyta element asa ta janta.
myArray[4] = 99; // position set korta.
console.log(myArray);
// let sum = myArray.reduce((partialSum, element) => partialSum + element,);
let element = myArray.pop(0);
console.log(element); // use of pop
console.log(myArray); // done

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

const array = [40, 10, 10, 10, 10, 10, 10, 10, 10];
for (let i = 0; i < i.length; i++) {
   console.log(array[i]);
}

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো


// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।

var element2 = 10;
var element3 = 10;
var element4 = 10;
var total = element2 * element3 * element4;
console.log('Three element sum of number: ', total); // done

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

let myObject = {
   name: 'sabbir',
   id: 477470,
   cumpus: 'HPI',
   diploma: true,
   gpa: 3.86,
   father: 'bablu',
   mother: 'senafa',
   brother: 'nadim',
   sister: 'azmin',
};
console.log(myObject); // অবজেক্ট ডিক্লেয়ার

// when you know the specific property name, use dot notation to get the property value
var nadimExplore = myObject.brother;
// alternative System
// When you know the specific property name, use dot notation to get the property value
var nadimExplore2 = myObject['brother'];

// sestem 3.
var propertyValues = Object.values(myObject);
// console.log(propertyValues);

// name প্রোপার্টি এর মান চেইঞ্জ |
myObject.name = 'Sabbir Hosain';
console.log(myObject); // done
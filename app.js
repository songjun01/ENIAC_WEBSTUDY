//const => 값 변경 불가능
//let   => 값 변경 가능

alert("hi");

const a=5;              //integer
const b=2;              //integer
let myName="js";        //string
const amIFat=true;      //boolean
let somethig;           //undefine
const tmp=null;         //null
const dayOfWeek=["mon","tue","wed","thu","fri","sat"];        //array

console.log(a+b);
console.log(a*b);
console.log(a/b);

console.log("hello "+myName);
myName="jave script";
console.log("hello "+myName);

console.log(amIFat);
console.log(somethig);
console.log(tmp);
console.log(dayOfWeek);
console.log(dayOfWeek[0]);

dayOfWeek.push("sun");
console.log(dayOfWeek);

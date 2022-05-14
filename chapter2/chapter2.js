//chapter 2

//const => 값 변경 불가능
//let   => 값 변경 가능

alert("hi");


const a=5;              //integer
const b=2;              //integer
console.log(a+b);
console.log(a*b);
console.log(a/b);


let myName="js";        //string
console.log("hello "+myName);
myName="jave script";
console.log("hello "+myName);

const amIFat=true;      //boolean
let somethig;           //undefine
const tmp=null;         //null
console.log(amIFat);
console.log(somethig);
console.log(tmp);


const dayOfWeek=["mon","tue","wed","thu","fri","sat"];        //array
console.log(dayOfWeek);
console.log(dayOfWeek[0]);
dayOfWeek.push("sun");
console.log(dayOfWeek);


const player={          //object
    name:"js",
    porints:10,
    fat:true
};
console.log(player);
console.log(player.name);
player.fat=false;
player.lastName="potato";
console.log(player);


function sayHello(nameOfPerson,age){      //function
    console.log("Hello! My name is "+nameOfPerson+" and I'm "+age);
}
sayHello("js",28);
sayHello("html",32);
sayHello("css",29);


function plus(firstNumber,secondNumber){
    console.log(firstNumber+secondNumber);
}
plus(8,60);
function divide(firstNumber,secondNumber){
    console.log(firstNumber/secondNumber);
}
divide(98,20);


const player2={
    name:"js2",
    sayHello:function(otherPersonsName){
        console.log("Hello! "+otherPersonsName+" Nice to meet you!");
    }
};
console.log(player2.name);
player2.sayHello("html");


const calcultor={
    plus:function(a,b){
        console.log(a+b);
    },
    minus:function(a,b){
        console.log(a-b);
    },
    divide:function(a,b){
        console.log(a/b);
    },
    time:function(a,b){
        console.log(a*b);
    },
    power:function(a,b){
        console.log(a**b);
    }
};
calcultor.plus(2,3);
calcultor.minus(2,3);
calcultor.divide(2,3);
calcultor.time(2,3);
calcultor.power(2,3);


const age=96;
function calculteKrAge(ageOfForeigner){
    return ageOfForeigner+2;
}
const krAge=calculteKrAge(age);
console.log(krAge);


const calcultorReturn={
    plus:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    divide:function(a,b){
        return a/b;
    },
    time:function(a,b){
        return a*b;
    },
    power:function(a,b){
        return a**b;
    }
};
const plusResult=calcultorReturn.plus(2,3);
const minusResult=calcultorReturn.minus(2,3);
const divideResult=calcultorReturn.divide(2,3);
const timeResult=calcultorReturn.time(2,3);
const powerResult=calcultorReturn.power(2,3);


const agePrompt=prompt("How old are you?");         //prompt => 브라우저에서 입력받을 수 있는 가장 기본적인 함수
console.log(typeof "15",typeof parseInt("15"));     //typeof => 뒷 값의 type을 알려줌.      parseInt => parameter 값을 int로 형 변환


const agePrompt2=parseInt(prompt("How old are you?"));
console.log(agePrompt2);
console.log(isNaN(agePrompt2));                     //isNaN => parameter 값이 number인지 판별 후 number가 아니면 true, number이면 false 반환


if(isNaN(agePrompt2)){
    console.log("Please write a number");           //내용이 true일 때 수행
}
else{
    console.log("Thank you for writing your age");  //내용이 false일 때 수행
}


if(isNaN(agePrompt2) || agePrompt2<0){              //|| => 조건 중 하나라도 true이면 true
    console.log("Please write a real positive number");
}
else if(agePrompt2<18){
    console.log("You are too young");
}
else if(agePrompt2>=18 && agePrompt2<=50){          //&& => 조건이 모두 true이면 true
    console.log("You can drink")
}
else if(agePrompt2>50 && agePrompt2<=80){
    console.log("You should exercise");
}
else if(agePrompt2>80){
    console.log("You can do whatever you want");
}
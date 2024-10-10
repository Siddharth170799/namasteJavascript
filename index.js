// ///call and apply////

// let obj = {
//   name: "Siddharth",
//   lastName: "Boorgu",
//   // printName:function(){
//   // console.log(this.name +" "+ this.lastName)
//   // }
// };

// let printName = function (hometown, city) {
//   console.log(this.name + " " + this.lastName + " " + hometown + " " + city);
// };

// let obj2 = {
//   name: "Sathvik",
//   lastName: "Boorgu",
// };

// printName.call(obj, "hyderabad");
// printName.apply(obj2, ["harayana", "gurugram"]);

// ///bind method///

// let printMyName = printName.bind(obj, "hyderabad");
// console.log(printMyName);
// printMyName(); //// bind method behaves like a function or in other words like a method////it bascially returns a function////

// /////currying///
// ///currying using bind method where a method or function is returned usina bind method on function////
// let multiply = function (x, y) {
//   console.log(x);
//   console.log(x * y);
// };

// let multiply2 = multiply.bind(this, 2);
// multiply2(3);

// let multiply3 = multiply.bind(this, 10);
// multiply3(29);

// //// currying using closures///

// let add = function (x) {
//   return function (y) {
//     console.log(x + y);
//   };
// };

// let total = add(4);
// total(10);

// ///// debouncing in javascript////////

// const getData = async () => {
//   console.log("data fetched");
//   const response = await fetch("https://fakestoreapi.com/products/");
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
// };

// const debounce = (d) => {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       getData();
//     }, d);
//   };
// };

// const betterFunction = debounce(2000);

// ///// event delegation javascript////

document.querySelector("#category").addEventListener("click", (e) => {
  console.log("parent clicked", e);
  const target1 = e.target.id;
  console.log(target1)

// if(e.target.dataset.uppercase != undefined){
//     e.target.value = e.target.value.toUpperCase()
//     console.log(e.target.value )

// }
});

// /////currying in javascript////

// let sum1 = function (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// };

// console.log(sum1(1)(2)(3));

// /// this is using recursion///
// let sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };

// console.log(sum(1)(2)(3)(4)(5)()); //// empty to break the chain of the if and else condition or else it keeps on expecting the arguments///

// ////// throttling in javascript//////

// // Simplified throttle function
function throttle(func, limit) {
    let inThrottle;

    return function() {
      if (!inThrottle) {
        func();
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

// //   // Example of a function to be throttled
  function logScroll() {
    console.log("Scroll position:", window.scrollY);
  }

// //   // Apply throttling to the logScroll function with a limit of 1000ms (1 second)
  const throttledScroll = throttle(logScroll, 1000);

// //   // Add the throttled function as the scroll event listener
  window.addEventListener('scroll', throttledScroll);

// //////  THROTTLING IN JAVASCRIPT SIMPLIFIED VERSION//////
// function throttle(fun, limit) {
//   let throttled = false;

//   return function () {
//     if (!throttled) {
//       fun();
//       throttled = true;
//       setTimeout(() => {
//         throttled = false;
//       }, limit);
//     }
//   };
// }

// function logScroll() {
//   console.log("Scroll position:", window.scrollY);
// }

// const betterFunction1 = throttle(logScroll, 2000);

// window.addEventListener("scroll", betterFunction1);

// async function fetchingData() {
//   const response = await fetch("https://fakestoreapi.com/products/");
//   const data = await response.json();
//   console.log(data)

//   return data;
// }

// function gettingData(data) {
//   console.log(data, "hi");
// }

// async function handleData() {
//   const data = await fetchingData();
//   console.log(data)
//   gettingData(data);
// }

// handleData();

// Array.prototype.myMap = function(cb){

//     let temp = [];
//     for(let i = 0; i<this.length;i++){
//         temp.push(cb(this[i]))
//     }

//     return temp

// }

// const nums = [1,2,3,4]

// const multiplyThree = nums.myMap((num)=>{
//     return num * 3
// })

// console.log(multiplyThree)

// //   const data1 = fetchingData()
// //  .then((data)=>handleData(data))

// const locations = [
//     { name: "John Doe", city: "New York", country: "USA",marks:80 },
//     { name: "Jane Smith", city: "London", country: "UK",marks:30 },
//     { name: "Carlos Ruiz", city: "Mexico City", country: "Mexico",marks:200 },
//     { name: "Aiko Tanaka", city: "Tokyo", country: "Japan",marks:15 }
//   ];

//   const details = locations.filter((item)=>{
//     if(item.marks > 60){
//         return item
//     }
//   })

//  const hello= details.map((item)=>{
//  return item.name
//   })
//   console.log(hello)

//   console.log(details)

//   let array =[]
//   for(let i= 0; i<locations.length;i++){
//     array.push(locations[i].name.toUpperCase())
//   }

//   console.log(array)

//   const students = [
//     { name: "John Doe", city: "New York", country: "USA",marks:80 },
//     { name: "Jane Smith", city: "London", country: "UK",marks:30 },
//     { name: "Carlos Ruiz", city: "Mexico City", country: "Mexico",marks:200 },
//     { name: "Aiko Tanaka", city: "Tokyo", country: "Japan",marks:15 }
//   ];

// students.forEach((item,i)=>{
//     if(item.marks < 60){
//         item.marks = item.marks + 20
//     }
// })

// console.log(students)

// const marks1 = students.filter((item)=>{
//     if(item.marks > 60){
//         return item
//     }
// })

// const hello1 =marks1.map((item)=>{

//     return item.name
// })
// console.log(hello1)
// const g = marks1.reduce((acc,curr)=>{
//     return acc+curr.marks
// },0)

// console.log(marks1)
// console.log(g)

// const marks=students.reduce((acc,curr)=>{

//     if(curr.marks > 60){

//        return acc+curr.marks
//     }
//    return acc

// },0)
// console.log(marks)

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();
console.log(user.ref().name);

const user1 = {
  name: "Piyush Agarwal",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user1.logMessage, 1000);

var length = 4;
var hi = 9;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

object.method(callback);

var calc = {
  total: 0,
  add(a) {
    this.total = this.total + a;
    return this;
  },
  subtract(a) {
    this.total = this.total - a;
    return this;
  },
  multiply(a) {
    this.total = this.total * a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);

const array = ["leanne graham"];

const y = array[0].split(" ");
console.log(y);

const z = y[0].split("");
console.log(z[0]);

const z1 = y[1].split("");
console.log(z1[0]);

const array1 = ["a", "b"];

const elements = [0, 1, 2];

array1.push.apply(array1, elements);
console.log(array1);

function checkPassword(success, failed) {
  let password = prompt("Password?", "");
  if (password == "Roadside Coder") success();
  else failed();
}

let user5 = {
  name: "Siddharth Boorgu",

  loginSuccessfull() {
    console.log(`${this.name} logged in`);
  },

  loginFailed() {
    console.log(`${this.name}failed to login`);
  },
};

// checkPassword(user.loginSuccessfull.bind(user),user.loginFailed.bind(user))

/// currying in javascript/////

function a(a1) {
  return function (b1) {
    console.log(a1 + b1);
  };
}

a(5)(6);  ///// small example of currying /////



  const students = [
    { name: "John Doe", city: "New York", country: "USA",marks:80 },
    { name: "Jane Smith", city: "London", country: "UK",marks:30 },
    { name: "Carlos Ruiz", city: "Mexico City", country: "Mexico",marks:200 },
    { name: "Aiko Tanaka", city: "Tokyo", country: "Japan",marks:15 }
  ];


  const details = students.filter((item)=> item.marks > 60)

  console.log(details)
// console.log("one");
// console.log("two");
// function hello(){
//     console.log("hii aman");
// }
// setTimeout(hello, 2000);
// console.log("three");

function sum(a,b){
    console.log(a+b);
    
}
function calculator(a,b,callbackfunction){
    callbackfunction(a,b);
}
calculator(3,5,sum);

const calculator((a,b)=>{
  console.log(a+b);
});
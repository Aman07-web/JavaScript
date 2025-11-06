function calculateCartPrice(...numbers){
    let sum=0;
   for(let num of numbers){
    sum+=num;
   }
   return sum;
}
console.log(calculateCartPrice(23,23,4,5,6,7,3,8));

let arr=[24,67,53,25,67];

const highestArr=arr.reduce((pre,curr)=>{
     return pre > curr? pre:curr;
});

console.log(highestArr);

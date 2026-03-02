// let promise=new Promise((resolve,reject)=>{
//   console.log("I am promise");
//   resolve(234);
// });

const getpromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am promise");

        setTimeout(() => {
            resolve("successful");
        }, 2000);
    });
}

let promise = getpromise();

promise.then((result) => {
    console.log("Request is fulfilled:", result);
});


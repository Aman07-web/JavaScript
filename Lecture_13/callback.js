function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("Data :"+dataId);
        if(getNextData){
          getNextData();
        }
    },2000)
}

// callback hell
getData(2,()=>{
    getData(3,()=>{
        getData(4,()=>{
            getData(5);
        })
    });
})
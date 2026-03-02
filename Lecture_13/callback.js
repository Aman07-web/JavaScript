function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("Data :"+dataId);
        if(getNextData){
          getNextData();
        }
    },2000)
}

getData(2,()=>{
    getData(3);
})
const myPromise = new Promise((resolve, reject)=> {

    if(false){
        setTimeout(() => {
            resolve("I have succeed!");
        }, 1000);
    }else{
        reject("I have failed!");
    }
    
});

myPromise.then(value => console.log(value)).catch(failedValue => console.log(failedValue) );
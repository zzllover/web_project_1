var  timer = new Promise(function(delay,resolve,reject) {
  if(typeof delay !== 'number'){
    reject(new Error('type error'));
  }
  setTimeout(resolve,delay,'done');
});

async function main(delay){
  try{
    var value1 = await timer(delay);
    var value2 = await timer('');
    var value3 = await timer(delay);
  }catch(err){
    console.error(err);
      // Error: type error
      //   at create (<anonymous>:5:14)
      //   at timer (<anonymous>:3:10)
      //   at A (<anonymous>:12:10)
  }
}
main(0);
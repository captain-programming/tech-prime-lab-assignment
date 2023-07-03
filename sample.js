function sample(n){

  for(let i=n; i>=1; i--){
    let store = [];
    for(let j=n; j>=i; j--){
      store.push(j);
    }
    console.log(store.join(" "));
  } 
}

sample(5);
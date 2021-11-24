const Random=(max)=>{
  let randomArray=[];
  while(randomArray.length<max){
    let idx=Math.floor(Math.random() * max);
    if(randomArray.indexOf(idx)==-1) randomArray.push(idx);
  }
  return randomArray;
}
export default Random;
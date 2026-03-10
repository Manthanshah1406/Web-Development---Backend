const sum=(a,b)=>{
    return a+b
}

const mul=(a,b)=>a*b;
const g=9.8;

// console.log("sum: ",sum(1,2))
let obj={
    sum: sum(5,6),
    mul: mul(7,8),
    g: g
}

module.exports=obj;
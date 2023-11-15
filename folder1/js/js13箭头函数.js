function sum1(n,m){
    return n + m;
}


// 箭头函数
let sum2=(n,m)=>{
    return n+m;
}

let sum = (...arg) => eval(arg.join('+'));
console.log(sum(1,2,3,4))
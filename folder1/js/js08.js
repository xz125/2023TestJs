function sum(n=5,m=5) {
    let res = n + m;
    res *= 10;
    res /= 2;
    console.log(res);
}


sum(); // NaN
sum(10); // NaN
sum(10,20); // 150
sum(10,20,30); // 150
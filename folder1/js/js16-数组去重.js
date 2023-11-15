let arr = [10,201,30,40,50,60,123,123];
let obj = {};
for(let i = 0; i< arr.length;i++) {
    let item = arr[i];
    if(obj[item] !== undefined) {
        // 已经存在该元素
        arr.splice(i,1);
        i--;
        continue;
    }
    obj[item] = item;
}
console.log(arr);

let time = new Date();
console.log(time);
let t = time.toLocaleString();
console.log(t);
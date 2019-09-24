//编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//filter/map/reduce
//filter函数必须返回一个boolean值（true：函数会自动将这次回调的n加入新数组中；false：函数会自动过滤掉n）
const nums = [10,20,30,1,50,100,400,5555];

let  total = nums.filter(n => n<100).map(n=>n*2).reduce((pre,n)=>pre + n)

// let total = nums.filter(function (n) {
//     return n <100
// }).map(function (n) {
//     return n *2
// }).reduce(function (preValue,n) {
//     return preValue + n
// },0)

// let newnums = nums.filter(function (n) {//filter函数的使用
//     return n < 100;
// });
// let new2num = newnums.map(function (n) {//map函数的使用
//     return n * 2
// });
// new2num.reduce(function (preValue,n) {//对数组中所有内容进行操作
//     return preValue +　ｎ
// },0);

//1、取出所有小于100的数字
// let newnums = [];
// for (let i of nums){
//     if (i<100){
//         newnums.push(i)
//     }
// }
//
// //2、所有小于100的数字乘以2
// let new2nums = [];
// for (let i of newnums){
//     new2nums.push(i * 2)
// }
//
// //3、将所有2中数字相加
// let total = 0;
// for (let i of new2nums){
//     total += i;
// }
console.log(total);



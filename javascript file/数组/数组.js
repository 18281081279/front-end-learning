//创建数组
var arr1 = [1,2,3];
//创建二维数组
var arr2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log("二维数组输出:"+arr2);

//常用属性:length
console.log("数组长度为:"+arr1.length);

//常用方法
//push(var) 向数组末尾增添一个元素，并返回数组长度
result=arr1.push(4);
console.log(arr1);
console.log("push返回值:"+result);
console.log("-------");
//unshift(var) 向开头添加一个或多个元素，并返回数组长度
result=arr1.unshift(0);
console.log(arr1);
console.log("unshift返回值:"+result);
console.log("-------");
//pop() 删除数组末尾元素，并返回该元素
result=arr1.pop();
console.log(arr1);
console.log("pop返回值"+result);
console.log("-------");
//shift() 删除数组开头元素，并返回该元素
result=arr1.shift();
console.log(arr1);
console.log("pop返回值"+result);
console.log("-------");
//slice(index1,index2) 从现有数组从index1到index2(左闭右开区间)截取一段，不修改现有数组，返回截取的数组
result=arr1.slice(0,2);
console.log(arr1);
console.log(result);
console.log("-------");
//splice(index1,num,var,var,……) 从现有数组index1开始，删除num个元素，改变现有数组，并将删除的部分返回,且从index1开始添加var新元素
result=arr1.splice(0,2,0,1,2);
console.log(arr1);
console.log(result);
console.log("-------");
//forEach遍历数组,forEach会给函数传三个参数，分别是值，索引，数组
arr1.forEach(function(value,index,arr){
    console.log(index+":"+value+" "+"arr:"+arr);
})
console.log("-------");
//contact(arr,arr) 拼接一个或多个数组，且不会对原数组产生影响
var arr2=[4,5,6];
result=arr1.concat(arr2);
console.log(arr1);
console.log(result);
console.log("-------");
//join(var) 将一个数组转化成字符串，并将参数作为分隔符，不会对原数组产生影响
result=arr1.join("|");
console.log(arr1);
console.log(result);
console.log("-------");
//reverse()将数组元素颠倒，会产生影响
result=arr1.reverse();
console.log(arr1);
console.log(result);
arr1=arr1.reverse();
console.log("-------");
//sort() 按编码顺序返回数组,若需要按数字的大小排序组需要回调函数
result=arr1.sort(
    function(a,b){
        return a-b;
    }
)
console.log(result);
console.log(arr1);
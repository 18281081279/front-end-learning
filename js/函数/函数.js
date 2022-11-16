//创建函数
function add(a,b){
    return  a+b;
}
//调用函数
console.log("相加函数输出:"+add(1,2));

/*
    当调用函数时，浏览器都会传递两个隐藏的参数
    ①一个是对象this，用this来执行函数，可以通过call和apply来改变
    ②一个是对象argument，argument将传递的实参封装到一个数组中，数组名就是argument
*/

//①函数对象的方法call,apply
function fun1(){
    console.log("fun1");
}
//call()和apply()都可以调用函数
fun1();
fun1.call();
fun1.apply();
//可以将一个对象设定为call和apply的参数，这个对象会成为这个函数的this
function fun2(){
    console.log(this.name);
}
var obj1 = {name:"jpx",getName(){console.log(this.name)},num1:1,num2:2};
var obj2 = {name:"lly",num1:3,num2:4};
fun2.apply(obj1);
fun2.apply(obj2);
obj1.getName.apply(obj2);
//call()方法，先传递一个对象指定this指向，再传递参数,apply也一样，不过参数要以数组形式传递
function fun3(a,b){
    console.log(this.num1+this.num2);
}
fun3.call(obj1,obj1.num1,obj1.num2);
fun3.apply(obj2,[obj2.num1,obj2.num2]);

//②argument

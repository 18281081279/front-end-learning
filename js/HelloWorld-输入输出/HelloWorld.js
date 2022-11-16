/*
    一些js基础，因为与JAVA，C有很强相似性，所以很基础的东西或一些小区别都在本页过一遍
*/

/*变量声明:在全局作用域 用var a声明的变量,或直接(a=10)这样定义都会作为window对象的属性名(window.a),且会在所有代码前执行声明，
          但并不会赋值,所以会出现undefined。区别是用var声明不报错，直接a=10，会报错。
          在局部作用域 用var声明的变量，就是局部变量，全局中不能调用
          在函数中使用a时，若直接对a进行操作，则就是修改了全局变量,若函数内声明了同名的a，进行操作，则就是修改了局部变量a.
*/
console.log(a);
var a=1;

//弹窗中输出
alert("Hello,想要看我的网页就输入密码");
//输入函数:prompt
var key=prompt();
while(key!=123){
    alert("密码错误，请重新输入密码");
    key=prompt();
}
alert("密码输入正确！");
//控制台输出
console.log("密码输入正确为:"+key)
//文档中输出  
document.write("HelloWorld!");



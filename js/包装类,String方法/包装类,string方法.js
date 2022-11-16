//将基本类型的number,string,boolean转化为对象,就可以对其添加属性和方法.当我们使用基本数据类型的方法时，一般浏览器会临时自动帮我们转化为对象
var num = new Number();
var str = new String();
var bool = new Boolean();

//常用的string方法
var str1="jiang pei xun";
var str2="jiayou!";
//①length
console.log(str1.length);
//②charAt返回指定索引位置的字符
console.log(str1.charAt(0));
//concat()拼接
console.log(str1.concat(str2));
//indexOf(var,num)返回指定内容在字符串中首次出现的索引位置，从num开始找，-1为没找到
console.log(str1.indexOf("jiang"));
//lastIndexOf同上，倒着找
//slice截取字符串，和数组的slice差不多
console.log(str1.slice(0,3));
//split(" ")将字符串按指定的内容拆分成数组
console.log(str1.split(" "));
///toUpperCase将字符串转化为大写
console.log(str1.toUpperCase());
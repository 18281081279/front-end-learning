//用于检测字符串是否符合规则
//语法: var 变量 = new RegExp("正则表达式","匹配模式");
//      或 var 变量 =/正则表达式/匹配模式  匹配模式为i忽略大小写,g全局模式
//      再用test方法检测字符串是否符合规则 变量.test(str);

var reg1 =new RegExp("a","i");
var reg2 = /a/i;

/*规则：{n}:出现n次; {m,n}:出现m到n次; ^n m$:以n开头以m结尾;^n$:只能有n
        a或b:a|b; a或b:[ab]; a到z:[a-z]; 任意字母:[A-z];
        abc或adc:[a[bd]c]; 除了ab:[^ab] 
        出现n次a：a{n};n次ab:{(ab){n}};
*/

var str1 = "abc";
console.log(reg1.test(str1));

//检测手机号
var reg =/^1[3-9][0-9]{9}/;
var str="13734892379";
console.log(reg.test(str));
//邮件的正则



//字符串方法和正则表达式
//split()按正则表达式分割字符串
var str2="1a2b3c4d";
reg2=/[A-z]/;
console.log(str2.split(reg2));
//search()按正则表达式搜索是否含有指定内容
reg2=/a2/;
console.log(str2.search(reg2));
//match()按正则表达式将字符串内容找出来
reg2=/[A-z]/g;//没有g则只找一次
console.log(str2.match(reg2));
//replace(reg,new str)替换
reg2=/a/g;
console.log(str2.replace(reg2,"A")); 

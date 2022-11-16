//类、原型对象
//创建person类(函数也是对象)
function Person(Name,Age){
    //给类的原型对象中添加共同的属性和方法，可以避免重复使用，也可以避免影响全局变量
    Person.prototype.name=Name;
    Person.prototype.age=Age;
}
Person.prototype.getName=function (){
    return this.name;
};
Person.prototype.getAge=function (){
    return this.age;
};

//如果new 一个函数，则这个函数就变成了构造函数，会在内存堆中生成一个对象
var person1= new Person("jpx",18);
console.log("getName方法输出:"+person1.getName());
console.log("getAge方法输出:"+person1.getAge());
//重写tostring可以输出对象名时候，输出对象信息
Person.prototype.toString=function fun2 (){
    return (this.name+":"+this.age);
}
console.log("getPerson方法输出:"+person1.toString());



//for in语句 
//n可以以字符串的形式储存对象的属性名,而对象.[字符串],又可以输出属性值，所以对象.[n]可以输出属性值，这就离谱了我吐了，太不严谨了.
for(var n in person1){
    console.log("for in 输出:"+person1[n]);
}

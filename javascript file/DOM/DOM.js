//onload方法,当页面加载完成之后才执行

/*getElementById()通过Id来获得一个元素节点对象
  getElementByTagName()通过标签名来获取一组对象,如"li",得到的对象将封装到一个数组中
  getElementByName通过name()获取一组元节点对象,且将其封装到数组中
*/
var btn1 = document.getElementById("btn1");
btn1.onclick = function () {
    if (btn1.innerText == "first button") {
        btn1.textContent = ("点击成功");
    }
    else if (btn1.innerText == "点击成功") {
        btn1.textContent = ("first button");
    }
}

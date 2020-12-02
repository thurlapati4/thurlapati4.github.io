var name =["suryakumar","tejaswi","shreyas Iyer","rishabh pant"];
var age = [19,21,20,19,20];
var role =["middle order batsman","opener","opener","one down"];

var num = name.length();
console.log(num);
var l1 = document.getElementById("ele3");
ele3.style.margin ="2%";
ele3.style.display ="grid";
for(var i=0; i<num;i++)
{
var ele1 = document.createElement("div");
ele1.innerHTML=name(i);
l1.appendChild(ele1);
}
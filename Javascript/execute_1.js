console.log("Linked succesfully");


(function(){
    function loadJSON(file, callback){ var xhr1 = new XMLHttpRequest(); xhr1.overrideMimeType("application/json");xhr1.open("GET",file,true); xhr1.onreadystatechange=function(){if(xhr1.readyState==4 &&xhr1.status==200){callback(xhr1.responseText);}}; xhr1.send();} 
    loadJSON("data.JSON", function(text){var data = JSON.parse(text); console.log(data); Profile(data); eskills(data); })
    function Profile(pdata){
        var main = document.getElementById("main");
        var left = document.getElementById("left");
        var card = document.createElement("div");
        card.classList.add("card");
        main.style.padding=left.style.padding="2px";
        main.style.display = "flex";
        
        main.style.border="1px solid blue";
        left.style.border="1px solid blue";
        left.style.alignContent = "centre";
        left.style.width = "30%";
        var nam = document.createElement("p");
        nam.innerHTML = pdata.username;
        var im = document.createElement("img");
        im.src="passp.jpg";
        im.style.borderRadius="50%";
        im.style.boxShadow="2px 2px";
        im.style.width = "100px";
        im.style.height = "100px";
        card.appendChild(im);
        left.appendChild(card);
        left.appendChild(nam);
    }
    function setStyles(element)
    {
        element.style.border="1px solid blue";
        element.style.padding="2px";
        element.style.margin = "2px";
        
        return element;
    }
    function eskills(edata)
    {
        var right = document.getElementById("right");
        var d1 = document.createElement("div");
        d1.innerHTML = "Skills: -";
        d1=setStyles(d1);
        right.appendChild(d1);
        right.style.width ="70%";
        var i;
        for(i in edata)
        {
            
        }
    }
}())

function sample()
{
    var name_1 = "koushik";
    console.log(name_1);
    let name_3 = "Charan";
    const name_4 = "Prasanth";
    console.log(name_3);
    console.log(name_4);
}
sample();
if(true)
{
    var name_2 ="kou2";
    console.log(name_2);
}

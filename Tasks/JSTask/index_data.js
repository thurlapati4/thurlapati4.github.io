function loadJSON(file, callback){ 
    var xhr1 = new XMLHttpRequest();
     xhr1.overrideMimeType("application/json");
     xhr1.open("GET",file,true);
      xhr1.onreadystatechange=function(){
          if(xhr1.readyState==4 &&xhr1.status==200)
          {callback(xhr1.responseText);}
        };
       xhr1.send();
    }
    loadJSON("index_data.json",renderPage);

    function renderPage(text)
    {
        var ind = document.getElementById("index");
        ind.style.display="block";
        var res = document.getElementById("Resume");
        var bck = document.getElementById("backB");
        bck.style.display="none";
        res.style.display="none";
        console.log("success1");
        var data = JSON.parse(text);
        console.log(data);
        var i = 0;
        i = data.count;
        var j;
        var displ_ele = document.getElementById("CardList");
        displ_ele.style.marginLeft = "10%";
        displ_ele.style.marginRight = "10%";
        displ_ele.style.display="grid";
        displ_ele.style.gridTemplateColumns="auto auto auto";
        for(j=0;j<i;j++)
        {
            var addCard = document.createElement("div");
            addCard.style.align = "center";
            var CardImg = document.createElement("img");
            CardImg.src=data.candidates[j].image;
            CardImg.style.width = "60%";
            CardImg.style.height = "40%";
            addCard.appendChild(CardImg);
            addCard.appendChild(document.createElement("hr"));
            var CardName = document.createElement("h1");
            CardName.innerHTML=data.candidates[j].Full_Name;
            var CardMail = document.createElement("h2");
            CardMail.innerHTML=data.candidates[j].Email;
            var CardPhone = document.createElement("h3");

            CardPhone.innerHTML=data.candidates[j].Phone_No;
            var CardRes = document.createElement("button");
            CardRes.innerHTML="Resume";
            CardRes.value=j+1;
            CardRes.addEventListener("click",function(){showResume(this.value)});
            addCard.appendChild(CardName); 
            addCard.appendChild(CardMail); 
            addCard.appendChild(CardPhone);
            addCard.appendChild(CardRes);
            setCardStyle(addCard); 
            displ_ele.appendChild(addCard);
        }

    }
    function setCardStyle(element)
    {
        element.style.border ="1px solid black";
        element.style.padding="1px";
        element.style.margin="2px";
        element.style.backgroundColor="Yellow";
        element.style.textAlign = "center";
        element.style.color = "rgb(49, 6, 128)";
        element.style.borderRadius="15%";
        element.style.boxShadow="2px 2px";
        return element;
    }

    function showResume(indx)
    {
        var ind = document.getElementById("index");
        ind.style.display="none";
        var bck = document.getElementById("backB");
        bck.style.display="block";
        bck.style.border="1px solid red";
        bck.style.padding="3px";
        bck.style.borderRadius="30%";
        bck.style.margin="5px";
        bck.style.width="8rem";
        bck.style.color="Yellow";
        bck.style.backgroundColor="Red";
        bck.style.textAlign = "center";
        bck.style.boxShadow = "3px 3px";
        bck.onclick=function(){backFunc();};
        var res = document.getElementById("Resume");
        res.style.display="flex";
        document.body.style.backgroundColor="white";   
        file="candidate"+indx+".json";
        console.log(file);
        loadJSON(file,renderResume);
        
        function backFunc()
        {
            var rght = document.getElementById("right");
            var lft = document.getElementById("left");
            var resu = document.getElementById("Resume");
            resu.style.display="none";
            rght.innerHTML="";
            lft.innerHTML="";

            var m = document.getElementById("index");
            m.style.display="block";
            var bak = document.getElementById("backB");
            bak.style.display="none";
        }

        function renderResume(text)
        {
            document.body.style.backgroundColor="skyblue";
            var edata = JSON.parse(text);
            console.log(edata);
            var ResImg = document.createElement("img");
            ResImg.src= edata.image;
            ResImg.style.width = "60%";
            ResImg.style.margin = "10%";
            ResImg.style.borderRadius = "10%";
            ResImg.style.border = "1px solid red";
            //render right side
            var ResRight = document.getElementById("left");
            ResRight.style.minWidth="30%";
            ResRight.style.contentAlign = "center";
            ResRight.style.border = "1px solid black";
            ResRight.style.backgroundColor = "aliceblue";
            var ResName = document.createElement("h1");
            var ResProf = document.createElement("h2");
            var ResHead = document.createElement("h4");
            var ResTable = document.createElement("table");
            var ResHead2 = document.createElement("h4");
            var ResPers = document.createElement("ul");
            ResName.innerHTML = edata.Full_Name;
            ResProf.innerHTML = edata.Profession;
            ResHead.innerHTML = "Professional Skills:";
            ResHead2.innerHTML="Personal Skills";
            for(var i in edata.Prof_Skills)
            {
                var row = ResTable.insertRow(-1);
                var cell1=row.insertCell(-1);
                var cell2=row.insertCell(-1);
                cell1.innerHTML = edata.Prof_Skills[i].skill;
                cell2.innerHTML = edata.Prof_Skills[i].level;
            }
            for(var i in edata.Person_Skills)
            {
              var row = document.createElement("li");
              row.innerHTML = edata.Person_Skills[i];  
              ResPers.appendChild(row); 
            }
            ResRight.appendChild(ResImg);
            ResRight.appendChild(ResName);
            ResRight.appendChild(ResProf);
            ResRight.appendChild(ResHead);
            ResRight.appendChild(ResTable);
            ResRight.appendChild(ResHead2);
            ResRight.appendChild(ResPers);
        
        //render right side completed

        //render left side
        var ResLeft = document.getElementById("right");
        var ResHead3 = document.createElement("h2");
        var ResObj = document.createElement("div");
        var ResHead4 = document.createElement("h2");
        var ResTable2 = document.createElement("table");
        var ResHead5 = document.createElement("h2");
        var ResProj = document.createElement("ol");
        var ResHead6 = document.createElement("h2");
        var ResTable3 = document.createElement("table");
        ResHead3.innerHTML = "Career Objective:";
        ResHead4.innerHTML = "Education Details:";
        ResHead5.innerHTML = "Projects:";
        ResHead6.innerHTML = "Contact Details: ";
        ResLeft.style.border="1px solid black";
        ResLeft.style.width = "100%";
        ResLeft.style.backgroundColor = "aliceblue";
        ResLeft.style.padding = "5px";
        ResLeft.style.margin = "5px";
        ResObj.innerHTML = edata.career_obj;
       var row = ResTable2.insertRow(-1);
       var cell1 = row.insertCell(-1);
       var cell2 = row.insertCell(-1);
       var cell3 = row.insertCell(-1);
       var cell4 = row.insertCell(-1);
       var cell5 = row.insertCell(-1);
       cell1.innerHTML="Sno";
       cell2.innerHTML="Institute/Unversity/Organisation";
       cell3.innerHTML="Qualification";
       cell4.innerHTML="Percentage";
       cell5.innerHTML="Duration";
       for(var i in edata.education)
        {
            var m=parseInt(i,10)+1;
            var row = ResTable2.insertRow(-1);
            var cell5 = row.insertCell(-1);
            var cell1 = row.insertCell(-1);
            var cell2 = row.insertCell(-1);
            var cell3 = row.insertCell(-1);
            var cell4 = row.insertCell(-1);
            cell5.innerHTML = m;
            cell1.innerHTML = edata.education[i].institute;
            cell2.innerHTML = edata.education[i].qualify;
            cell3.innerHTML = edata.education[i].percent;
            cell4.innerHTML = edata.education[i].duration;
        }

        for(var i in edata.projects)
        {
            var row = document.createElement("li");
            row.innerHTML = edata.projects[i];
            ResProj.appendChild(row);
        }
        for(var i=0; i<6;i++)
        {
            var row = ResTable3.insertRow(-1);
            var cell1 = row.insertCell(-1);
            var cell2 = row.insertCell(-1);
            var cell3 = row.insertCell(-1);
            var a1 = document.createElement("a");
            a1.href = "https://github.io";
            a1.innerHTML=edata.Full_Name;
            if(i==0){cell1.innerHTML="Phone No:"; cell2.innerHTML = edata.Phone_No; cell3.innerHTML="Github Link:"; cell3.appendChild(a1);}
            if(i==1){cell1.innerHTML="Email: "; cell2.innerHTML = edata.Email;}
            if(i==2){cell1.innerHTML="Address: ";}
            if(i==3){cell1.innerHTML=edata.contact.line1}
            if(i==4){cell1.innerHTML=edata.contact.line2}
            if(i==5){cell1.innerHTML=edata.contact.line3}
        }
        ResLeft.appendChild(ResHead3);
        ResLeft.appendChild(ResObj);
        ResLeft.appendChild(ResHead4);
        ResLeft.appendChild(ResTable2);
        ResLeft.appendChild(ResHead5);
        ResLeft.appendChild(ResProj);
        ResLeft.appendChild(ResHead6);
        ResLeft.appendChild(ResTable3);
       //render left side completed
    }
    }
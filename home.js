let i=0;
var text="";
const listorig=["footballers","movies","computer","languages","club","software"];
// for(i=0;i<listorig.length;i++)
// {
//     text=text+"<p>"+listorig[i]+"</p>";
// }
// document.getElementById("demo").innerHTML=text;
listorig.sort();
const idvalueorig=document.getElementById("leftlist");
for(let listxorig in listorig){
    idvalueorig.getElementsByTagName("li")[Number(listxorig)].innerHTML=listorig[listxorig];
}

function search()
{
    var list=listorig.slice();
let value=document.forms['fform']["ftext"].value;
value=value.toLowerCase();
for(x in list)
{
    let count=0;
    y=list[x];
    for(let j in y){
            if(y[j]==value[j])
            {
                count+=1;
            } 
    }
    if(count>9){
        count=9;
    }
    list[x]=count+list[x];
    count=0;
}
list.sort().reverse();
console.log(list);

const idvalue=document.getElementById("listtable");
for(let listx in list){
    list[listx]= list[listx].replace(list[listx][0],'');
    if(listx<5){
    idvalue.getElementsByTagName("div")[Number(listx)+1].innerHTML=list[listx];
    }
}
document.getElementById("listtable").style.visibility="visible";
}
function top1(x)
{
    x=parseInt(x);
    open("footballers.html");
    document.getElementById("listtable").style.visibility="hidden";
}








// for(x in list)
// {
//   list[x]=x + "     " +list[x];
// }
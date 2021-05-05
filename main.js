function getpara1()
{
    var input1=[];
    for(i=1; i<=5;i++)
    {
        input1.push(document.getElementById("input" + i).value);
    }
    document.getElementById("show_Paragraph1").innerHTML=input1.join(".");
}
function getpara2()
{
    var input2=[];
    for(i=11; i<=15;i++)
    {
        input2.push(document.getElementById("input" + i).value);
    }
    document.getElementById("show_Paragraph2").innerHTML=input2.join(".");
}
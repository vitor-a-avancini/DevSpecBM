function check()               
{      
     document.getElementById("principal").focus();
   
}
function validate()           
{ 
  p = document.getElementById("principal").value;
   if(parseInt(principal)<=0)
   {
     alert("Enter a positive number");
     document.getElementById("principal").focus();
   }
}
function compute()               
{
    var principal = document.getElementById("principal").value;
 
    if(parseInt(principal)>0 )          
    {
    var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    total = parseInt(principal)+interest;
    var d = new Date();
    var n = d.getFullYear();
    var year = new Date().getFullYear()+parseInt(years);
    str="<br/> If you deposit <span style='background-color:khaki;'>"+principal+"</span>";
    str=str+"<br/> at an interset rate of <span style='background-color:khaki;'>"+rate+"%.</span>";
    str=str+"<br/> you will receive amount of <span style='background-color:khaki;'>"+total+"</span>";
    str=str+"<br/> in the year <span style='background-color:khaki;'>"+year+"</span>";

    document.getElementById("result").innerHTML=str; 
    }
    else                  
    {
      alert("Enter a positive number");
     document.getElementById("principal").focus();
    }
}




function rangeShow()      
 {
    var slider = document.getElementById("rate").value;
    document.getElementById("rval").innerHTML=slider+"%";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}   
// JavaScript Document

function myfung()
{
                  var Text="";
                  var welcome=prompt("Enter Your Name:","پرنیا رهبری");
                if(welcome==""|| welcome==null){alert("Please enter the full name");}
          
             else {Text="خوش اومدی " +welcome;} 
             document.getElementById("par").innerHTML=Text;
            
}
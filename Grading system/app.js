// document.addEventListener('DOMContentLoaded', () => {

function Total(){
    var sub1 =parseint(document.getElementById("eng"). value);
    var sub2 =parseint(document.getElementById("mat"). value);
    var sub3 =parseint(document.getElementById("phy"). value);
    var sub4 =parseint(document.getElementById("urd"). value);
    var sub5 =parseint(document.getElementById("sci"). value);
    if (sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
      alert("Please Enter mark in range of 100");
    }
    else{
      var total = sub1 + sub2 + sub3 + sub4 + sub5;
      
      document.getElementById("total", onclick). innerHTML= "English marks:" + sub1 + "<br> Mathmatic marks:"+ sub2 + "<br> Physics marks:" + sub3+ "<br> computer marks:" + sub5 + " science marks"  + "<br>"  + "Total marks" ;
    console.log(total)
    }

  }

  Total()

  function ave(){
    var sub1 =parseint(document.getElementById("eng"). value);
    var sub2 =parseint(document.getElementById("mat"). value);
    var sub3 =parseint(document.getElementById("phy"). value);
    var sub4 =parseint(document.getElementById("urd"). value);
    var sub5 =parseint(document.getElementById("sci"). value);
    if (sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
      alert("Please Enter mark in range of 100");
    }
    else{ 
      var total=sub1+sub2+sub3+sub4+sub5;
      var Ave =total/5;
      document.getElementById("ave").innerHTML="your average marks is :" + ave;

    }

  }
    function grade(){
    var sub1 =parseint(document.getElementById("eng"). value);
    var sub2 =parseint(document.getElementById("mat"). value);
    var sub3 =parseint(document.getElementById("phy"). value);
    var sub4 =parseint(document.getElementById("urd"). value);
    var sub5 =parseint(document.getElementById("sci"). value);

    if (sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
      alert("Please Enter mark in range of 100");
    }
 
    else{ 
      var total=sub1+sub2+sub3+sub4+sub5;
      var Ave =total/5;
    
      if (ave>=80 && ave<=100){
        document.getElementById("grade").innerHTML ="your grade is A";
      }
      else if (ave>= 75 && ave <=80){
        document.getElementById("grade").innerHTML="your grade is B+";
      }
      else if (ave>= 70 && ave <=75){
        document.getElementById("grade").innerHTML="your grade is B";
      }
      else if (ave>= 65 && ave <=70){
        document.getElementById("grade").innerHTML="your grade is C+";

      }
      else if (ave>= 60 && ave <=65){
        document.getElementById("grade").innerHTML="your grade is D+";
      }

      else if (ave>= 50 && ave <=60){
        document.getElementById("grade").innerHTML="your grade is D";
      }

      else{
        documebt.getElementById("grade").innerHTML="your grade is F";
      }
    
    }
  }
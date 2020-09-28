function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



function nextslide()
{  
  if(document.getElementById("slide1").style.display=="block")
  {
   document.getElementById("slide1").style.display="none";
   document.getElementById("slide2").style.display="block";
   document.getElementById("dot1").style.backgroundColor="#bbb";
  document.getElementById("dot2").style.backgroundColor="black";
  }
  else
  {
    document.getElementById("slide1").style.display="block";
   document.getElementById("slide2").style.display="none";
   document.getElementById("dot2").style.backgroundColor="#bbb";
  document.getElementById("dot1").style.backgroundColor="black";
  }
}

function prevslide()
{  
  if(document.getElementById("slide1").style.display=="block")
  {
   document.getElementById("slide1").style.display="none";
   document.getElementById("slide2").style.display="block";
   document.getElementById("dot1").style.backgroundColor="#bbb";
  document.getElementById("dot2").style.backgroundColor="black";
  }
  else
  {
    document.getElementById("slide1").style.display="block";
   document.getElementById("slide2").style.display="none";
   document.getElementById("dot2").style.backgroundColor="#bbb";
  document.getElementById("dot1").style.backgroundColor="black";
   
  }
}

if(document.getElementById("slide1").style.display=="block")
{
  document.getElementById("dot2").style.backgroundColor="#bbb";
  document.getElementById("dot1").style.backgroundColor="black";
}
function sliderbutton()
{
   document.getElementById("prev").style.display="block";
   document.getElementById("next").style.display="block";
}

function nobutton()
{
  document.getElementById("prev").style.display="none";
  document.getElementById("next").style.display="none";
}
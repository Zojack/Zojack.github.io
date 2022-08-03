var active = 0;
var repo = 0;
var menu = document.getElementsByName("menu");
var cascade = document.getElementsByName("menu1");
var stats = document.getElementsByName("stats");
$(document).keydown(function(event) 
{
switch (event.which) 
{
  case 38:
    if (active > 0)  
    {
      active = active - 1;
      menu[active].innerHTML = "*" + menu[active].innerHTML.toString();
      if (menu[active-1]){
        menu[active - 1].innerHTML = menu[active-1].innerHTML.toString().replace("*", "");
      }
      if(menu[active+1]){
      menu[active + 1].innerHTML = menu[active+1].innerHTML.toString().replace("*", "");
      }
    }
    break;
  case 40:
    if (active < 3) 
    {
       active = active +1;
       menu[active].innerHTML = "*" + menu[active].innerHTML.toString();
       if(menu[active-1]) {
         menu[active-1].innerHTML = menu[active-1].innerHTML.toString().replace("*", "");
       }
       if(menu[active+1]) 
      {
        menu[active+1].innerHTML = menu[active+1].innerHTML.toString().replace("*","");
      }
    }
  break;
  case 87:
    if (cascade[0].innerHTML.toString().includes("Zojack")) 
    {
      if (repo > 0) 
      {
        repo = repo -1;
        cascade[repo].innerHTML = "*" + cascade[repo].innerHTML.toString();
        if (cascade[repo-1]){
          cascade[repo - 1].innerHTML = cascade[repo-1].innerHTML.toString().replace("*", "");
        }
        if(cascade[repo+1]){
          cascade[repo + 1].innerHTML = cascade[repo+1].innerHTML.toString().replace("*", "");
        }
      }
    }
  break;
    case 83:
      if (cascade[0].innerHTML.toString().includes("Zojack")) 
      {
        if (repo < 2) 
        {
          repo = repo +1;
          cascade[repo].innerHTML = "*" + cascade[repo].innerHTML.toString();
          if (cascade[repo-1]){
            cascade[repo - 1].innerHTML = cascade[repo-1].innerHTML.toString().replace("*", "");
          }
          if(cascade[repo+1]){
            cascade[repo + 1].innerHTML = cascade[repo+1].innerHTML.toString().replace("*", "");
          }
        }
      }
      break;
      case 90: // I am commiting a sin, but fuck you.
        if (cascade[0].innerHTML.toString().startsWith("*")) 
        {
            var save1 = cascade[0].innerHTML.toString(); // more sinning here.
            cascade[0].innerHTML = "Redirecting..";
            setTimeout(donothing,5000);
            window.open("https://github.com/Zojack/Visualizer", '_blank');
            cascade[0].innerHTML = save1;
        }
        else if (cascade[1].innerHTML.toString().startsWith("*")) 
        {
            var save2 = cascade[1].innerHTML.toString();
            cascade[1].innerHTML = "Redirecting..";
            setTimeout(donothing,5000);
            window.open("https://github.com/Zojack/Abraxas", '_blank');
            cascade[1].innerHTML = save2;
        }
        else if (cascade[2].innerHTML.toString().startsWith("*")) 
        {
          var save3 = cascade[2].innerHTML.toString();
          cascade[2].innerHTML = "Redirecting..";
          setTimeout(donothing, 5000);
          window.open("https://github.com/Zojack/calisto-js", '_blank');
          cascade[2].innerHTML = save3;
        }
        break;
  case 13:
    switch (active) 
    {
        case 0:
          stats[0].src= "";
          cascade[0].style.color="rgb(255, 73, 118)";
          cascade[1].style.color="rgb(255, 73, 118)";
          cascade[2].style.color="rgb(255, 73, 118)";


          cascade[0].innerHTML = 
          "Zojack/Visualizer - \n A OpenGL audio visualizer I built.\n Uses C++ and Aquila.";
          cascade[1].innerHTML =
          "Zojack/Abraxas - \n Linux only library used to verify socket connections!";
          cascade[2].innerHTML =
          "Zojack/calisto-js - \n Personal Discord Bot! Can play music, and verify people through MongoDB!";
        break;
      case 1:
        stats[0].src= "";


        cascade[0].style.color="rgb(255, 73, 118)";
        cascade[1].style.color="rgb(255, 73, 118)";
        cascade[2].style.color="rgb(255, 73, 118)";
        cascade[0].innerHTML = 
        "Welcome to my freelance website! \n I mainly code in C++, on the Networking and Audio side, but I am decent at Audio programming on JS, and can get something up for you. \n For audio programming I use Howl.JS for JS, and Aquila and OpenAL for C++. For networking, I am able to use the base functions both on Windows and Linux. \n";

        cascade[1].innerHTML =
        " - I am able to build Discord bots, and implement MongoDB with them, you can see some work I did in the repository section.";
        cascade[2].innerHTML =
        " - As for my hobbies, one of them is frequenting game cafes, my particular one is 12 minutes away, and I am able to play LAN parties with many people. \n                   MY LANGUAGES|FRAMEWORKS:                 \n C++|Aquila + OpenAL (audio.) \n JS |Howl.JS + MongoDB (audio + DB.) + Discord.js"; 
        break;
      case 2:
        cascade[0].innerHTML = 
          "";
          cascade[1].innerHTML =
          "";
          cascade[2].innerHTML =
          "";
        window.open("https://www.upwork.com/freelancers/~015e80d67b63ded20e", '_blank');
        stats[0].src= "";
        break;
      case 3:
        cascade[0].innerHTML = 
          "";
          cascade[1].innerHTML =
          "";
          cascade[2].innerHTML =
          "";
        stats[0].src= "https://github-readme-stats.vercel.app/api?username=Zojack&theme=dracula&show_icons=false";
        break;
    }
}})
function donothing() {
  //
}
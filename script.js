
var check = true;
var s = 0;
var min = 0;
var h = 0;
var ms = 0;



function start(){
    if(check == true){
          check = false;
          time();
    }
}

function time(){
     if(check == false){
        ms++;
        if(ms==100){
           ms=0;
           s++;
        }
         
         if(s == 60){
              s = 0;
              min++;
         }
          if(min == 60){
              min = 0;
              h++;
          }
          var sec = s < 10 ? "0" + s : s;
          var mini = min < 10 ? "0" + min :min ;
          var hr = h < 10 ? "0" + h : h;
          var m = ms<10 ? "0" + ms :ms;


         displayTime.innerHTML = hr + " : " + mini + " : " +  sec + " : " + m;
         setTimeout("time()",10);
     }
}
function stop(){
  check = true;
}
function restart(){
   check = true;
   s = 0;
   min = 0;
   hr = 0;
   ms=0;
   displayTime.innerHTML = "00:00:00:00"
}
let count=0;
let laps = document.getElementById('lap');
function Laps(){
   var sec = s < 10 ? "0" + s : s;
          var mini = min < 10 ? "0" + min :min ;
          var hr = h < 10 ? "0" + h : h;
          var m = ms<10 ? "0" + ms :ms;
      let recored = displayTime.innerHTML = hr + " : " + mini + " : " +  sec + " : " + m;
      var li = document.createElement("li");
      li.innerHTML = recored ;
      lap.appendChild(li);
   
     
   

}

var cas=new Date().getTime();
setTimeout(settime, 0);
var audio;

$( document ).ready(function() {
     audio = document.getElementById("track");
});
function settime() {
    time = time-(new Date().getTime()-cas);
    if(time<=0) {

        var timetoreload = 0;
        if (document.getElementById('alert').checked){
        timetoreload=playtestsound();
        }
        setTimeout(function() {
            document.location.href = ("");
        }, timetoreload);


    }
    else{
        cas=new Date().getTime();
        var times=time/10;
        var minutes = Math.floor((times - (0 * 60)) / 2);
        var seconds = Math.floor(times - (0 * 60) - (minutes * 2));
        document.getElementById("cislo1").textContent=minutes;
        document.getElementById("cislo2").textContent=seconds;
        setTimeout(settime, 100);
    }

}
function  playtestsound() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();

   return audio.duration*100;
}
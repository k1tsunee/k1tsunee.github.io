const audio = new Audio('audio/cavalo.mp3');
let cavalos = 0;
$(document).ready(function(){
    $(".epilepsyButton").click(function(){
        $(".epilepsyDiv").toggle(100);
    });
});

function cavalo() {
    audio.play();
    cavalos += 1;
    document.getElementById("cavaloContador").innerHTML = cavalos;
}
const playbtn= document.querySelector('#play')
const resetbtn =document.querySelector('#reset')


let seconds = 0 ;
let minutes = 0 ;
let hours = 0 ;

let leadingseconds =0
let leadingminutes = 0
let leadinghours = 0

let timerInterval =null;
let timerstatus = 'Stopped'
function stopwatch(){
    seconds++
    if(seconds / 60 ===1){
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    if(seconds < 10){
        leadingseconds='0'+seconds.toString();
    }else{
        leadingseconds = seconds;
    }
    if (minutes < 10) {
        leadingminutes = '0' + minutes.toString();
    } else {
        leadingminutes = minutes;
    }
    if (hours < 10) {
        leadinghours= '0' + hours.toString();
    } else {
        leadinghours = hours;
    }
    let inTimer = document.querySelector('#timer').innerHTML= leadinghours+":"+leadingminutes+":"+leadingseconds;
}
playbtn.addEventListener('click',()=>{
    if(timerstatus ===)
})
window.setInterval(stopwatch, 1000)
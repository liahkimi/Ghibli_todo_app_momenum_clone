const clock = document.querySelector('h1#clock');

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    // const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
}
getClock() //웹사이트가 로드되자마자 실행하고
setInterval(getClock, 1000);//또 매초마다 반복 실행하기
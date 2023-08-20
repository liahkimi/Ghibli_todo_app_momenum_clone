//유저의 위치(geolocation)을 제공해주는 함수(wifi,위치,gps)
// navigator.geolocation.getCurrentPosition(성공했을때의 콜백함수, 실패했을떄의 콜백함수);

const API_KEY = "7b6135d329a93726f10371b8aed75378";


//유저의 위치를 얻는데 성공했을 때의 콜백함수
function onGeoOk(position){
    //console.log(position); //GeolocationPosition object를 인자로 받음
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response=>response.json())
                .then((data) =>{
                    // const weather = document.querySelector("#weather span:first-child");
                    const icon = document.querySelector("#weather span:first-child img");
                    const city = document.querySelector("#weather span:last-child");
                    
                    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                    city.innerText= data.name;
                    // weather.innerText =`${data.weather[0].main} / ${data.main.temp}`;
                    
                });
            }
//에러가 났을 때의 콜백함수
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
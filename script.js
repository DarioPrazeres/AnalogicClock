setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
function setClock(){
    const currentDate = new Date();
    const secondRatetion = currentDate.getSeconds()/60;
    const minuteRatetion = (secondRatetion + currentDate.getMinutes())/60;
    const hourRatetion = (minuteRatetion + currentDate.getHours())/12;
    setRotation(secondHand, secondRatetion);
    setRotation(minuteHand, minuteRatetion);
    setRotation(hourHand, hourRatetion);
}
function setRotation(element, rotation){
    element.style.setProperty('--rotation', rotation * 360)
}
setClock()
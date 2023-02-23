let userName = prompt("Adınız nedir?","Adınızı Giriniz...")
document.getElementById('myName').innerHTML = userName

let myClock = document.getElementById('myClock')
function currentTime() {
    var tarih = new Date();
    var saniye = tarih.getSeconds();
    var dakika = tarih.getMinutes();
    var saat = tarih.getHours();
    var gun = tarih.getDay();
    var currentDay = ""

    if ( gun == 0) {
        currentDay = "Pazar"
    } else if (gun == 1) {
        currentDay = "Pazartesi"
    } else if (gun == 2) {
        currentDay = "Salı"
    } else if (gun == 3) {
        currentDay = "Çarşamba"
    } else if (gun == 4) {
        currentDay = "Perşembe"
    } else if (gun== 5) {
        currentDay = "Cuma"
    } else {
        currentDay = "Pazartesi"
    } 
    myClock.innerHTML =`${("0"+saat).substr(-2)}:${("0"+dakika).substr(-2)}:${("0"+saniye).substr(-2)} ${currentDay}`
}
currentTime()
setInterval(currentTime, 1000);
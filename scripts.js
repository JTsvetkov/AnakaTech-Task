

let rateUSD = document.getElementById('USD')
let rateBGN = document.getElementById('BGN')
let rateCAD = document.getElementById('CAD')
let rateAUD = document.getElementById('AUD')

var EURUSD, EURCAD, EURBGN, EURAUD;
var minuteIndex = 0
const rateIndex = 0.0001



function Implementor(json) {
    EURUSD = json.rates.USD
    EURBGN = json.rates.BGN
    EURCAD = json.rates.CAD
    EURAUD = json.rates.AUD
    updateRates()
    var rateRegulatorInterval = setInterval(rateRegulator, 60000)
    var updateRegulatorInterval = setInterval(updateRates, 5000)
    
    function stopRatingsUpdate() {
        clearInterval(updateRegulatorInterval)
        clearInterval(updateRegulatorInterval);     
    }
    setTimeout(stopRatingsUpdate, 300000)

}

fetch("currencies.json")
  .then(response => response.json())
  .then(json => Implementor(json));

function updateRates(){
    rateUSD.innerText = String(EURUSD.toFixed(4))
    rateBGN.innerText = String(EURBGN.toFixed(4))
    rateCAD.innerText = String(EURCAD.toFixed(4))
    rateAUD.innerText = String(EURAUD.toFixed(4))  
    console.log('updated')
}

function rateRegulator(){
    minuteIndex++;
    if(minuteIndex & 1){
        EURUSD+=rateIndex
        EURBGN+=rateIndex
        EURCAD+=rateIndex
        EURAUD+=rateIndex

        rateUSD.style.backgroundColor = 'green'
        rateBGN.style.backgroundColor = 'green'
        rateCAD.style.backgroundColor = 'green'
        rateAUD.style.backgroundColor = 'green'
        updateRates()

    } else{
        EURUSD-=rateIndex
        EURBGN-=rateIndex
        EURCAD-=rateIndex
        EURAUD-=rateIndex
        rateUSD.style.backgroundColor = 'red'
        rateBGN.style.backgroundColor = 'red'
        rateCAD.style.backgroundColor = 'red'
        rateAUD.style.backgroundColor = 'red'
        updateRates()
        

    }
    console.log('change in ratings')
}




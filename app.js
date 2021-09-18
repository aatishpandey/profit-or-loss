const inputInitialPrice = document.querySelector('#input-initial-price');
const inputStocks = document.querySelector('#input-stocks');
const inputCurrentPrice = document.querySelector('#input-current-price');
const checkBtn = document.querySelector('#btn-check');
const output = document.querySelector('#output');


function calculateProfitLoss(initialP,currenP,quantity){

    if(initialP > currenP){
        //loss
        var loss = (initialP - currenP)*quantity;
        var lossPer = (loss/initialP)*100;

        showOutput(`The loss is ${loss} and the percent of the loss is ${lossPer}`);
    }
    else if(currenP>initialP){
        //profit
        var profit = (currenP-initialP)*quantity;
        var profitPer = (profit/initialP)*100;

        showOutput(`The profit is ${profit} and the percent of the profit is ${profitPer}`);
    }
    else{
        //equal
        showOutput('lazy! Calculate Yourself');
    }

}

function clickHandler(){
    var ip = Number(inputInitialPrice.value);
    var cp = Number(inputCurrentPrice.value);
    var qty = Number(inputStocks.value);
    calculateProfitLoss(ip,cp,qty);

}

function showOutput(message){
    output.innerText = message;
}

checkBtn.addEventListener('click',clickHandler)
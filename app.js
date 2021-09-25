const inputInitialPrice = document.querySelector('#input-initial-price');
const inputStocks = document.querySelector('#input-stocks');
const inputCurrentPrice = document.querySelector('#input-current-price');
const checkBtn = document.querySelector('#btn-check');
const output = document.querySelector('#output');


function calculateProfitLoss(initialP,currenP,quantity){

    if(initialP > currenP){
        //loss
        var loss = ((initialP-currenP)*quantity).toFixed(2);
        var lossPer = (((initialP-currenP)*100)/initialP).toFixed(2);

        showOutput(`Oh!!😔 Your loss 💰 is ${loss} and the percent of the loss is ${lossPer}%`);
        output.style.color = '#EF4444';
    }
    else if(currenP>initialP){
        //profit
        var profit = ((currenP-initialP)*quantity).toFixed(2);
        var profitPer = (((currenP-initialP)*100)/initialP).toFixed(2);

        showOutput(`🤑 Yay!!Your profit 💰 is ${profit} and the percent of the profit is ${profitPer}% 🤑`);
        output.style.color = '#A7F3D0';
    }
    else{
        //equal
        showOutput('No gains No losses!!!');
    }

}

function clickHandler(){
    var ip = Number(inputInitialPrice.value);
    var cp = Number(inputCurrentPrice.value);
    var qty = Number(inputStocks.value);

    if(ip&&cp&&qty){
        calculateProfitLoss(ip,cp,qty);
    }else{
        showOutput("Please enter all values");
    }

}

function showOutput(message){
    output.innerText = message;
}

checkBtn.addEventListener('click',clickHandler);
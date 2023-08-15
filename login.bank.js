document.getElementById('btn-deposit').addEventListener('click', function(){

    const deposit = document.getElementById('inpute-deposit');
    const depositMoneyintgar = deposit.value;
    const depositMoney = parseFloat(depositMoneyintgar);

    deposit.value = ''

    if(isNaN(depositMoney)){
        alert('Please input number');
        return ;
    }
   
    const totalDeposit = document.getElementById('deposit');
    const depositAmountintgar = totalDeposit.innerText;
    const depositAmount = parseFloat(depositAmountintgar);
  
    const finalDeposit = depositMoney + depositAmount;
    totalDeposit.innerText = finalDeposit;

    const balance = document.getElementById('balance');
    const totalBalanceintgar = balance.innerText;
    const totalBalance = parseFloat(totalBalanceintgar)

    const finalBalance = totalBalance + depositMoney;
    balance.innerText = finalBalance;

    deposit.value = ''


})


document.getElementById('btn-Withdraw').addEventListener('click', function(){
    
        const withdraw = document.getElementById("Withdraw-balance");
        const withdrawBalanceString = withdraw.value;
        const withdrawBalance = parseFloat(withdrawBalanceString);

        withdraw.value = ''

        if(isNaN(withdrawBalance)){
            alert('Please input number');
            return ;
        }


        const withdrawAmount = document.getElementById('withdraw');
        const totalWithdRawing = withdrawAmount.innerText;
        const totalWithdraw = parseFloat(totalWithdRawing);

                

        const balance = document.getElementById('balance');
        const totalBalanceintgar = balance.innerText;
        const totalBalance = parseFloat(totalBalanceintgar)



        if(totalBalance < withdrawBalance){
            alert('You Have No Balance');
            return;
        }

        const finalWithdraw = withdrawBalance + totalWithdraw;
        withdrawAmount.innerText = finalWithdraw;


        const filanBalance = totalBalance - withdrawBalance;
        balance.innerText = filanBalance;



})
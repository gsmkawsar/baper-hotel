document.getElementById('btn-deposit').addEventListener('click', function(){

    const deposit = document.getElementById('inpute-deposit');
    const depositMoneyintgar = deposit.value;
    const depositMoney = parseFloat(depositMoneyintgar);
   
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

        const withdrawAmount = document.getElementById('withdraw');
        const totalWithdRawing = withdrawAmount.innerText;
        const totalWithdraw = parseFloat(totalWithdRawing);

        const finalWithdraw = withdrawBalance + totalWithdraw;
        withdrawAmount.innerText = finalWithdraw;

        const balance = document.getElementById('balance');
        const totalBalanceintgar = balance.innerText;
        const totalBalance = parseFloat(totalBalanceintgar)

        const filanBalance = totalBalance - withdrawBalance;
        balance.innerText = filanBalance;


        withdraw.value = ''
})
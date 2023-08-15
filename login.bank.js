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
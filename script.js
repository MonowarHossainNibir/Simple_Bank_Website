//for login section
const controlBtn = document.getElementById("login-button");
controlBtn.addEventListener("click", function(){
    const loginPage = document.getElementById("login-page");
    loginPage.style.display = "none";
    const mainPage = document.getElementById("main-page");
    mainPage.style.display = "block";

});

//for deposit section
const depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    
    const currentAmount = document.getElementById("current-amount").innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const totalAmount = currentAmountNumber + depositNumber;
    document.getElementById("current-amount").innerText = totalAmount;

    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositNumber;
    document.getElementById("current-balance").innerText = totalBalance;
    document.getElementById("depositAmount").value= "";

});

//for withdraw section
const withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
    
    const currentWithdraw = document.getElementById("current-withdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = currentWithdrawNumber + withdrawNumber;
    document.getElementById("current-withdraw").innerText = totalWithdraw;

    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber - withdrawNumber;
    document.getElementById("current-balance").innerText = totalBalance;
    document.getElementById("withdraw-amount").value= "";
});
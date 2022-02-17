document.getElementById('calculate-button').addEventListener('click', function () {
    const income = document.getElementById('income');
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const clothes = document.getElementById('clothes');
    // total expenses 
    const totalExpenses = document.getElementById('total-expenses');
    foodRentClothe = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
    totalExpenses.innerText = foodRentClothe;

    // balance cheek 
    const balance = document.getElementById('balance');
    total = parseInt(income.value) - foodRentClothe;
    balance.innerText = total;

    // empty file 
    // income.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = '';
})

// saving calculation

document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const saveAmount = document.getElementById('save-amount');
    const income = document.getElementById('income');
    let saveParcent = parseInt(saveInput.value) / 100;
    let total = parseInt(income.value) * saveParcent;
    saveAmount.innerText = total;
    // Remaining Balance

    const balance = document.getElementById('balance');
    let remaining = parseInt(balance.innerText) - total;
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remaining;

    // saveAmount.innerText = parseInt(saveInput.value);
})
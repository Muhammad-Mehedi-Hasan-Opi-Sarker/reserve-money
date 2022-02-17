document.getElementById('calculate-button').addEventListener('click', function () {
    const income = document.getElementById('income');
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const clothes = document.getElementById('clothes');
    const now = document.getElementById('now');
    // total expenses 
    const totalExpenses = document.getElementById('total-expenses');
    if (income.value > 0) {
        foodRentClothe = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
        totalExpenses.innerText = foodRentClothe;

        // balance cheek 
        const balance = document.getElementById('balance');
        total = parseInt(income.value) - foodRentClothe;
        balance.innerText = total;
        now.style.display = 'none';
    }
    else {
        now.style.display = 'block';
    }

    // empty file 
    // income.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = '';
})

// saving calculation

document.getElementById('save-button').addEventListener('click', function () {


    // hide 
    const saveInput = document.getElementById('save-input');
    const saveAmount = document.getElementById('save-amount');
    const income = document.getElementById('income');
    let saveParcent = parseInt(saveInput.value) / 100;
    let total = parseInt(income.value) * saveParcent;
    saveAmount.innerText = total.toFixed(2);
    // Remaining Balance
    const balance = document.getElementById('balance');

    const remainingBalance = document.getElementById('remaining-balance');
    let remaining = parseInt(balance.innerText) - total;
    remainingBalance.innerText = remaining




    // saveAmount.innerText = parseInt(saveInput.value);
})
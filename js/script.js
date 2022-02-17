document.getElementById('calculate-button').addEventListener('click', function () {
    const income = document.getElementById('income');
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const clothes = document.getElementById('clothes');
    const negative = document.getElementById('negative');
    const big = document.getElementById('big');
    // total expenses 
    const totalExpenses = document.getElementById('total-expenses');
    if (income.value > 0) {
        foodRentClothe = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
        totalExpenses.innerText = foodRentClothe;

        // balance cheek 
        const balance = document.getElementById('balance');
        total = parseInt(income.value) - foodRentClothe;
        // balance.innerText = total;
        negative.style.display = 'none';
        if (income.value > foodRentClothe) {
            balance.innerText = total;
            big.style.display = 'none';
        }
        else {
            big.style.display = 'block';

        }

    }
    else {
        negative.style.display = 'block';
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
    const save = document.getElementById('save');
    if (balance.innerText > total) {
        const remainingBalance = document.getElementById('remaining-balance');
        let remaining = parseInt(balance.innerText) - total;
        remainingBalance.innerText = remaining;
        save.style.display = 'none';

    }
    else {
        save.style.display = 'block';
    }




    // saveAmount.innerText = parseInt(saveInput.value);
})
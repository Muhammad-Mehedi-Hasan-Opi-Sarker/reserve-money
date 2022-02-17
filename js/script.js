document.getElementById('calculate-button').addEventListener('click', function () {
    const income = document.getElementById('income');
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const clothes = document.getElementById('clothes');
    const totalExpenses = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');
    // Total Expenses
    foodRentClothe = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
    totalExpenses.innerText = foodRentClothe;
    // Balance cheek
    total = parseInt(income.value) - foodRentClothe;
    balance.innerText = total;

})

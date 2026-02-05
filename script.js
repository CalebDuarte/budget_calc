// Expenses
let totalIncome = 0;
let rentExpense = 0;
let utilitiesExpense = 0;
let groceriesExpense = 0;
let transportExpense = 0;
let entertainmentExpense = 0;
let miscExpense = 0;

// Savings
let savingsTarget = 0;

function addSalary() {
    const salaryInput = document.getElementById("salaryInput");
    const salary = Number(salaryInput.value);

    if (salary > 0) {
        totalIncome = salary;
        salaryInput.value = "";
        updateSummary();
    }
}

function addRent() {
    rentExpense = Number(document.getElementById("rentInput").value) || 0;
    document.getElementById("rentInput").value = "";
    updateSummary();
}

function addUtilities() {
    utilitiesExpense = Number(document.getElementById("utilitiesInput").value) || 0;
    document.getElementById("utilitiesInput").value = "";
    updateSummary();
}

function addGroceries() {
    groceriesExpense = Number(document.getElementById("groceriesInput").value) || 0;
    document.getElementById("groceriesInput").value = "";
    updateSummary();
}

function addTransport() {
    transportExpense = Number(document.getElementById("transportInput").value) || 0;
    document.getElementById("transportInput").value = "";
    updateSummary();
}

function addEntertainment() {
    entertainmentExpense = Number(document.getElementById("entertainmentInput").value) || 0;
    document.getElementById("entertainmentInput").value = "";
    updateSummary();
}

function addMisc() {
    miscExpense = Number(document.getElementById("miscInput").value) || 0;
    document.getElementById("miscInput").value = "";
    updateSummary();
}

function setSavingsGoal() {
    savingsTarget = Number(document.getElementById("savingInput").value) || 0;
    document.getElementById("savingGoal").textContent = savingsTarget.toFixed(2);
    updateSummary();
}

function calculateHousingExpenses() {
    return rentExpense + utilitiesExpense;
}

function calculateLivingExpenses() {
    return groceriesExpense + transportExpense;
}

function calculateOtherExpenses() {
    return entertainmentExpense + miscExpense;
}

function calculateTotalExpenses() {
    return calculateHousingExpenses() +
           calculateLivingExpenses() +
           calculateOtherExpenses();
}

function updateSummary() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBudget = totalIncome - totalExpenses;
    const actualSavings = remainingBudget > 0 ? remainingBudget : 0;

    // Monthly Summary
    document.getElementById("totalIncome").textContent = totalIncome.toFixed(2);
    document.getElementById("housingTotal").textContent = calculateHousingExpenses().toFixed(2);
    document.getElementById("dailyTotal").textContent = calculateLivingExpenses().toFixed(2);
    document.getElementById("otherTotal").textContent = calculateOtherExpenses().toFixed(2);
    document.getElementById("totalExpenses").textContent = totalExpenses.toFixed(2);
    document.getElementById("remainingBudget").textContent = remainingBudget.toFixed(2);

    // Savings
    document.getElementById("actualSavings").textContent = actualSavings.toFixed(2);

    // Yearly Projections
    document.getElementById("yearlyIncome").textContent = (totalIncome * 12).toFixed(2);
    document.getElementById("yearlyExpenses").textContent = (totalExpenses * 12).toFixed(2);
    document.getElementById("yearlySavings").textContent = (actualSavings * 12).toFixed(2);
}

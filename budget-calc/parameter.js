let housingTotal = 0; // Stores the running housing total

function addExpense(inputId, outputId) {
    const value = Number(document.getElementById(inputId).value);

    housingTotal += value; // Adds the new value to the total
    document.getElementById(outputId).textContent = housingTotal;
}

function addRent() {
    addExpense("rentInput", "housingTotal");
}

function addUtilities() {
    addExpense("utilitiesInput", "housingTotal");
}

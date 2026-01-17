function addSalary() {
    const salaryInput = document.getElementById("salaryInput");
    const salary = Number(salaryInput.value);

    if (salary > 0) {
        totalIncome = salary;
        salaryInput.value = "";
        updateSummary();
    }
}

function monthlyExpense(rentInput,utilitiesInput){
    return rentInput + "" + utilitiesInput;

}
let Expenses = monthlyExpense()
console.log() 
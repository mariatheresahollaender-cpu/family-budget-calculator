function calculateBudget() {
    // 1. Gather all input values
    const income = Number(document.getElementById("income").value);
    const rent = Number(document.getElementById("rent").value);
    const food = Number(document.getElementById("food").value);
    const transport = Number(document.getElementById("transport").value);
    const insurance = Number(document.getElementById("insurance").value);
    const utilities = Number(document.getElementById("utilities").value);
    const clothings = Number(document.getElementById("clothings").value);
    const entertainments = Number(document.getElementById("entertainments").value);
    const childcare = Number(document.getElementById("childcare").value);
    const misc = Number(document.getElementById("misc").value);
    const savingsGoal = Number(document.getElementById("savings").value);
    const investment = Number(document.getElementById("investment").value);

    // 2. Perform calculations
    const totalExpenses = rent + food + transport + insurance + utilities + clothings + entertainments + childcare + misc;
    const remainingAfterExpenses = income - totalExpenses;
    const finalBalance = remainingAfterExpenses - savingsGoal - investment;

    // 3. Display results in the HTML
    document.getElementById("result").innerHTML = `
        <h5>Budget Summary</h5>
        <p>Total Income: ${income} DKK</p>
        <p>Total Expenses: ${totalExpenses} DKK</p>
        <p>Remaining After Expenses: ${remainingAfterExpenses} DKK</p>
        <p>Savings Goal: ${savingsGoal} DKK</p>
        <p>Investments: ${investment} DKK</p>
        <p id="total">Final Balance: ${finalBalance} DKK</p>
    `;

    // 4. Handle green/red positive/negative color styling for final balance
    const totalElement = document.getElementById("total");
    if (totalElement) {
        if (finalBalance >= 0) {
            totalElement.classList.add("positive");
            totalElement.classList.remove("negative");
        } else {
            totalElement.classList.add("negative");
            totalElement.classList.remove("positive");
        }
    }

    // 5. Package and save data to localStorage
    const data = {
        income, rent, food, transport, insurance, utilities, clothings, entertainments, childcare, misc, savingsGoal, investment
    };
    localStorage.setItem("budgetData", JSON.stringify(data));
} // <--- calculateBudget function ends here cleanly!


// --- GLOBAL SCOPE EVENT LISTENERS & FUNCTIONS ---

// Clear All button event listener
document.getElementById("clearBtn").addEventListener("click", () => {
  const currentDarkMode = localStorage.getItem("darkMode");  
  localStorage.clear();
  if (currentDarkMode==="true") {
    localStorage.setItem("darkMode", "true");
  }
    location.reload();
});

// Keep dark mode active immediately when the page loads
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
    }
});

// Dark mode toggle function (Globally accessible by your HTML button)
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    const isDarkMode = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
}

// Export Budget button event listener (Triggers print/PDF)
document.getElementById("exportBtn").addEventListener("click", () => {
    window.print();
});

// Save Report button event listener
document.getElementById("saveBtn").addEventListener("click", () => {
   const toast=document.getElementById("toastt");
   toast.classList.add("toast show");

setTimeout(() => {
    toast.className=toast.className.replace("show", "");
  }, 3000); // Hide after 3 seconds
});
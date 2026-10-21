function calculateBudget() {
  const income = Number(document.getElementById("income").value);

  const rent = Number(document.getElementById("rent").value);
  const food = Number(document.getElementById("food").value);
  const transport = Number(document.getElementById("transport").value);
  const insurance = Number(document.getElementById("insurance").value);
  const utilities = Number(document.getElementById("utilities").value);
  const clothings = Number(document.getElementById("clothings").value);
  const entertainments = Number(document.getElementById("entertainments").value);
  const childcare = Number (document.getElementById("childcare").value);
  const misc = Number(document.getElementById("misc").value);
  const savingsGoal = Number(document.getElementById("savings").value);
  const investment = Number(document.getElementById("investment").value);

  const totalExpenses =
    rent +
    food +
    transport +
    insurance +
    utilities +
    clothings +
    entertainments +
    childcare+
    misc;

  const remainingAfterExpenses = income - totalExpenses;

  const finalBalance = remainingAfterExpenses-savingsGoal-investment;


  document.getElementById("result").innerHTML = `
    <h5>Budget Summary</h5>
    <p>Total Income: ${income} DKK</p>
    <p>Total Expenses: ${totalExpenses} DKK</p>
    <p>Remaining After Expenses: ${remainingAfterExpenses} DKK</p>
    <p>Savings Goal: ${savingsGoal} DKK</p>
    <p>Investments: ${investment} DKK</p>
    <p>Final Balance: ${finalBalance} DKK</p>
    
    
  `;
}
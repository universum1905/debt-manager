auth.onAuthStateChanged(async user => {
    if (!user) window.location.href = "index.html";
    const debts = await loadDebts(user.uid);
    renderDashboard(debts);
});

function renderDashboard(debts) {
    let totalDebt = 0, monthlyPayments = 0;
    debts.forEach(d => {
        const interest = calculateInterest(d.amount, d.interestRate || 0);
        totalDebt += d.amount + interest;
        monthlyPayments += d.monthlyPayment || 0;
    });

    document.getElementById("totalDebt").textContent = totalDebt.toLocaleString() + " TL";
    document.getElementById("monthlyPayments").textContent = monthlyPayments.toLocaleString() + " TL";
    document.getElementById("availableBudget").textContent = "Berechnung folgt…";
}

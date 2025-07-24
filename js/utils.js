function convertCurrency(amount, toEUR = false, rate = 46) {
    return toEUR ? (amount / rate).toFixed(2) + " €" : (amount * rate).toFixed(0) + " TL";
}

function calculateInterest(balance, rate) {
    return balance * (rate / 100);
}

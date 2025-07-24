const db = firebase.firestore();

async function saveDebt(userId, debtData) {
    await db.collection("users").doc(userId).collection("debts").add(debtData);
}

async function loadDebts(userId) {
    const snapshot = await db.collection("users").doc(userId).collection("debts").get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

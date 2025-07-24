const auth = firebase.auth();

document.getElementById("loginBtn")?.addEventListener("click", async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        await auth.signInWithPopup(provider);
        window.location.href = "dashboard.html";
    } catch (err) {
        alert("Login fehlgeschlagen: " + err.message);
    }
});

document.getElementById("logoutBtn")?.addEventListener("click", async () => {
    await auth.signOut();
    window.location.href = "index.html";
});

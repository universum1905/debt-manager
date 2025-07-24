// Beispielkonfiguration für Firebase – hier KEINE echten Schlüssel eintragen
// Trage deine echten Werte in config/firebaseConfig.js ein (nicht hochladen!)

const firebaseConfig = {
    apiKey: "HIER_DEIN_API_KEY",
    authDomain: "DEIN_PROJEKT.firebaseapp.com",
    projectId: "DEIN_PROJEKT_ID",
    storageBucket: "DEIN_PROJEKT.appspot.com",
    messagingSenderId: "DEIN_SENDER_ID",
    appId: "DEINE_APP_ID"
};

// Initialisierung
firebase.initializeApp(firebaseConfig);

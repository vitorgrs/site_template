var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

// Configurando a persistência LOCAL
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    // Após definir a persistência, tente o login
    return firebase.auth().signInWithPopup(provider);  // Exemplo com Google
  })
  .catch(function(error) {
    // Lida com erros de persistência
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error("Error: ", errorCode, errorMessage);
  });




// Importa o Firebase core e o módulo de autenticação
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBBvTjR8Kmbv-lhuSy6H7YiaDjQAf4cVLQ",
  authDomain: "sitenca-c7704.firebaseapp.com",
  projectId: "sitenca-c7704",
  storageBucket: "sitenca-c7704.appspot.com",
  messagingSenderId: "279609614229",
  appId: "1:279609614229:web:75bf6fda61bee779a4e09c"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o módulo de autenticação
const auth = getAuth(app);

// Configura a persistência LOCAL para manter o login após atualizar a página
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Define o provedor de autenticação (Google)
    const provider = new GoogleAuthProvider();
    
    // Tenta o login com o popup do Google
    return signInWithPopup(auth, provider);
  })
  .then((result) => {
    // Sucesso no login
    console.log("Usuário logado: ", result.user);
  })
  .catch((error) => {
    // Lida com erros de autenticação
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Erro ao tentar logar: ", errorCode, errorMessage);
  });

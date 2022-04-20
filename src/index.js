import { initializeApp} from "https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/7.14.2/firebase-auth.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCTibRCP0qvvjbn8OhXiD3K7cd9UdaakdA",
  authDomain: "deaddog-189a9.firebaseapp.com",
  projectId: "deaddog-189a9",
  storageBucket: "deaddog-189a9.appspot.com",
  messagingSenderId: "1054109485025",
  appId: "1:1054109485025:web:cb393be7018a67a510b4a0"
})
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("no user");
  }
});
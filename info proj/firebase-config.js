// firebase-config.js
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCigO-nB9mCcMeEcsG8VVxWHabRBfWNfac",
    authDomain: "http://localhost:5000/",
    projectId: "ottaworld",
    appId: "1:185458744637:web:7c1fa2f95a766a085a7954"
  };

  firebase.initializeApp(firebaseConfig);

// Anonymous login function
function login() {
  firebase.auth().signInAnonymously()
    .then((userCredential) => {
      // Signed in successfully, you can access the user data if needed
      const user = userCredential.user;
      console.log("Anonymous user:", user);
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Anonymous login error:", errorMessage);
    });
}
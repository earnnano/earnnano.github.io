var provider = new firebase.auth.GoogleAuthProvider();
var isUserSignedIn = false;

function load() {
  
  
}



function signIn() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    var userUID = user.uid;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log(error.message);
  });
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    isUserSignedIn = true;
  } else {
    isUserSignedIn = false;
  }
});
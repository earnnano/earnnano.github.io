var provider = new firebase.auth.GoogleAuthProvider();
window.alert("beep boop");
function load() {
  window.alert("boop beep");
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  window.alert("abc");
  window.alert(user.email);
  window.alert(user.email.toString());
  window.alert("def");
}
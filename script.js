var provider = new firebase.auth.GoogleAuthProvider();
function signIn() {
    firebase.auth().signInWithRedirect(provider);
}

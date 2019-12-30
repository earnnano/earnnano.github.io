firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      isUserSignedIn = true;
    } else {
      isUserSignedIn = false;
    }
  });
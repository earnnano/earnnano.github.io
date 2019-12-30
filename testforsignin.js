var provider = new firebase.auth.GoogleAuthProvider();

function pageLoaded() {
	var user = firebase.auth().currentUser;
	var accountButton = document.getElementById('accountButton');
	var isUserSignedIn = false;
	if (user) {
		isUserSignedIn = true;
	} else {
		isUserSignedIn = false;
	}
}

firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		isUserSignedIn = true;
	} else {
		isUserSignedIn = false;
	}
	updateUserInfo();
});

function updateUserInfo() {
	if(isUserSignedIn) {
		accountButton.innerHTML = 'Sign Out (' + user.getDisplayName().split(' ')[0] + ')';
	} else {
		accountButton.innerHTML = 'Sign In';
	}
}

function signEither() {
	if(isUserSignedIn) {
		signOut();
	} else {
		signIn();
	}
}

function signIn() {
	firebase.auth().signInWithPopup(provider).then(function(result) {
		// This gives you a Google Access Token. You can use it to access the Google API.
		var token = result.credential.accessToken;
		// The signed-in user info.
		var user = result.user;
		// ...
		var userUID = user.uid;
		updateUserInfo();
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


function signOut() {
	firebase.auth().signOut().then(function() {
		updateUserInfo();
	}, function(error) {
		console.error('Sign Out Error', error);
	});
}
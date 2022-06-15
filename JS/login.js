document.getElementById("login").onclick = function(){
    let email = document.getElementById("email2").value;
    let password = document.getElementById("password2").value;

    //invoke firebase
    // if user is logged in
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
        alert("user signed in")

        let user = userCredential.user
        console.log(user.uid)
        window.location.href = "/home.html"
    }).catch((error) => {
        console.log(error.message);
    })
}
document.getElementById("submitbutton").onclick = function() {
    
    alert('clicked')
    // getting html elements
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
   
    

    if(name== ''){
        alert("username reqired")
    }else if(phone == ''){
        alert(' required')
    }else{
        // creating users/invoke firebase
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredential) => {
    
        let user = userCredential.user
        let uid = user.uid;
        
        console.log(user);
        console.log(uid);
        alert("user created")

        // invoke firestore
        firebase.firestore().collection("users").doc(uid)
        .set({
            email:email,
            username:name,
            userphonenum:phone,
            userId:uid
        }).then(() => {
            alert("user data added")
            window.location.href = "/home.html"
        }).catch((error) => {
            console.log(error.message);
            document.getElementById("errormessageone").innerHTML = error.message
        })
        window.location.href = "/home.html"
    }).catch((error) => {
        document.getElementById("submitbutton").style.display = "block"
        document.getElementById("load").style.display = "none"
        console.log(error.message);
        document.getElementById("errormessagetwo").innerHTML = error.message
        document.getElementById("errormessagetwo").style.display = "block"
        
    })
}
    }
    
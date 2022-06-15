firebase.auth().onAuthStateChanged((user) => {
    // check if user is logged in
    if(user){

        // get the id of the logged in user
        let userId =user.uid
        //getting the timestamp
        const timeStamp = new Date();

        // pull all users
        firebase.firestore().collection("users").get()
        .then((querySnapshot) => {
            let content = '';

            querySnapshot.forEach((doc) => {

                let username = doc.data().username;
                let profImage = doc.data().profileImage;
                let userId = doc.data().userId;

                content += ` <div class="hawlk">`
                content += `<div class="extradiv" style="display: flex;">`  
                content += `<div>`
                content += `<img class="img" src="../IMAGES/user (1).png" `+ profImage +`" alt="">`    
                content += `</div>`
                content += `<div>`
                content += `<h4>`+ username +`</h4>`    
                content += `<img class="envelope" src="../IMAGES/16839673131548336221.svg" alt="">`    
                content += `</div>`
                content += `</div>`
                content += `</div>`
            })
            $("#showAllUsers").append(content)
        })

    }
    else{
        window.location.href ="/signup.html"
    }
})
// lay user
function login(username,password){
    db.ref('users').orderByChild('userName').equalTo(username).once('value',(snapshot) =>{
        const userData = snapshot.val();
        console.log('data la', userData);
        if(userData == null){
            alert('user ko ton tai');
            return;
        }
        snapshot.forEach(childSnapshot => {
            if(password != childSnapshot.val().password || childSnapshot.val().type != 2){
                alert('ko dung password');
            }
            else if(password == childSnapshot.val().password && childSnapshot.val().type == 2){
                location.replace('file:///Users/admin/Documents/webplants/index.html');
            }
        })
    });


}

// acces index.html
const formLogin = document.querySelector(".formLogin");
btnLogin.addEventListener('click',()=>{
    // login(userName,passwordInput);
    console.log('userName la '+formLogin.userNameInput.value)
    login(formLogin.userNameInput.value,formLogin.passwordInput.value);
})

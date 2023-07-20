let loginBtn = document.getElementById('login-btn')

loginBtn.addEventListener("click", () => {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    let message = document.getElementById("message")
    message.style.display = "none"

    let signinData = new URLSearchParams();
    signinData.append("username", username);
    signinData.append("password", password);

    fetch("http://localhost/LoginBootstrap/php/signin.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: signinData
            })
    .then((response) => response.json())
    .then(data => {
        if (data.status == "Logged In"){
        localStorage.setItem("username", username)
        window.location.href = "dashboard.html"
        } else {
            message.style.display = "block"
        }
    })
    
})




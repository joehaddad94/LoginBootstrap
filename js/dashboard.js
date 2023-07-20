let welcome = document.getElementById("welcome")
console.log(welcome)

welcome.innerText = "Welcome " + localStorage.getItem("username") + "."
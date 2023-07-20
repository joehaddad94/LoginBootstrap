

// document.addEventListener("DOMContentLoaded", getPosts);

// let postsArray = []

// function getPosts() {
//     fetch("http://localhost/php/signin.php")
//       .then((response) => response.json())
//       .then((posts) => {
//         postsArray = posts;
//         console.log(postsArray)
//         //displayPosts()
//       })
//       .catch((error) => console.log(error))
//   }

const pages = {}

pages.base_url = "http://localhost/workshop/";

pages.print_message = (message) =>{
    console.log(message);
}

pages.page_login = () => {
    console.log ("Hello form login")
}

pages.page_signup = () => {
    console.log ("Hello form signup")
}

pages.loadFor = (page) => {
    eval("pages.page_" + page + "();")
}
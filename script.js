function register(){

    let username =
        document.getElementById("regUser").value;

    let password =
        document.getElementById("regPass").value;

    if(password.length < 8){

        document.getElementById("regMessage")
        .innerHTML =
        "Password must be at least 8 characters";

        return;
    }

    localStorage.setItem(
        "username",
        username
    );

    localStorage.setItem(
        "password",
        password
    );

    document.getElementById("regMessage")
    .innerHTML =
    "Registration Successful!";
}

function login(){

    let username =
        document.getElementById("loginUser").value;

    let password =
        document.getElementById("loginPass").value;

    let storedUser =
        localStorage.getItem("username");

    let storedPass =
        localStorage.getItem("password");

    if(username === storedUser &&
       password === storedPass){

        sessionStorage.setItem(
            "loggedIn",
            "true"
        );

        window.location.href =
            "dashboard.html";

    }else{

        document.getElementById("message")
        .innerHTML =
        "Invalid Credentials";
    }
}

function logout(){

    sessionStorage.removeItem(
        "loggedIn"
    );

    window.location.href =
        "index.html";
}

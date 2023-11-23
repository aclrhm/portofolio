// darkmode
let body = document.body;
let whiteMode = document.getElementById("mode")

function white(){
    body.classList.toggle("dark");
}

// typing
var typing = new Typed ("#typed" ,{
    strings : ["Junior Frontend Developer", "Junior Backend Developer", "UI / UX Designer", "Student"],
    typeSpeed : 70,
    backSpees : 50,
    loop : true
});


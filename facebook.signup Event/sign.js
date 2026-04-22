// function toggleText(e) {
//     e.preventDefault(); // stop page reload

//     let moreText = document.getElementById("moreText");

//     if (moreText.style.display === "none") {
//         moreText.style.display = "block";
//         e.target.innerText = "Show less";
//     } else {
//         moreText.style.display = "none";
//         e.target.innerText = "Learn more.";
//     }
// }






let username = document.getElementById("name")
let usersurname = document.getElementById("surname")
let userEmail = document.getElementById("email")
let userPass = document.getElementById("password")



function submitHandler() {

    if (!username.value || !usersurname.value  || !userEmail.value || !userPass.value
    ) {
        return alert("all fields are required")
    }

    console.log("username ==>", username.value)
    console.log("usersurname ==>", usersurname.value)
    console.log("userEmail ==>",userEmail.value)
    console.log("userPass ==>",userPass.value)
  
}


let text  = "People who use our service may have uploaded. your contact information to Facebook."

let expandElem = document.getElementById("expand")
let paragraph = document.getElementById("paragraph")

function expand(){
console.log(expandElem.innerText)

    if(expandElem.innerText == "learn more"){
        paragraph.innerHTML = text
        expandElem.innerText = "learn less"
        
    }else{
        paragraph.innerText = text.slice(0,83)
        expandElem.innerText = "learn more"
    }
    
}
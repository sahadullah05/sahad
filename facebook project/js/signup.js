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






let firstName = document.getElementById("firstName")
let surName = document.getElementById("surName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let  date = document.getElementById("date")
let month = document.getElementById("month")
let  year = document.getElementById("year")
let gender = document.getElementsByName("gender")

let allUsers = []
let user = {}
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/



function submitHandler(e) {


    e.preventDefault()
     
    user.firstName = firstName.value
    user.surName = surName.value
    user.email = email.value
    user.password = password.value
    user.dob =date.value + "-" + month.value +"-"+ year.value


    for (let i = 0; i < gender.length ; i++){

        if ( gender[i].checked){
            user.gender = gender[i].value
        }

    }


    if (!user.firstName.trim() || !user.surName.trim() || !user.email.trim() || !user.password.trim() || !user.dob.trim() || !user.gender
    ) {
        return sweety("error", "Oops", "Please fill all the fields")
    }


    if(password.length < 8){
        return sweety("error", "Oops", "password at aleast 8 character")
    }

    if(!emailRegex.test(user.email)){
         return sweety("error","Oops","wrong email")
    }

    allUsers.push(user)
    firstName.value =  ""
    surName.value = ""
    email.value  = ""
    password.value = ""

    for( let i =0; i < gender.length; ++i)
    {
        if(gender[i].checked){
            gender[i].checked = false;
        }
    }

    return sweety("success", "ok", "signup successfully!")


    // console.log("username ==>", username.value)
    // console.log("usersurname ==>", usersurname.value)
    // console.log("userEmail ==>",userEmail.value)
    // console.log("userPass ==>",userPass.value)
  
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


function sweety(icon, title, text) {
    return Swal.fire({
        icon,
        title,
        text,
    });
}

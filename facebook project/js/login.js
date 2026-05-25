// let  email= document.getElementById("useremail")
// let password = document.getElementById("userpassword")



// let dumuser =[
//     {
//           fullName : "Ali",
//         email:"abdulwahid12348@gmail.com",
//         password : "12345678"
//     },

//     {
//           fullName : "Adnan",
//         email:"adnan8@gmail.com",
//         password : "12345678"
//     },

//     {
//         fullName : "Sohail",
//         email:"sohail@gmail.com",
//         password : "12345678"
//     },

// ]


// function loginHandler() {

//     let isEmailexist = null;
//     let isPasswordexist = null;

//     console.log("login handler chlaaa ")

//     if ( !email.value.tirm() || !pass.value.tirm() 
//     ) {
//     return sweety("error", "Oops", "Please fill all the fields")
//    }
//    console.log("useremail ==>", useremail.value)
//    console.log("userpassword ==>" ,userPass.value)

// }




// function sweety(title,text,icon){
//    return Swal.fire(
//     {title,
//   text,
//   icon,
//   })

// }

let email = document.getElementById("Email")
let password = document.getElementById("Password")
// let eyeIcon = document.querySelector(".fa-solid")



let dummydata = [

    {

        fullName: "Sahad",
        email: "sahad.rajabali75@gmail.com",
        password: "12345678"
    },
    
    
    
    {



        fullName: "Ali",
        email: "ali12348@gmail.com",
        password: "12345678"
    },
    {
        fullName: "Adnan",
        email: "adnan@gmail.com",
        password: "12345678"
    },



]

function loginHandler() {
    let isEmailExist = null;
    let iscurrentUser = null;


    if (!email.value.trim() || !password.value.trim()) {
        return sweety("error", "Oops", "Please fill all the fields")
    }

    for (let i = 0; i < dummydata.length; i++) {


        if (dummydata[i].email == email.value) {
            console.log(dummydata[i].email == email.value);
            isEmailExist = true

            if (isEmailExist && dummydata[i].password == password.value) {
                iscurrentUser = dummydata[i]
                console.log("current user -->", iscurrentUser);

                break;
            }
        }
    }

    if (!isEmailExist || !iscurrentUser) {
        return sweety("error", "Oops", "Invalid Credentials!")
    }



    if (iscurrentUser) {
        console.log("Ali ==>", iscurrentUser);
          sweety("success", "Okay", "User logged in successfully!")


    }





}

function sweety(icon, title, text) {
    return Swal.fire({
        icon,
        title,
        text,
    });
}














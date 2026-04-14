//    chap 20 to 25
// quetion1
// let firstName = prompt("Enter your firstname")
// let lastName =prompt("Enter your lastname") 

// let fullName = firstName + " " + lastName
// console.log ( "Hello!")
// console.log(fullName)

// quetion2

// const mobile = "sumsung"
// console.log ( "My phone is: sumsung galaxy s22 ultra plus "+ "\n" + " length of string " + mobile.length)

// quetion3
// const word = "pakistani"
// let index = word.indexOf ("n") 
// console.log("pakistani" + "\n" + "the index of 'n' " + index )

// quetion4

// const word = "Hello World!"
// let index = word.lastIndexOf("l") 
// console.log("string: Hello world!" + "\n" + "the index of 'l': " + index )

// quetion5
// const word = "pakistani"
// let character = word.charAt("3") 
// console.log("pakistani" + "\n" + "character at index  3: " + character )

// quetion6
// let firstName = prompt("Enter your firstname")
// let lastName =prompt("Enter your lastname") 

// let fullName = firstName.concat (' ' + lastName)
// console.log ( "Hello!" + "\n"  + fullName + "\n" + " welcome!")

//  quetion7
// let word = "Hyderabad"
// let newword = word.replace("Hyder" , "islam")
// console.log("Hyderabad" + "\n" + "AFter replacing " + newword )

// quetion8
//  let text = "Ali and Sami are best friends and they play cricket and football together.";

//  let message = text.replaceAll('and','&')
//  console.log(text)
//  console.log(message)
 
// quetion 9

// let str = "472"
// let num = Number(str)
// console.log("Value: " + str   +"| Type:" + typeof str + "\n" +
//     "Value:" + num +"| Type:" + typeof num
// )

// quetion 10
// var userInput = prompt("Enter any text:");
// var upperCaseText = userInput.toUpperCase();

// console.log("Capital Letters: " + upperCaseText);

// quetion11
// var userInput = prompt("Enter any text:");
// var titleCase = userInput.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1))
//  .join(" ");
//   console.log("Title Case: " + titleCase);

// quetion12
//   var num = 35.36;
// var str = num.toString();
// var result = str.replace(".", "");

// console.log("Result: " + result)



 

  //    chap 26 to 30
    // quetioin1
    //  let num = 12.5134
   // let roundNum = Math.round(12.6)
    // console.log(roundNum)
    // let ceilNum = Math.ceil(12.12)
    // console.log(ceilNum)
    // let floorNum = Math.floor(12.12)
    // console.log(floorNum)

// quetioin2
//      let num = -2.673
//    let roundNum = Math.round(-2.673)
//     console.log(roundNum)
//     let ceilNum = Math.ceil(-2.673)
//     console.log(ceilNum)
//     let floorNum = Math.floor(-2.673)
//     console.log(floorNum)

// quetion3
// let absoluteNum = Math.abs(-4)
// console.log("The absolute value is : " +  absoluteNum)



// // quetion4
// let randomNum = Math.random()
// console.log("The random dice value : "+Math.round(Math.random()* 6))

// quetion5

// let randomNum = prompt( Math.random() < 1 ? 0 : 2)
// let toss = randomNum === 0 ? "head" : "tail"
// console.log(toss)

// quetion 6
// let randomNum = Math.random(84)
// console.log("random number b/w 1 to 100 : "+Math.round(Math.random() * 100))

// quetion 7
// let randomNum = prompt ("Enter your weight: " )
// let weight = parseFloat(randomNum)
// console.log("The weight of user is: " + weight + "kg")

// quetion8
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userNumber = prompt("Guess the secret number (between 1 and 10):");

// userNumber = parseInt(userNumber);
// if (userNumber === secretNumber) {
//     alert(" Congratulations! You guessed the correct number!");
// } else {
//     alert("Sorry! The secret number was " + secretNumber);
// }

  // chap 31 to 34

  // quetion1
//    let currentTime = new Date()

//     currentTime.setFullYear(2026)
//     currentTime.setMinutes(20)
//      currentTime.setDate(14)

// console.log(currentTime)

  // quetion2
//      let currentTime = new Date()
     
//      let Months =["January", "February", "March", "April", "May", "June",]

//      let currentmonth = Months[currentTime.getMonth()]

// alert(currentmonth)

//  quetion 3
// let today = new Date().getDay(); 

// if (today === 0 || today === 6) {
//     alert("It's Fun Day!");
// } else {
//     alert("It's a Working Day!");
// }

  // quetion4

// let currentDate = new Date();


// timeSince1970 = currentDate.getTime();

// alert("Milliseconds since Jan 1, 1970: " + timeSince1970);

// quetion5

// let num = new Date();
// let hours = num.getHours();

// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// quetion 6

// let laterDate = new Date(2026, 12, 0);

// alert(laterDate);



  //  chap 35 to 38

  
//  quetion1
//   function showDateTime() {
//     let now = new Date();

//     let date = now.toDateString();
//     let time = now.toLocaleTimeString();

//     console.log("Date: " + date + "");
//     console.log("Time: " + time);
// }


// showDateTime();

// quetion2
// function createfullName( firstName, lastName){
//   let fullName = firstName + " " + lastName
//    return fullName

// }
// const user =createfullName ("sahad" , "ullah")
// alert( user)

// quetion 3

// function square(num) {
//     return num * num;
// }

// const result = square(6);
// alert(result);

// quetion4
// function factorial(n) {
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }

//     return result;
// }
// const output = factorial(6);
// alert(output);




// quetion5
// function countNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//         console.log(i + " ");
//     }
// }

// countNumbers(1, 10);


























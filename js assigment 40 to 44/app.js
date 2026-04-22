//    chap 38 to 42

// quetion1
// function power(a, b) {
//     let result = 1;
//     for (let i = 1; i <= b; i++) {
//         result *= a
//     }

//     return result;


// }
// console.log(power(1, 2))


// quetion2 
// function average(mark1,mark2,mark3){
//     return (mark1 + mark2 +  mark3) / 3
// }

// function percent( mark1,mark2,mark3){
//     let total = mark1+mark2+mark3
//     let maxmarks= 300
//     return (total / maxmarks) * 100

// }

// function main (){
//     let  mark1 = 80
//     let  mark2 = 76
//     let  mark3 = 90

//     let avg = average(mark1,mark2,mark3)
//     let per = percent(mark1,mark2,mark3)

//     console.log ("average =" + avg)
//     console.log("percent =" + per + "% ")

// }
// main();

// quetion3
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i
//         }
//     }
//     return -1 
// }

// console.log(customIndexOf("hello", "e"))
// console.log(customIndexOf("world", "z"))

//   quetion4

// function convertDistance(km) {
//     let meters = km * 1000;
//     let centimeters = km * 100000;
//     let inches = km * 39370.1;
//     let feet = km * 3280.84;

//     return {
//         meters: meters,
//         centimeters: centimeters,
//         inches: inches,
//         feet: feet
//     };
// }

// function main() {
//     let km = parseFloat(prompt("Enter distance in kilometers:"));

//     let result = convertDistance(km);

//     console.log("Distance in meters: " + result.meters);
//     console.log("Distance in centimeters: " + result.centimeters);
//     console.log("Distance in inches: " + result.inches);
//     console.log("Distance in feet: " + result.feet);

//     alert(
//         "Meters: " + result.meters +
//         "\nCentimeters: " + result.centimeters +
//         "\nInches: " + result.inches +
//         "\nFeet: " + result.feet
//     );
// }


// main();



// quetion5
// function calculateOvertimePay(hoursWorked) {
//     let overtimePay = 0

//     if (hoursWorked > 14) {
//         let overtimeHours = hoursWorked - 14;
//         overtimePay = overtimeHours * 12
//     }

//     return overtimePay;
// }


// function main() {
//     let hours = parseInt(prompt("Enter total hours worked:"));

//     let pay = calculateOvertimePay(hours);

//     console.log("Overtime Pay = Rs. " + pay);
//     alert("Overtime Pay = Rs. " + pay);
// }

// main();


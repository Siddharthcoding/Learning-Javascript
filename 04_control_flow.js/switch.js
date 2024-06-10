// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

// if 'break' is not written 
//all cases after the case being matched is run except default
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}
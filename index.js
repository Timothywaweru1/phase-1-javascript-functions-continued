// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
 
}
saturdayFun ();
function mondayWork (event = "go to the office") {
    return `This Monday, I will ${event}.`;
}
mondayWork ();


function wrapAdjective (mark = "*") {
    return function (adj = "special" ) {
        return `You are ${mark}${adj}${mark}!`
        
    }
}



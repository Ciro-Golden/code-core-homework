// Write a drawLine function that takes a number as an argument that returns that 
// number of horizontal bars (i.e. ━) as a string.

//    **  drawLine Function  **

function drawLine(number) { // Create a function called drawLine 
    let line = ""; // let the line = what ever number
    for (i = 0; i <= number; i++) { // Use a FOR LOOP incease value i++ 
        line += "━"; // line += how many times the line is executed.
    }
    return line; // Return line
}


//     ** drawTopBorder, drawMiddleBorder and drawBottomBorder Functions  **

function drawTopBorder(number) { // Create a function called drawTopBorder that takes in a #
    return "┏" + drawLine(number) + "┓" + "\n"; // returns (┏) and drawsLine depending on # and (┓)
}

function drawBottomBorder(number) { //Create a function called drawBottomBorder that takes in a #
    return "┗" + drawLine(number) + "┛" + "\n"; //returns (┗) and drawsLine depending on # and (┛)
}

function drawMiddleBorder(number) { //Create a function called drawMiddleBorder that takes in a #
    return "┣" + drawLine(number) + "┫" + "\n"; //returns (┣) and drawsLine depending on # and (┫)
}



//      **  drawBarsAround Function  **


// ** 
function wordSpace(number) { // create a function called wordSpace that will leave space for words inbetween
    space = ""; // space = " "  << space inbetween  ""
    for (i = 0; i < number; i++) { // FOR LOOP used  incrase by ++  
        space += " " // the amount of space inbetween " "
    }
    return space; // return the space  

    // ** WordSpace will be used for the next part to allow text to be shown 
    //   inbetween    "     "
}

function drawBarsAround(string, number) { // Create a function called drawBarsAround which takes in 
    // a string and a number.
    return "┃" + string + wordSpace(number) + "┃" + "\n"; // and will return a "┃" + string + amount of wordSpace(**) + "┃"
}


//    **  boxIt Function  ** 


function boxIt(array) {
    let boxed = ""

    let lineLength = 0
    for (each of array) {
        if (each.length > lineLength) {
            lineLength = each.length;
        }
    }

    if (array.length === 1) {
        boxed += (drawTopBorder(lineLength) +
            drawBarsAround(array[0]) +
            drawBottomBorder(lineLength));


    } else if (array.length === 2) {
        boxed += (drawTopBorder(lineLength) +
            drawBarsAround(array[0], (lineLength - array[0].length)) +
            drawMiddleBorder(lineLength) +
            drawBottomBorder(lineLength));
    } else if (array.length > 2) {
        for (let each of array) {


            // **  What ever is chosen in the 1st Array, will have a top & Side Borders     

            if (array.indexOf(each) === 0) {
                boxed += drawTopBorder(lineLength);
                if (each.length === lineLength) {
                    boxed += drawBarsAround(each);
                } else {
                    boxed += drawBarsAround(each, (lineLength - each.length));
                }

            }

            // **  What ever is last in the array, will make a bottomBorder and sides
            else if (array.indexOf(each) === (array.length - 1)) {
                if (each.length === lineLength) {
                    boxed += drawBarsAround(each);
                } else {
                    boxed += drawBarsAround(each, (lineLength - each.length));
                }
                boxed += drawBottomBorder(lineLength);
            }

            // What ever is in the middle of the array, will put borders all around.
            else {
                boxed += drawMiddleBorder(lineLength)
                if (each.length === lineLength) {
                    boxed += drawBarsAround(each);
                } else {
                    boxed += drawBarsAround(each, (lineLength - each.length));
                }
                boxed += drawMiddleBorder(lineLength);
            }
        }
    }
    return boxed;
}



console.log(boxIt(["John Snow", "Daenyrys Stormborn", "Tyrian Lannister"]));
console.log(boxIt(["John Snow", "Daenyrys Stormborn"]));
console.log(boxIt(["John Snow"]));
console.log(boxIt([""]));
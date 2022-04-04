// 2 robots land on an infinite 1 dimensional line. The goal is to know when the two robots can meet each other. They have simple programs, only a handful of commands, but receive the same command, run on same program. When they land, they land on their parachute. Their functions consist of: 
// moveLeft() moves left 1 space 
// moveRight() moves right 1 space
// noOperation() Does nothing
// checkPara() Check parachute will return a boolean depending if they are on their parachute.
// didWeMeet() Will return boolean depending on it they meet or run into each other


function meetRoboots() {
    // move 1 space to not stay on parachute
    moveLeft()
    // both will going to the left until One find the other parachute
    while (checkPara() == false) {
        moveLeft()
    }
    noOperation(); // both stop

    // while no meet, move to right, if you are not in parachute.
    while (didWeMeet() == false) {
        // check if you are on parachute, to stay stoped
        if (checkPara() == true) {
            noOperation();
        }
        // if you are not in parachute, go right
        else {
            moveRight();
        }
    }
    if (didWeMeet() == true){
        output = 
                "what's up buddy?\n
                - Do you want to hear a joke?\n
                - YES\n
                - How do doggy robots do?\n
                - They byte!"

        return console.log(output)

    }
    else{
        return console.log("we are lost in the infinity!!!!!!!!!!!!!!!!!!!!")
    }
}
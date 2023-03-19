// function that uses the speed argument to determine whether the speed is ok or receives points or the license gets suspended
function speedDeterminer (speed){
    if (speed < 70){
        return  console.log("Ok")
    }
    else if (speed > 70){
        let points = (speed-70)/5
        
        if (points < 12){
            return console.log(`Points: ${points}`)
        }
        else{
            return console.log(`license suspended`)
        }
    }
}

// function that receives the input from user then determines whether the input is a number or not
function speedDetector () {
    let input = prompt("tell me your speed: ")
    
    // while loop uses the isNaN method to determine whether the input is a number or not. If not, it asks the user again for the correcs input.
    while (isNaN(input)){
        input = prompt(`invalid input: `)
        
    }
    return speedDeterminer(input)
}
speedDetector()
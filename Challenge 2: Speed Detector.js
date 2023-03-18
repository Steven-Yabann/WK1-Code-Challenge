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


function speedDetector () {
    let input = prompt("tell me your speed: ")
    
    while (isNaN(input)){
        input = prompt(`invalid input: `)
        
    }
    return speedDeterminer(input)
}
speedDetector()
function grader(grade){
    if (grade > 79){
        return('A')
    }
    else if (grade >= 60){
        return('B')
    }
    else if (grade >= 49){
        return('C')
    }
    else if (grade >= 40){
        return('D')
    }
    else {
        return('E')
    }
}


function question(){
    let grade = prompt("what grade did you get? ")
    
    while (isNaN(grade)){
        grade = prompt("wrong input. Please enter valid input: ")
        
    }
    return grader(grade)
}
question()
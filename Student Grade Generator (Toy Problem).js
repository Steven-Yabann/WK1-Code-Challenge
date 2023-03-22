// function determines the grade if the student from his/her marks
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

// function that is declared to receive the input as marks and determines if the input is a number or not 
function question(){
    let grade = prompt("what grade did you get? ")
    
    while (isNaN(grade)){
        grade = prompt("wrong input. Please enter valid input: ")
        
    }
    return grader(grade)
}
question()
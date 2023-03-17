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
    let input = prompt("what grade did you get? ")
    let grade = parseInt(input)
    while (isNaN(grade)){
        let input2 = prompt("wrong input. Please enter valid input: ")
        let grade = parseInt(input2)
    }
    return grader(grade)
}

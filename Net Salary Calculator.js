// function that calculates the payee
function payeCalculator (grossSalary) {
    const personal_Relief = 2400
    const insurace_Relief = 5000
    const housing_Relief = 9000
    const PENSION_CONTRIBUTION = 20000
    const DISABILITY_EXEMPTION = 150000
    const OWNER_INTEREST = 25000

    //another function that determines other deductions to be removed from the gross salary by receiving further input from the user
    function taxablePaycalculator(grossSalary){
        let personalRelief = 0
        let insuraceRelief = 0
        let housingRelief = 0
        if (prompt(`do you have an insurance (y or n): `) === `y`){
            personalRelief = personal_Relief
            insuraceRelief = insurace_Relief
            housingRelief = housing_Relief
        }
        let pensionFundContribution = 0
        if (prompt(`do you have a pension fund contribution (y or n): `) === `y`){
            pensionFundContribution = PENSION_CONTRIBUTION
        }

        let disabilityExemption = 0
        if (prompt(`do you have a disability (y or n):`)=== `y`){
            disabilityExemption = DISABILITY_EXEMPTION
        }

        let ownerOccipierInterest = 0
        if (prompt(`do you have a mortgage (y or n): `) === `y`){
            ownerOccipierInterest = OWNER_INTEREST
        }

        const taxablePay = grossSalary - (personalRelief + insuraceRelief + housingRelief + pensionFundContribution + disabilityExemption + ownerOccipierInterest)
        return taxablePay
    }
    
    const taxablePay = taxablePaycalculator(grossSalary)

    if (taxablePay < 0){
        const paye = 0
        return paye
    }
    else if (taxablePay < 24000){
        const paye = taxablePay * 0.1
        return paye
    }
    else if (taxablePay <= 32333){
        const paye = taxablePay * 0.25
        return paye
    }    
    else if (taxablePay > 32333){
        const paye = taxablePay * 0.3
        return paye
    }

}

// function that calculates the NHIF deduction using the gross salary input
function NHIF_calculator (grossSalary) {
    if (grossSalary <= 5999){
        const deduction = 150
        return deduction
    }
    else if (grossSalary <= 7999){
        const deduction = 300
        return deduction
    }
    else if (grossSalary <= 11999){
        const deduction = 400
        return deduction
    }else if (grossSalary <= 14999){
        const deduction = 500
        return deduction
    }else if (grossSalary <= 19999){
        const deduction = 600
        return deduction
    }else if (grossSalary <= 24999){
        const deduction = 750
        return deduction
    }else if (grossSalary <= 29999){
        const deduction = 850
        return deduction
    }else if (grossSalary <= 34999){
        const deduction = 900
        return deduction
    }else if (grossSalary <= 39999){
        const deduction = 950
        return deduction
    }else if (grossSalary <= 44999){
        const deduction = 1000
        return deduction
    }else if (grossSalary <= 49999){
        const deduction = 1100
        return deduction
    }else if (grossSalary <= 59999){
        const deduction = 1200
        return deduction
    }else if (grossSalary <= 69999){
        const deduction = 1300
        return deduction
    }else if (grossSalary <= 79999){
        const deduction = 1400
        return deduction
    }else if (grossSalary <= 89999){
        const deduction = 1500
        return deduction
    }else if (grossSalary <= 99999){
        const deduction = 1600
        return deduction
    }else{
        const deduction = 1700
        return deduction
    }
}

// function that calculates the NSSF deduction from the gross salary
function nssfCalculator(grossSalary){
    const nssfMax = 2160
    let nssf
    if (grossSalary < 18000){
        nssf = grossSalary*0.06
        return nssf
    }
    else{
        nssf = nssfMax
        return nssf
    }
}

// function that receives the basic salary and benefits from the user and calls all of the above functions to calculates the various deductions
function taxCalculator(){
    let salary = prompt(`tell me your salary: `)
    let benefits = prompt(`tell me your benefits: `)
    let grossSalary = parseInt(salary) + parseInt(benefits)

    while (isNaN(salary) & isNaN(benefits)){
        salary = prompt(`invalid input. Your Salary: `)
        benefits = prompt(`invalid input. Your Benefits:  `)
        grossSalary = parseInt(salary) + parseInt(benefits)

    }
    let paye = payeCalculator(grossSalary)
    let deduction = NHIF_calculator(grossSalary)
    let nssf = nssfCalculator(grossSalary)
    
    //anonymous function that calulates the net salary
    let netSalary = (grossSalary) => { 
        return grossSalary-nssf-deduction-paye}

    console.log ("your gross salary, " + grossSalary)
    console.log ("your PAYE, " + paye);
    console.log ("your NHIF contribution, " + deduction)
    console.log ("your nssf, " + nssf)
    console.log ("your net salary, " + netSalary(grossSalary))

    
}
taxCalculator()


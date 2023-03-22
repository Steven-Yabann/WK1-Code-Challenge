# WK1-Code-Challenge
STUDENT GRADE GENERATOR.
-I've created a function called grader that receives an argument of the student's marks and uses the if conditional statement to calculates his/her grades. In addition, I've created another function that now receives the input from the user that ensures the user is a number.

SPEED DETECTOR (TOY PROBLEM)
-This is a program that receives the speed of the driver and by using the if conditional statement, calculates whether his/her speed is below 70 in which the reply is ok and above that, gets assigned points in which the max is 12 points. If the driver surpasses the limit, the license gets suspended.

NET SALARY CALCULATOR
-This program receives two inputs from the user: Basic salary and their benefits in which it is used to calculate their gross salary, payee, NHIF-deductions, NSSF-deduction and net salary.
-There are 4 functions for each of the outputs needed:
    -payee(taxes)
    -NHIF deduction
    -NSSF deductions
    -net salary
-The payee function takes in gross salary as the argument and further receives more info from the user to remove some deductions like the disability exemption then subtracts it from the GS (gross salary) to calculate the payee.
-the NHIF-deduction receives the GS as an argument then using if conditionals, returns the deductions
-the NSSF-deduction is a function uses the GS argument to calculate the deduction. Below sh.18,000, 6% of the salary is used to calculate the deduction while above the sh.18,000, the deduction is 2160
-In net salary, it deducts all of the above from the GS and returns the remainder.
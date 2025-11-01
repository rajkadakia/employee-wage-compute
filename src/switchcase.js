const prompt = require('prompt-sync')({ sigint: true });

function switchWage() {
    const wagePerHour = 20;

    console.log("\n=== Wage Calculation Using Switch Case ===");

    
    let hoursWorked;
    do {
        let input = prompt("Enter number of hours worked today (1-8): ");
        hoursWorked = parseInt(input, 10);

        if (isNaN(hoursWorked) || hoursWorked < 1 || hoursWorked > 8) {
            console.log("Invalid input! Enter a number between 1 and 8.");
        }
    } while (isNaN(hoursWorked) || hoursWorked < 1 || hoursWorked > 8);

    let employeeType;
    let wage;

    switch (hoursWorked) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            employeeType = "Part-Time";
            wage = wagePerHour * hoursWorked;
            break;
        case 8:
            employeeType = "Full-Time";
            wage = wagePerHour * hoursWorked;
            break;
    }

    console.log(`Employee Type: ${employeeType}`);
    console.log(`Hours Worked: ${hoursWorked}`);
    console.log(`Wage per Hour: ₹${wagePerHour}`);
    console.log(`Employee Daily Wage: ₹${wage}`);
    console.log("===========================\n");
}



module.exports = switchWage;

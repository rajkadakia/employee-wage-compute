const prompt = require('prompt-sync')({ sigint: true });

class EmployeeWage {
    constructor(wagePerHour, fullDayHours = 8) {
        this.wagePerHour = wagePerHour;
        this.fullDayHours = fullDayHours;
    }

    computeWage(hoursWorked) {
        let employeeType = hoursWorked === this.fullDayHours ? "Full-Time" : "Part-Time";
        let wage = hoursWorked * this.wagePerHour;
        return { employeeType, hoursWorked, wage };
    }
}

function classWage() {
    console.log("\n=== Employee Wage Using Class ===");

    const wagePerHour = 20;
    const emp = new EmployeeWage(wagePerHour);

    let hoursWorked;
    do {
        hoursWorked = parseInt(prompt("Enter hours worked today (1-8): "), 10);
        if (isNaN(hoursWorked) || hoursWorked < 1 || hoursWorked > 8) {
            console.log("Invalid input! Enter a number between 1 and 8.");
        }
    } while (isNaN(hoursWorked) || hoursWorked < 1 || hoursWorked > 8);

    const result = emp.computeWage(hoursWorked);

    console.log(`\nEmployee Type: ${result.employeeType}`);
    console.log(`Hours Worked: ${result.hoursWorked}`);
    console.log(`Daily Wage: ₹${result.wage}`);
    console.log("===========================\n");
}

classWage();

module.exports = classWage;

const prompt = require('prompt-sync')({ sigint: true });

function conditionalWage() {
    const wagePerHour = 20;
    const maxHours = 100;
    const maxDays = 20;

    console.log("\n=== Conditional Wage Calculation ===");

    let totalHours = 0;
    let totalDays = 0;

    while (!(totalHours >= maxHours && totalDays >= maxDays)) {
        let hoursWorked;
        do {
            hoursWorked = parseInt(prompt(`Enter hours worked for day ${totalDays + 1} (1-8): `), 10);
            if (isNaN(hoursWorked) || hoursWorked < 1 || hoursWorked > 8) {
                console.log("Invalid input! Enter a number between 1 and 8.");
            }
        } while (isNaN(hoursWorked) || hoursWorked < 1 || hoursWorked > 8);

        totalHours += hoursWorked;
        totalDays++;
    }

    const totalWage = totalHours * wagePerHour;
    const employeeType = totalHours / totalDays === 8 ? "Full-Time" : "Part-Time";

    console.log("\n=== Final Employee Wage Summary ===");
    console.log(`Employee Type: ${employeeType}`);
    console.log(`Total Days Worked: ${totalDays}`);
    console.log(`Total Hours Worked: ${totalHours}`);
    console.log(`Total Wage: ₹${totalWage}`);
    console.log("===========================\n");
}

conditionalWage();

module.exports = conditionalWage;

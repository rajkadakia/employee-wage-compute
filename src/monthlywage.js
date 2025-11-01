const prompt = require('prompt-sync')({ sigint: true });

function monthlyWage() {
    const wagePerHour = 20;

    console.log("\n=== Monthly Employee Wage ===");

    
    let dailyHours;
    do {
        dailyHours = parseInt(prompt("Enter daily working hours (1-8): "), 10);
        if (isNaN(dailyHours) || dailyHours < 1 || dailyHours > 8) {
            console.log("Invalid input! Enter a number between 1 and 8.");
        }
    } while (isNaN(dailyHours) || dailyHours < 1 || dailyHours > 8);

    
    let daysWorked;
    do {
        daysWorked = parseInt(prompt("Enter number of days worked in month: "), 10);
        if (isNaN(daysWorked) || daysWorked < 1 || daysWorked > 31) {
            console.log("Invalid input! Enter a positive number up to 31.");
        }
    } while (isNaN(daysWorked) || daysWorked < 1 || daysWorked > 31);

    const dailyWage = dailyHours * wagePerHour;
    const monthlyWage = dailyWage * daysWorked;

    const employeeType = dailyHours === 8 ? "Full-Time" : "Part-Time";

    console.log(`Employee Type: ${employeeType}`);
    console.log(`Daily Hours Worked: ${dailyHours}`);
    console.log(`Days Worked: ${daysWorked}`);
    console.log(`Wage per Hour: ₹${wagePerHour}`);
    console.log(`Daily Wage: ₹${dailyWage}`);
    console.log(`Monthly Wage: ₹${monthlyWage}`);
    console.log("===========================\n");
}



module.exports = monthlyWage;

const prompt = require('prompt-sync')({ sigint: true });

function dailyWage() {
    const wagePerHour = 20;
    const defaultHours = 8;
    let workingHours;

    console.log("\n=== Daily Employee Wage ===");

   
    do {
        let input = prompt(`Enter number of hours worked today (default ${defaultHours}): `);

        
        if (input.trim() === "") {
            workingHours = defaultHours;
            console.log(`No input detected. Assuming full day: ${defaultHours} hours.`);
        } else {
            workingHours = parseInt(input, 10);
            if (isNaN(workingHours) || workingHours <= 0) {
                console.log("Invalid input! Enter a positive number.");
            }
        }
    } while (isNaN(workingHours) || workingHours <= 0);

    const wage = wagePerHour * workingHours;

    console.log("Daily working hours: " + workingHours);
    console.log("Wage per Hour: ₹" + wagePerHour);
    console.log("Employee Daily wage: ₹" + wage);
    console.log("===========================\n");
}



module.exports = dailyWage;

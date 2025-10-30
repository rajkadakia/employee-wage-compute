const prompt = require('prompt-sync')({ sigint: true });

function partTimeWage() {
    const wagePerHour = 20;
    const fullDayHours = 8;
    const partTimeDefaultHours = 4; 
    let workingHours;

    console.log("\n=== Part-Time Employee Wage ===");

    
    let typeInput;
    do {
        typeInput = prompt("Is the employee full-time (F) or part-time (P)? [Default: P]: ").trim().toUpperCase();
        if (typeInput === "") typeInput = "P"; 
        if (typeInput !== "F" && typeInput !== "P") {
            console.log("Invalid input! Enter 'F' for full-time or 'P' for part-time.");
        }
    } while (typeInput !== "F" && typeInput !== "P");

    if (typeInput === "F") {
        workingHours = fullDayHours;
        console.log(`Full-Time Employee. Hours Worked: ${workingHours}`);
    } else {
        
        do {
            let input = prompt(`Enter number of hours worked today (default ${partTimeDefaultHours}): `);
            if (input.trim() === "") {
                workingHours = partTimeDefaultHours;
                console.log(`No input detected. Assuming ${workingHours} hours.`);
            } else {
                workingHours = parseInt(input, 10);
                if (isNaN(workingHours) || workingHours <= 0) {
                    console.log("Invalid input! Enter a positive number.");
                }
            }
        } while (isNaN(workingHours) || workingHours <= 0);
    }

    const wage = wagePerHour * workingHours;

    console.log(`Employee Type: ${typeInput === "F" ? "Full-Time" : "Part-Time"}`);
    console.log(`Hours Worked: ${workingHours}`);
    console.log(`Wage per Hour: ₹${wagePerHour}`);
    console.log(`Employee Daily Wage: ₹${wage}`);
    console.log("===========================\n");
}

partTimeWage();

module.exports = partTimeWage;

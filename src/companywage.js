const prompt = require("prompt-sync")({ sigint: true });

class EmployeeWage {
    computeWage(company, wagePerHour, maxDays, maxHours) {
        let totalHours = 0;
        let totalDays = 0;

        console.log(`\n--- Enter work details for ${company} ---`);

        while (totalDays < maxDays && totalHours < maxHours) {
            totalDays++;
            let hoursWorked = parseInt(prompt(`Enter hours worked on day ${totalDays}: `));

            if (isNaN(hoursWorked) || hoursWorked < 0) {
                console.log("Invalid input. Try again.");
                totalDays--;
                continue;
            }

            if (totalHours + hoursWorked > maxHours) {
                console.log("Max monthly hours reached. Stopping input.");
                break;
            }

            if (hoursWorked < 8) {
                console.log(`Day ${totalDays}: Part-time employee (Worked ${hoursWorked} hrs)`);
            } else if (hoursWorked === 8) {
                console.log(`Day ${totalDays}: Full-time employee (Worked ${hoursWorked} hrs)`);
            } else {
                console.log(`Day ${totalDays}: Overtime employee (Worked ${hoursWorked} hrs)`);
            }

            totalHours += hoursWorked;
        }

        const totalWage = totalHours * wagePerHour;

        console.log(`\n --- Summary for ${company} ---`);
        console.log(`Total Working Days: ${totalDays}`);
        console.log(`Total Working Hours: ${totalHours}`);
        console.log(`Wage per Hour: ₹${wagePerHour}`);
        console.log(`Total Wage: ₹${totalWage}`);
        console.log("--------------------------------------------");

        return { company, totalDays, totalHours, totalWage };
    }
}

// This is the wrapper function you’ll call from main.js
function runCompanyWage() {
    const empWage = new EmployeeWage();
    const numCompanies = parseInt(prompt("Enter number of companies: "));

    for (let i = 1; i <= numCompanies; i++) {
        console.log(`\n--- Company ${i} ---`);
        const company = prompt("Enter company name: ");
        const wagePerHour = parseInt(prompt("Enter wage per hour: "));
        const maxDays = parseInt(prompt("Enter max working days: "));
        const maxHours = parseInt(prompt("Enter max working hours: "));

        empWage.computeWage(company, wagePerHour, maxDays, maxHours);
    }
}

module.exports = runCompanyWage;

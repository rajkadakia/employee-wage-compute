// main.js
const prompt = require("prompt-sync")({ sigint: true });

// Import all use cases
const usecase1 = require("./src/attendance.js");
const usecase2 = require("./src/dailywage.js");
const usecase3 = require("./src/parttimewage.js");
const usecase4 = require("./src/switchcase.js");
const usecase5 = require("./src/monthlywage.js");
const usecase6 = require("./src/conditionalcompute.js");
const usecase7 = require("./src/classwage.js");
const usecase8 = require("./src/companywage.js");

console.log("===========================================");
console.log("   Welcome to Employee Wage Computation   ");
console.log("===========================================");

let exit = false;

while (!exit) {
  console.log(`
-------------------------------------------
Select a Use Case to Run:
1. Check Employee Presence
2. Calculate Daily Employee Wage
3. Add Part Time Employee & Wage
4. Using Switch Case
5. Calculating Wages for a Month
6. Calculate Wages till condition (100 hours & 20 days)
7. Store daily wages using class
8. Employee Wage for Multiple Companies
9. Exit
-------------------------------------------
  `);

  const choice = parseInt(prompt("Enter your choice (1-9): "));

  switch (choice) {
    case 1:
      usecase1();
      break;
    case 2:
      usecase2();
      break;
    case 3:
      usecase3();
      break;
    case 4:
      usecase4();
      break;
    case 5:
      usecase5();
      break;
    case 6:
      usecase6();
      break;
    case 7:
      usecase7();
      break;
    case 8:
      usecase8();
      break;
    case 9:
      console.log("\n Exiting Employee Wage Computation. Goodbye!\n");
      exit = true;
      break;
    default:
      console.log(" Invalid choice. Please enter a number between 1 and 9.");
  }

  if (!exit) {
    prompt("\nPress Enter to continue...");
  }
}

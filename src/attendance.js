function employeeattendance(){
    const present = Math.random() < 0.6;

    console.log("=== Employee Attendance ===");

    if(present){
        console.log("employee is present");
    }
    else{
        console.log("employee is absent");
    }
    console.log("===========================\n");
}

module.exports=employeeattendance;
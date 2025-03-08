// Ask the user if they want to create a matrix
let choice = prompt("Do you want to create a matrix? (yes/no)");

if (choice !== "yes") {
    console.log("Thank you, re-run the program if you change your mind.");
} else {
    // Ask for 3 numbers (limits for nested loops)
    let limit1 = parseInt(prompt("Enter limit for first loop: ")); // Number of big sections
    let limit2 = parseInt(prompt("Enter limit for second loop: ")); // Rows (up to down)
    let limit3 = parseInt(prompt("Enter limit for third loop: ")); // Columns (left to right)

    // Ask for 3 symbols (characters to print)
    let str1 = prompt("Enter first symbol: ");
    let str2 = prompt("Enter second symbol: ");
    let str3 = prompt("Enter third symbol: ");

    let strings = [str1, str2, str3];

    console.log("\nGenerated Matrix:\n");

    // First loop (big sections)
    for (let i = 0; i < limit1; i++) {
        // Second loop (rows - up to down)
        for (let j = 0; j < limit2; j++) {
            let row = "";
            // Third loop (columns - left to right)
            for (let k = 0; k < limit3; k++) {
                row += strings[k % 3] + " "; // Add symbols with spaces and it will put in row
            }

            console.log(row.trim()); // Print the row (trim removes extra space at the end)
        }

        console.log(""); // Add a blank line between big sections
    }
}

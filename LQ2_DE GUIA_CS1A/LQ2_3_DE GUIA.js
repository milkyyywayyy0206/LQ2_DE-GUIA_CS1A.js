// print the Items
console.log("A.Pepsi Cola \nB.Coca Cola \nC.Apple (per kg) \nD.Orange (per kg) \nE.Hotdogs (per kg)");

// prompt the user to enter the item choice and quantity
let item_choice = prompt("Enter your choice (A|B|C|D|E): ");
let QTY = parseInt(prompt("Enter the quantity: "));
let price = null;

// calculate the price based on the item choice
switch (item_choice) {
    case "A":
        price = QTY * 15;
        break;
    case "B":
        price = QTY * 20;
        break;
    case "C":
        price = QTY * 100;
        break;
    case "D":
        price = QTY * 80;
        break;
    case "E":
        price = QTY * 120;
        break;
    default:
        alert("No matching item! Try to re-run the program.");
}

if (price !== null) {
    alert(`The Total Price of the order ${item_choice} x ${QTY}: ${price}`);
}
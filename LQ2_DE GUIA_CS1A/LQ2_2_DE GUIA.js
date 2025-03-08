// propmt the user to enter the breed of their dog
let dog_breed = prompt("Enter the breed of your dog: ");
let print_count = parseInt(prompt("Enter the number of times you want to print the breed: "));

// print the breed of the dog the number of times the user entered
for (let i = 0 ; i < print_count ; i++) {
    console.log(dog_breed);
}

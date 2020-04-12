var age = prompt("Enter your age:");
if (age<0) {
    alert("Age can't be negative!");
}
else if (age < 21) {
    alert("You can't drink! You are underage!");
}
else if (age == 21) {
    alert("Happy 21st birthday!");
}
else if (age > 21) {
    alert("Let's have a drink!");
}
if (age%2 != 0) {
    alert("Your age is odd!");
}
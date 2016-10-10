rating = prompt("How much do you like this teacher? Enter any number between 1 to 5 ( 5 = highest, 1 = lowest )", 3);
if (rating < 1 || rating > 5) throw new Error("Enter only 1-5! Please run the script again!");
for (i = 0; i <= 23; i++) {
    rand = ((Math.floor(Math.random() * 10)) % 3) + (5 - rating - 1);
    if (rand > 5) rand = 5;
    if (rand < 1) rand = 1;
    document.getElementById("RBL" + i + "_" + rand).checked = true;
};
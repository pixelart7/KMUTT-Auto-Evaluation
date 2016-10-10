rating = prompt("How much do you like this teacher? Enter any number between 1 to 5 ( 5 = highest, 1 = lowest ), or 0 for no comment (TA/LF Section)", 3);
if (rating < 0 || rating > 5) throw new Error("Enter only 1-5 or 0! Please run the script again!");
var t = 0;
for (i = 0; i <= 99; i++) {
    rand = Math.floor(10 * Math.random()) % 3 + (a - 1);
    if (rand > 5) rand = 5;
    if (rand < 1) rand = 1;
    if (0 == rating) rand = 0;
    if (22 == i) t = rand;
    if (23 == i) rand = t + Math.floor(10 * Math.random() % 2);
    [].slice.call(document.getElementsByName("score" + i)).forEach(function(e) {
        if (rand == e.value) e.checked = true
    })
}
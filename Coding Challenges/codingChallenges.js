//Coding Challenge #1
let markBMI = 78 / 1.69 ** 2;
let johnBMI = 92 / (1.95 * 1.95);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//Coding Challenge #2
if (markHigherBMI = true) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`)
};

//Coding Challenge #1 Basic JS part 2
const calcAverage = (scr1, scr2, scr3) => {
    return (scr1 + scr2 + scr3) / 3;
}

let Dolphins = calcAverage(85, 54, 41);
let Koalas = calcAverage(23, 34, 27);
console.log(Dolphins, Koalas);

function checkWinner(team1, team2) {
    if (team1 >= (team2 * 2)) {
        console.log(`Dolphins win (${team1} vs ${team2})`)
    } else if (team2 >= (team1 * 2)) {
        console.log(`Koalas win (${team2} vs ${team1})`)
    } else {
        console.log("There was no winner")
    }
}
console.log(checkWinner(Dolphins, Koalas));

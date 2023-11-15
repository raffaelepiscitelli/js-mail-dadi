let cpuRandomNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuRandomNumber + " CPU'S NUMBER");

let playerRandomNumber = Math.floor(Math.random() * 6) + 1;
console.log(playerRandomNumber + " PLAYER'S NUMBER");

if (cpuRandomNumber > playerRandomNumber) {
    console.log("CPU WIN!");
}

else if (cpuRandomNumber < playerRandomNumber) {
    console.log("YOU WIN!");
}

else if (cpuRandomNumber === playerRandomNumber) {
    console.log("EVEN");
}
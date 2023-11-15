const cpuRandomNumber = Math.floor(Math.random() * 6) + 1 + " CPU NUMBER";
console.log(cpuRandomNumber);

const playerRandomNumber = Math.floor(Math.random() * 6) + 1 + " PLAYER NUMBER";
console.log(playerRandomNumber);

if (cpuRandomNumber > playerRandomNumber) {
    console.log("CPU WIN!")
}

else if (cpuRandomNumber < playerRandomNumber) {
    console.log("YOU WIN!")
}

else if (cpuRandomNumber === playerRandomNumber) {
    console.log("EVEN")
}
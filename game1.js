import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Opponent",
    choices: ["skeleton", "Assassin", "Zombie"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
// skeleton
do {
    if (opponent.select == "skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your option",
            choices: ["Attack", "DrinkPortion", "Run for your life..."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.red.bold.italic("You Loose Better Luck NExt Time"));
                process.exit();
            }
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold.italic("You loose better luck next time"));
                process.exit();
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "DrinkPortion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life...") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green("You loose better luck next time"));
            process.exit();
        }
    }
    // Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your option",
            choices: ["Attack", "DrinkPortion", "Run for your life..."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.red.bold.italic("You Loose Better Luck NExt Time"));
                process.exit();
            }
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold.italic("You loose better luck next time"));
                process.exit();
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "DrinkPortion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life...") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green("You loose better luck next time"));
            process.exit();
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your opponent",
            choices: ["Attack", "DrinkPortion", "Run for your life..."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.red.bold.italic("You Loose Better Luck NExt Time"));
                process.exit();
            }
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold.italic("You loose better luck next time"));
                process.exit();
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "DrinkPortion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life...") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green("You loose better luck next time"));
            process.exit();
        }
    }
} while (true);

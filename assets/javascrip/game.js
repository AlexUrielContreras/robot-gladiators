let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

let playerMoney = 10;

let fight = function() {
    // Alerts players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Alerts players 
    let promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'Fight or Skip to choose.");

    if (promptFight === 'fight' || promptFight === "FIGHT") {

    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
    
    // Log a resulting message to the console so we know that it worked
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`)
   
     // Checks enemy's health
        if (enemyHealth <= 0 ) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left`)
        }

    // Subtract the value `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;    
    
          // Check our robot's health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(`${playerName} stil has ${playerHealth} health left.`);
        }
    // Log a resulting message to the console se we know that it worked
      
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
        } else if (promptFight === "skip" || promptFight === "SKIP"){
        // Confirm player want to skip 
        let confirmSkip = window.confirm("Are you sure you'd like to quit?")
        // if yes leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerMoney for skipping 
        playerMoney = playerMoney - 2;
        } else {
            fight();
        }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
   

};



fight();
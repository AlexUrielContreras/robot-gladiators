let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;



let fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        let confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = Math.max(0, playerMoney - 10);
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      let damage = randomNumber(playerAttack - 3, playerAttack);
      enemyHealth = Math.max(0, enemyHealth - damage);
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      damage = randomNumber(enemyAttack - 3, enemyAttack);
      
      playerHealth = Math.max(0, playerHealth - damage);
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };

// Calls the fight function into a for loop
let startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for(var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " +  ( i + 1 ));
      let pickedEnemeyName = enemyNames[i];
      enemyHealth = randomNumber(40, 60);
      fight(pickedEnemeyName);
      if (playerHealth > 0 && i < enemyNames.length - 1){
        let storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have Lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
}

let endGame = function () {
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
} else {
    window.alert("You've lost your robot in battle.")
  }
  let playAgainConfirm = window.confirm("Would you like to play again");

  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}

let shop = function() {
  // Asked the player what they'd like to do
  let shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice"
    );
  switch (shopOptionPrompt){
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollors.");
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You dont have enough money!")
      }
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.")
      break;
    default:
      window.alert("You did no pick a valid option. Try again.");
      shop();
      break;
  } 

}

let randomNumber = function(min, max){
  let value = Math.floor(Math.random() * (max - min + 1 ) + min);

  return value;
};

// Starts the game when the page loads 
startGame()
let fightOrSkip =function() {
  // asked player if they'd like to fight or skip using fightOrSkip function
  let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose.");
  promptFight = promptFight.toLowerCase();
  if (promptFight === "" || promptFight === null){
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  if (promptFight === "skip") {
    let confirmSkip = window.confirm("Are you sure you would like to skip?");
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      return true;
    }
  }
}

let fight = function(enemy) {
  let isPlayerTurn = true;
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
    while (playerInfo.health > 0 && enemy.health > 0) {
      
      if (fightOrSkip()) {
        break;
      }
      
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
       playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemy.attack variable
      damage = randomNumber(enemy.attack - 3, enemy.attack);
      
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
      isPlayerTurn = !isPlayerTurn;
    }
  };

// Calls the fight function into a for loop
let startGame = function() {
  playerInfo.reset();
  for(var i = 0;i < enemyInfo.length; i++){
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " +  ( i + 1 ));
      let pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      fight(pickedEnemyObj);
      if (playerInfo.health > 0 && i < enemyInfo.length - 1){
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
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " +playerInfo.money + ".");
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
  shopOptionPrompt = parseInt(shopOptionPrompt);
  switch (shopOptionPrompt){
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
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

let getPlayerName = function() {
  let name = "";
  while (name === "" || name === null){
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};

let playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10, 
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10; 
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7){
      window.alert("refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }else{
      window.alert("You dont have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7){
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }else{
      window.alert("You dont have enough money!");
    }
  }
};

let enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name:"Robo Trumble",
    attack: randomNumber(10, 14)
  }
];


// Starts the game when the page loads 
startGame()
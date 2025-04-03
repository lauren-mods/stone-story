let brainsModifier = 0; // Default value
let brawnModifier = 0; // Default value
let instinctModifier = 0; // Default value
// Assigning modifiers based on the chosen attribute

const attributes = ["Brains", "Brawn", "Instinct"];
console.log(attributes);

function getChosenAttribute() {
   let chosenAttribute = prompt("Choose an attribute: Brains, Brawn, or Instinct").trim();
   while (!attributes.includes(chosenAttribute)) {
       console.log("Invalid attribute. Please choose Brains, Brawn, or Instinct.");
       chosenAttribute = prompt("Choose an attribute: Brains, Brawn, or Instinct").trim();
   }
    return chosenAttribute;
}

let chosenAttribute = getChosenAttribute(); // Prompt the user for an attribute
console.log(`You chose: ${chosenAttribute}`);


if (chosenAttribute) {
    chosenAttribute = chosenAttribute.trim(); // Remove extra spaces
    if (attributes.includes(chosenAttribute)) {
        console.log(`You chose: ${chosenAttribute}`);
    } else {
        console.log("Invalid attribute chosen. Please choose Brains, Brawn, or Instinct.");
    }
} else {
    console.log("No attribute chosen.");
}

if (chosenAttribute === "Brains") {
    brainsModifier = 2;
    } else if (chosenAttribute === "Brawn") {
    brawnModifier = 2;
    } else if (chosenAttribute === "Instinct") {
    instinctModifier = 2;
    } else {
    console.log("Invalid attribute chosen.");
    };

const outcomes = ["Good", "Bad", "Neutral"];
console.log(outcomes);

function rollD6() {
  return Math.floor(Math.random() * 6) + 1; // Returns a random number between 1 and 6
};

let diceRoll = rollD6();
let brainsRoll = rollD6() + brainsModifier;
let brawnRoll = rollD6() + brawnModifier;
let instinctRoll = rollD6() + instinctModifier;


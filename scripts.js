const attributeSet = ["Brains", "Brawn", "Instinct"];
let brainsModifier = 0;
let brawnModifier = 0;
let instinctModifier = 0;

function selectPrimaryAttribute(primaryAttribute) {
    if (attributeSet.includes(primaryAttribute)) {
        document.getElementById("primaryAttribute").innerText = `You chose: ${primaryAttribute}`;
        document.getElementById("primaryAttributeSelection").style.display = "none"; //this hides the selection box

        if (primaryAttribute === "Brains") {
            brainsModifier = 1;
        }
        else if (primaryAttribute === "Brawn") {
            brawnModifier = 1;
        }
        else if (primaryAttribute === "Instinct") {
            instinctModifier = 1;
        }
        document.getElementById("modifierScores").innerText = `Your current modifiers are: Brains: ${brainsModifier}, Brawn: ${brawnModifier}, Instinct: ${instinctModifier}`;
    } else {
        document.getElementById("primaryAttribute").innerText = "Invalid attribute. Please try again.";
    }
}


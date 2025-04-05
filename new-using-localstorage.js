// Declare global variables to store the modifiers
let brainsModifier = -1;
let brawnModifier = -1;
let instinctModifier = -1;

// Function to handle primary attribute selection
function selectPrimaryAttribute(primaryAttribute) {
    // Set the modifier to 2 for the primary attribute (set to -1 initially)
    if (primaryAttribute === "Brains") {
        brainsModifier = 2;
    } else if (primaryAttribute === "Brawn") {
        brawnModifier = 2;
    } else if (primaryAttribute === "Instinct") {
        instinctModifier = 2;
    }

    // Save to localStorage
    localStorage.setItem("primaryAttribute", primaryAttribute);
    localStorage.setItem("brainsModifier", brainsModifier);
    localStorage.setItem("brawnModifier", brawnModifier);
    localStorage.setItem("instinctModifier", instinctModifier);

    // Update UI
    document.getElementById("primaryAttribute").innerText = `You chose: ${primaryAttribute}`;
    document.getElementById("primaryAttributeSelection").style.display = "none"; // Hide selection box

    // Show secondary attribute options
    showSecondaryAttributeOptions();
}

// Function to handle secondary attribute selection
function selectSecondaryAttribute(secondaryAttribute) {
    // Set the modifier to 1 for the secondary attribute
    if (secondaryAttribute === "Brains") {
        brainsModifier = 1;
    } else if (secondaryAttribute === "Brawn") {
        brawnModifier = 1;
    } else if (secondaryAttribute === "Instinct") {
        instinctModifier = 1;
    }

    // Save to localStorage
    localStorage.setItem("secondaryAttribute", secondaryAttribute);

    // Update UI
    document.getElementById("secondaryAttribute").innerText = `You chose: ${secondaryAttribute}`;
    document.getElementById("secondaryAttributeSelection").style.display = "none"; // Hide secondary selection box

    // After selecting secondary, the tertiary attribute will automatically be assigned
    assignTertiaryAttribute();
}

// Function to assign the tertiary attribute (the one that was not chosen)
function assignTertiaryAttribute() {
    // The tertiary attribute is the one not selected as primary or secondary
    const selectedAttributes = [localStorage.getItem("primaryAttribute"), localStorage.getItem("secondaryAttribute")];
    const allAttributes = ["Brains", "Brawn", "Instinct"];

    // Find the tertiary attribute (the one not chosen as primary or secondary)
    const tertiaryAttribute = allAttributes.find(attr => !selectedAttributes.includes(attr));

    // Set its modifier to -1 (as default)
    if (tertiaryAttribute) {
        localStorage.setItem("tertiaryAttribute", tertiaryAttribute);
        localStorage.setItem("tertiaryModifier", -1);
    }
}

// Function to display the primary attribute selection
function showPrimaryAttributeOptions() {
    const container = document.createElement("div");
    container.id = "primaryAttributeSelection";
    container.innerHTML = `<p>Choose your primary attribute:</p>`;

    const attributeSet = ["Brains", "Brawn", "Instinct"];
    attributeSet.forEach(attr => {
        const btn = document.createElement("button");
        btn.innerText = attr;
        btn.onclick = () => selectPrimaryAttribute(attr);
        container.appendChild(btn);
    });

    document.body.appendChild(container);
}

// Function to display the secondary attribute options
function showSecondaryAttributeOptions() {
    const container = document.createElement("div");
    container.id = "secondaryAttributeSelection";
    container.innerHTML = `<p>Now choose your <strong>secondary</strong> attribute:</p>`;

    const attributeSet = ["Brains", "Brawn", "Instinct"];
    const primaryAttribute = localStorage.getItem("primaryAttribute"); // Get primary attribute from localStorage
    attributeSet
        .filter(attr => attr !== primaryAttribute)  // Remove primary attribute from options
        .forEach(attr => {
            const btn = document.createElement("button");
            btn.innerText = attr;
            btn.onclick = () => selectSecondaryAttribute(attr);
            container.appendChild(btn);
        });

    document.body.appendChild(container);
}

// Function to display the current modifiers on the page
function displayModifiers() {
    document.getElementById("modifierScores").innerText = `Your current modifiers are: 
    Brains: ${brainsModifier}, Brawn: ${brawnModifier}, Instinct: ${instinctModifier}`;
}

// On page load, retrieve saved data from localStorage and load it
window.onload = function () {
    const savedPrimary = localStorage.getItem("primaryAttribute");
    const savedSecondary = localStorage.getItem("secondaryAttribute");
    const savedTertiary = localStorage.getItem("tertiaryAttribute");

    // Retrieve the saved modifiers from localStorage
    const savedBrainsModifier = localStorage.getItem("brainsModifier");
    const savedBrawnModifier = localStorage.getItem("brawnModifier");
    const savedInstinctModifier = localStorage.getItem("instinctModifier");

    // Set the modifiers based on saved values
    if (savedBrainsModifier !== null) {
        brainsModifier = parseInt(savedBrainsModifier);
    }
    if (savedBrawnModifier !== null) {
        brawnModifier = parseInt(savedBrawnModifier);
    }
    if (savedInstinctModifier !== null) {
        instinctModifier = parseInt(savedInstinctModifier);
    }

    // If primary attribute is saved, select it and show secondary options
    if (savedPrimary) {
        selectPrimaryAttribute(savedPrimary);
    }

    // If secondary attribute is saved, select it
    if (savedSecondary) {
        selectSecondaryAttribute(savedSecondary);
    } else {
        showPrimaryAttributeOptions();  // If no secondary attribute, prompt for primary selection
    }

    // If tertiary is saved, display it
    if (savedTertiary) {
        // Tertiary is automatically set, so we just display it
        document.getElementById("tertiaryAttribute").innerText = `Your tertiary attribute is: ${savedTertiary}`;
    }

    // Display the modifiers on the page
    displayModifiers();
};

const attributeSet = ["Brains", "Brawn", "Instinct"];
let primaryAttribute = "";
let secondaryAttribute = "";
let brainsModifier = 0;
let brawnModifier = 0;
let instinctModifier = 0;

function selectPrimaryAttribute(selected) {
    if (!attributeSet.includes(selected)) return;

    primaryAttribute = selected;
    document.getElementById("primaryAttribute").innerText = `You chose your **primary** attribute: ${primaryAttribute}`;
    document.getElementById("primaryAttributeSelection").style.display = "none";

    // Give +1 to primary
    updateModifier(primaryAttribute, 1);

    // Show secondary selection
    showSecondaryAttributeOptions();
}

function showSecondaryAttributeOptions() {
    const container = document.createElement("div");
    container.id = "secondaryAttributeSelection";
    container.innerHTML = `<p>Now choose your <strong>secondary</strong> attribute:</p>`;

    attributeSet
        .filter(attr => attr !== primaryAttribute)
        .forEach(attr => {
            const btn = document.createElement("button");
            btn.innerText = attr;
            btn.onclick = () => selectSecondaryAttribute(attr);
            container.appendChild(btn);
        });

    document.body.appendChild(container);
}

function selectSecondaryAttribute(selected) {
    secondaryAttribute = selected;
    updateModifier(secondaryAttribute, 0.5);

    document.getElementById("secondaryAttributeSelection").style.display = "none";

    // Show final modifier scores
    document.getElementById("modifierScores").innerText =
        `Your final modifiers are: Brains: ${brainsModifier}, Brawn: ${brawnModifier}, Instinct: ${instinctModifier}`;
}

function updateModifier(attribute, value) {
    if (attribute === "Brains") brainsModifier += value;
    else if (attribute === "Brawn") brawnModifier += value;
    else if (attribute === "Instinct") instinctModifier += value;
}

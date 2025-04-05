// Declare attributes as constants
const attributeSet = ["Brains", "Brawn", "Instinct"];
// Declare modifiers as -1 default
let brainsModifier = -1;
let brawnModifier = -1;
let instinctModifier = -1;

//start the game using the play button
document.getElementById("playButton").onclick = function (){
    console.log("Play button clicked!");
    document.getElementById("playButton").style.display = "none";
    }


//Primary attribute selection function

function selectPrimaryAttribute(primaryAttribute){
    if (primaryAttribute === "Brains"){
        brainsModifier = 2; 
    } else if (primaryAttribute === "Brawn"){
        brawnModifier = 2;
    } else if (primaryAttribute === "Instinct"){
        instinctModifier = 2
    }

    localStorage.setItem("primaryAttribute",primaryAttribute) //saving the primary attribute choice to local storage
    localStorage.setItem("brainsModifier", brainsModifier);
    localStorage.setItem("brawnModifier", brawnModifier)
    localStorage.setItem("instinctModifier", instinctModifier);

    // update the user interfacte
    document.getElementById("primaryAttribute").innerText = `You chose ${primaryAttribute} as your primary attribute. Your ${primaryAttribute} modifier is now 2`
    document.getElementById("primaryAttributeSelection").style.display = "none"; //this hides the selection box

    //Show the next section
    showSecondaryAttributeOptions


}

function updateModifier(attribute, value){
    if (attribute == "Brains"){brainsModifier+= value};
    if (attribute == "Brawn"){brawnModifier+= value};
    if (attribute == "Instinct"){instinctModifier+= value};
}

function selectPrimaryAttribute(selected) {
    if (!attributeSet.includes(selected)) return;
    primaryAttribute = selected;
    document.getElementById("primaryAttribute").innerText = `You chose ${primaryAttribute}as your primary attribute`;
    document.getElementById("primaryAttributeSelection").style.display = "none";


}

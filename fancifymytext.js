// Function to display alert and change text size
function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

// Function to apply styles based on radio button selection
function changeStyle() {
    const textArea = document.getElementById("textArea");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to transform text to uppercase and add "-Moo" suffix
function moo() {
    let text = document.getElementById("textArea").value;
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim().toUpperCase() + " MOO";
        }
    }
    document.getElementById("textArea").value = sentences.join(". ").trim();
}

// Event listeners
document.getElementById("biggerBtn").onclick = makeTextBigger;
document.getElementById("mooBtn").onclick = moo;

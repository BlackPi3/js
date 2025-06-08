let testText = "this is a sample text assessing how fast you type";
let startTime, endTime;

function startTest() {
    document.getElementById("inputText").value = testText;
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;

    startTime = new Date().getTime();
}

function endTest() {
    endTime = new Date().getTime();
    document.getElementById("userInput").readOnly = true;
    const userInput = document.getElementById("userInput").value;

    const typedWords = userInput.split(/\s+/).filter((w) => w != "").length;
    const timeLapsed = (endTime - startTime) / 1000;
    let wpm = 0;

    if (typedWords >= 0 && timeLapsed >= 0) {
        wpm = Math.round(typedWords / timeLapsed * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<h2>Typing Test Results:</h2>
    <p>Words Typed: ${typedWords} </p>
    <p>Time Elapsed: ${timeLapsed.toFixed(2)} seconds</p>
    <p>Words Per Minute (WPM): ${wpm} </p>`;
}
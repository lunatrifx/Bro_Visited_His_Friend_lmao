document.getElementById("generate-button").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const outputText = generateMeme(inputText);
    document.getElementById("output-text").value = outputText;
    if (outputText.includes("kissmaxxing")) {
        fadeToKissmaxxing();
    } else {
        changeImages();
    }
});

function generateMeme(phrase) {
    const words = phrase.split(" ");
    const keyWord = words[words.length - 1];
    return `bro is ${keyWord}maxxing`;
}

function changeImages() {
    const imageLeft = document.getElementById("image-left");
    const imageRight = document.getElementById("image-right");

    imageLeft.src = "image3.jpg";
    imageRight.src = "image4.jpg";
}

function fadeToKissmaxxing() {
    const fadeImage = document.getElementById("image-fade");
    fadeImage.style.display = "block";
    setTimeout(() => {
        fadeImage.style.opacity = "1";
    }, 10);
}

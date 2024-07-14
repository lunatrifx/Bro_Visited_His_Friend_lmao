document.getElementById("generate-button").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const outputText = generateMeme(inputText);
    document.getElementById("output-text").value = outputText;
    changeImages();
});

function generateMeme(phrase) {
    const words = phrase.split(" ");
    const keyWord = words[words.length - 1];
    return `bro is ${keyWord}maxxing`;
}

function changeImages() {
    const imageLeft = document.getElementById("image-left");
    const imageRight = document.getElementById("image-right");

    const timestamp = new Date().getTime();

    imageLeft.src = `image3.jpg?${timestamp}`;
    imageRight.src = `image4.jpg?${timestamp}`;
}

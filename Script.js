// JavaScript source code


// Read more button
function viewMoreFunction(dotID, textID, buttonID) {
    var dots = document.getElementById(dotID);
    var moreText = document.getElementById(textID);
    var btnText = document.getElementById(buttonID);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Show Less";
        moreText.style.display = "inline";
    }
}
// End



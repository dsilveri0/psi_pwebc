function clickToHide() {
    document.getElementById("mainImage").style.visibility = "hidden";
}

function hoverToHide() {
    document.getElementById("mainImage").style.display = "none";
}

function hoverToShow() {
    document.getElementById("mainImage").style.display = "initial";
    document.getElementById("mainImage").style.visibility = "visible";
}

document.querySelector(".clickButton").addEventListener("click", clickToHide);
document.querySelector(".hideButton").addEventListener("mouseover", hoverToHide);
document.querySelector(".showButton").addEventListener("mouseover", hoverToShow);
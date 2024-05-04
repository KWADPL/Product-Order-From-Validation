function checkForm() {
    if (!checkQuantity()) {
        showError("#quantity");
    } else {
        removeError("#quantity");
    }
    if (!checkColor()) {
        showError("#color");
    } else {
        removeError("#color");
    }
    if (!checkState()) {
        showError("#state");
    } else {
        removeError("#state");
    }
    if (checkColor() && checkQuantity() && checkState()) {
        document.querySelector("#status").classList.remove("hidden");
    }
}
function showError(id) {
    const input = document.querySelector(id);
    input.classList.add("error");
}
function removeError(id) {
    const input = document.querySelector(id);
    input.classList.remove("error");
}
function checkQuantity() {
    return document.querySelector("#quantity").value > 0;
}
function checkColor() {
    return document.querySelector("#color").value !== "--";
}
function checkState() {
    return document.querySelector("#state").value.length === 2;
}
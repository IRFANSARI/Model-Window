const showModelBtn = document.querySelectorAll(".show-model");
const closeModelBtn = document.querySelector(".close-model");
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");

// Function that displays the model
const showModel = function() {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Function that hides the model
const closeModel = function() {
    model.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < showModelBtn.length; i++) {
    showModelBtn[i].addEventListener("click", showModel);
}

closeModelBtn.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function(event) {
    if(event.key === "Escape" && !model.classList.contains("hidden")) {
        closeModel();
    }
});
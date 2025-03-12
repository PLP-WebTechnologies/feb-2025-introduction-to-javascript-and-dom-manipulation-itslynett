document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
});

function changeText() {
    document.getElementById("description").textContent = "Text has been changed!";
}

function toggleElement() {
    const box = document.getElementById("box");
    if (box) {
        box.remove();
    } else {
        const newBox = document.createElement("div");
        newBox.id = "box";
        newBox.className = "box";
        newBox.textContent = "This is a box";
        document.body.appendChild(newBox);
    }
}

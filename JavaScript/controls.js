
document.addEventListener("DOMContentLoaded", () => {
    const listControllers = document.querySelectorAll(".controls");

    listControllers.forEach((e) => {
        const items = e.querySelector("#controls");
        e.addEventListener("mouseover", (e) => {
            items.style.display = "block";
        });
        e.addEventListener("mouseout", () => {
            items.style.display = "none";
        });
    });
});
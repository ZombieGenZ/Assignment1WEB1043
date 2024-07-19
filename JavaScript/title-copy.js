document.title = document.title + ` | ${location.hostname  == "" ? "No Server" : location.hostname}`;

document.addEventListener("DOMContentLoaded", () => {
    const date = new Date();
    document.getElementById("Year-copy").textContent = date.getFullYear();
});
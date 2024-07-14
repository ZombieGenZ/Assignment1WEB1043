function Alert(message) {
    const alert = document.getElementById("alert");
    alert.innerHTML = `<div class="BlurOn"><div class="alertGUI"><div class="alertGUI-top"><p>${message}</p></div><div class="alertGUI-center"><hr></div><div class="alertGUI-bottom"><button onclick="Close()">Đóng</button></div></div></div>`
}

function Close() {
    const alert = document.getElementById("alert");
    alert.innerHTML = `<div class="BlurOff"></div>`;
    setTimeout(() => {
        alert.innerHTML = "";
    }, 500);
}
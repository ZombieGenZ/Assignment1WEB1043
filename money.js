let money = 5000000;

// MARK: Phần này chỉ cho khi không có server
const localStorage_moeny = localStorage.getItem("money");
if (localStorage_moeny && !isNaN(localStorage_moeny)) {
  money = Number(localStorage_moeny);
}

UpdateMoney();

function UpdateMoney() {
    const display = document.getElementById("money");

    display.textContent = money.toLocaleString('de-DE');
}

function SetMoney(value) {
    try {
        const newValue = Number(value);
        if (isNaN(newValue)) {
            throw "Invalid value";
        }
        else {
            money = newValue;
        }
    }
    catch (e) {
        console.error(e);
    }
    UpdateMoney();
}

function SetMoney(value) {
    try {
        const newValue = Number(value);
        if (isNaN(newValue)) {
            throw "Invalid value";
        }
        else {
            money = Number(newValue);
            localStorage.setItem("money", money);
        }
    }
    catch (e) {
        console.error(e);
    }
    UpdateMoney();
}

function AddMoney(value) {
    try {
        const newValue = Number(value);
        if (isNaN(newValue)) {
            throw "Invalid value";
        }
        else {
            money += Number(newValue);
            localStorage.setItem("money", money);
        }
    }
    catch (e) {
        console.error(e);
    }
    UpdateMoney();
}

function RemoveMoney(value) {
    try {
        const newValue = Number(value);
        if (isNaN(newValue)) {
            throw "Invalid value";
        }
        else {
            money -= Number(newValue);
            localStorage.setItem("money", money);
        }
    }
    catch (e) {
        console.error(e);
    }
    UpdateMoney();
}

function ResetMoney() {
    money = 0;
    localStorage.setItem("money", money);
    UpdateMoney();
}
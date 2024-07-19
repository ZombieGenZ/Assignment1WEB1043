var money = 5000000;

// MARK: Phần này chỉ cho khi không có server
const localStorage_moeny = localStorage.getItem("money");
if (localStorage_moeny && !isNaN(localStorage_moeny)) {
  money = Number(localStorage_moeny);
}

// UpdateMoney();

// function UpdateMoney() {
//     const display = document.getElementById("money");

//     display.textContent = money.toLocaleString('de-DE');
// }

function SetMoney(value) {
    try {
        const newValue = Number(value);
        if (isNaN(newValue)) {
            throw "Invalid value";
        }
        else {
            money = newValue;
            localStorage.setItem("money", money);
        }
    }
    catch (e) {
        console.error(e);
    }
    finally {
        CheckMoney();
    }
    // UpdateMoney();
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
    // UpdateMoney();
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
    finally {
        CheckMoney();
    }
    // UpdateMoney();
}

function ResetMoney() {
    money = 0;
    localStorage.setItem("money", money);
    // UpdateMoney();
}

console.log("%cCÁC LỆNH ĐỂ SỬA DỬ LIỆU TIỀN TỆ", "font-size: 30px; font-weight: bold; background-image: linear-gradient(to right, #FB0808, #D8FF00); -webkit-background-clip: text; background-clip: text; color: transparent;");
console.log("%cSetMoney(<Số tiền>): dùng để chỉnh số tiền hiện có", "font-size: 16px");
console.log("%cAddMoney(<Số tiền>): dùng để thêm vô số tiền hiện có", "font-size: 16px");
console.log("%cRemoveMoney(<Số tiền>): dùng để trừ vô số tiền hiện có", "font-size: 16px");
console.log("%cResetMoney(): dùng để đặt lại số tiền hiện có", "font-size: 16px");
console.log("%cShowMoney(): dùng để xem số tiền hiện có", "font-size: 16px");


function CheckMoney() {
    if (money < 0) {
        ResetMoney();
    }
}

function ShowMoney() {
    console.log(`Bạn đang có ${money.toLocaleString('de-DE')} đ`);
}
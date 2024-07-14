let cart = [];

function AddCart_INDEX(items) {
    const element = items.parentElement.parentElement.parentElement;

    const existingItem = cart.find(item => item.name === element.querySelector("h5").textContent);

    if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.price * existingItem.quantity;
    }
    else {
        const itemsName = element.querySelector("h5").textContent;
        const itemsPrice = element.querySelectorAll("b");
        const itemsImage = element.querySelectorAll("img");
        const price = element.querySelectorAll("p");
        const itemsData = {
            name: itemsName,
            quantity: 1,
            price: itemsPrice[2].dataset.price,
            total: itemsPrice[2].dataset.price,
            picture: itemsImage[0].src,
            url: "#"
        };
        cart.push(itemsData);
    }

    UpdateCart();
}

function AddCart_VIEW(items) {
    const element = items.parentElement.parentElement.parentElement.parentElement;

    const existingItem = cart.find(item => item.name === element.querySelector("h1").textContent);

    if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.price * existingItem.quantity;
    }
    else {
        const itemsName = element.querySelector("h1").textContent;
        const itemsPrice = element.querySelectorAll("h1");
        const itemsImage = element.querySelectorAll("img");
        console.log(itemsPrice[1].dataset.price)
        const itemsData = {
            name: itemsName,
            quantity: 1,
            price: itemsPrice[1].dataset.price,
            total: itemsPrice[1].dataset.price,
            picture: itemsImage[5].src,
            url: "#"
        };
        cart.push(itemsData);
    }

    UpdateCart();
}

function UpdateCart() {
    // MARK: Phần này chỉ cho khi không có server
    const cartElement = document.querySelector(".cart");
    cartElement.innerHTML = "";
    cart.forEach(items => {
        const HTMLStructure = `<div class="submenu-items">
                                <div class="submenu-items-left">
                                    <img src="${items.picture}" alt="${items.name}">
                                </div>
                                <div class="submenu-items-right">
                                    <a href="${items.url}"><h5>${items.name}</h5></a>
                                    <h5 id="price" data-price="${items.price}">đ ${Number(items.total).toLocaleString('de-DE')}</h5>
                                    <div class="qty">
                                        <button id="remove" onclick="Remove(this)">-</button>
                                        <input type="number" min="1" onchange="InputChange(this)" value="${items.quantity}">
                                        <button id="add" onclick="Add(this)">+</button>
                                    </div>
                                    <div class="btn-items">
                                        <button onclick="Buy(this)">Mua</button>
                                        <button onclick="Delete(this)">Xóa</button>
                                    </div>
                                </div>
                            </div>`;
        cartElement.innerHTML += HTMLStructure;
    });
    const cartData = cartElement.innerHTML;
    if (cartData == "") {
        const HTMLStructure = `<div class="none">
                                <p>Bạn chưa có khóa học nào được thêm</p>
                            </div>`;
        cartElement.innerHTML = HTMLStructure;
    }
}

function Add(items) {
    const input = items.previousElementSibling;
    input.value++;
    const cartItem = findCartItem(items);
    if (cartItem) {
        cartItem.quantity++;
        cartItem.total = cartItem.price * cartItem.quantity;
    }
    InputAdd(input);
}

function Remove(items) {
    const input = items.nextElementSibling;
    const index = input.value - 1;
    if (index >= 1) {
        const cartItem = findCartItem(items);
        if (cartItem) {
            cartItem.quantity--;
            cartItem.total = cartItem.price * cartItem.quantity;
        }
        input.value--;
        InputRemove(input);
    }
}

function InputChange(items) {
    const element = items.parentElement.parentElement;
    const price = element.querySelectorAll("h5");
    const qty = element.querySelector("input");

    price[1].textContent = "đ " + (price[1].dataset.price * qty.value).toLocaleString('de-DE');

    const cartItem = findCartItem(items);
    if (cartItem) {
        cartItem.quantity = Number(qty.value);
        cartItem.total = cartItem.price * cartItem.quantity;
    }
}

function InputAdd(items) {
    const element = items.parentElement;
    const input = element.querySelector("input");
    InputChange(input);
}

function InputRemove(items) {
    const element = items.parentElement;
    const input = element.querySelector("input");
    InputChange(input);
}

function findCartItem(element) {
    const name = element.closest('.submenu-items').querySelector('h5').textContent;
    return cart.find(item => item.name === name);
}

function Delete(items) {
    const element = items.parentElement.parentElement;

    const existingItem = cart.find(item => item.name === element.querySelector("h5").textContent);
    if (existingItem) {
        cart.splice(cart.indexOf(existingItem), 1);
    }
    UpdateCart();
}

function Buy(items) {
    const element = items.parentElement.parentElement;

    const existingItem = cart.find(item => item.name === element.querySelector("h5").textContent);
    const money = document.getElementById("money").textContent;
    const money_Number = Number(money.replaceAll(".", ""));

    if (existingItem.total < money_Number) {
        RemoveMoney(existingItem.total);
        cart.splice(cart.indexOf(existingItem), 1);
        Alert("Thanh toán thành công!");
        UpdateCart();
    }
    else {
        Alert("Số dư không đủ. Vui lòng thử lại sau!");
    }
}
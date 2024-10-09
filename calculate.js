function calculate(event) {
    event.preventDefault();

    let n = document.getElementById("quantity").value;
    let type = document.getElementById("goods").value;
    let price;
    switch (type) {
        case "anker":
            price = 13000;
            break;
        case "apple":
            price=27000;
            break;
        case "huawei":
            price=5000;
            break;
        case "samsung":
            price=20000;
            break;
        case "marshall":
            price=12000;
            break;
        case "honor":
            price=3500;
            break;
        case "sony":
            price=33000;
            break;
        case "akg":
            price=7000;
            break;
        default:
            price=0;
    }
    let pattern = n.match(/^(0|([1-9]\d*))$/);
    if (pattern === null) {
        alert("Неверный формат ввода! Введите натуральное число");
    }
    else {
        let result = parseInt (n) * price;
        document.getElementById("result").innerHTML = "Стоимость заказа: " + result + " p.";
    }
}

window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("count");
    b.addEventListener("click", calculate);
});

let tg = window.Telegram.WebApp;
tg.expand();
let container = document.querySelector('.container')
let spinBtn = document.getElementById('spinBtn')
let spinText = spinBtn.firstElementChild;
let degVal = Math.ceil(Math.random() * (4000 - 2000) + 2000);

spinBtn.onclick = function() {
    if (degVal % 11.25 == 0) {
        degVal += 1
    }
    spinBtn.disabled = true;
    spinBtn.style.cursor = 'default';
    spinText.style.display = 'none';
    container.style.transform = "rotate(" + degVal + "deg)";
    deg = 360 - degVal % 360

    var discount = 0
    if (deg >= 0 && deg < 11.25) {
        discount = 0;
    }
    else if (deg >= 11.25 && deg < 33.75) {
        discount = 100;
    }
    else if (deg >= 33.75 && deg < 56.25) {
        discount = 0;
    }
    else if (deg >= 56.25 && deg < 78.75) {
        discount = 10;
    }
    else if (deg >= 78.75 && deg < 101.25) {
        discount = 0;
    }
    else if (deg >= 101.25 && deg < 123.75) {
        discount = 50;
    }
    else if (deg >= 123.75 && deg < 146.25) {
        discount = 0;
    }
    else if (deg >= 146.25 && deg < 168.75) {
        discount = 20;
    }
    else if (deg >= 168.75 && deg < 191.25) {
        discount = 0;
    }
    else if (deg >= 191.25 && deg < 213.75) {
        discount = 30;
    }
    else if (deg >= 213.75 && deg < 236.25) {
        discount = 0;
    }
    else if (deg >= 236.25 && deg < 258.75) {
        discount = 15;
    }
    else if (deg >= 258.75 && deg < 281.25) {
        discount = 0;
    }
    else if (deg >= 281.25 && deg < 303.75) {
        discount = 75;
    }
    else if (deg >= 303.75 && deg < 326.25) {
        discount = 0;
    }
    else if (deg >= 326.25 && deg <= 348.75) {
        discount = 5;
    }
    else if (deg >= 348.75 && deg <= 360) {
        discount = 0;
    }

    setTimeout(getResult, 16000, discount);
}

function getResult(discount) {
    if (discount != 0) {
        dbox('Поздравляем!', `Теперь у тебя скидка на подписку <b>${discount}%</b>`);
    } else {
        dbox('Не повезло', 'Попробуйте в следующий раз');
    }

    tg.sendData(discount.toString());
}

function dbox (title, msg) {
    if (msg != undefined && title != undefined) {
        document.getElementById("boxTitle").innerHTML = title;
        document.getElementById("boxTxt").innerHTML = msg;
        document.getElementById("boxBack").classList.add("show");
    } else {
        document.getElementById("boxBack").classList.remove("show");
        tg.close();
    }
}
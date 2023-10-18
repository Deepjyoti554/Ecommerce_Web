var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
// **********main UI***********
var productItem = JSON.parse(localStorage.getItem('item')) || [];
if (!Array.isArray(productItem)) {
    productItem = [];
}
var myArr = [];
var getProducts = function () { return __awaiter(_this, void 0, void 0, function () {
    var products, response, data, inputElement, inputValue, filteredArray, singleProducts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                products = document.querySelector('.products');
                return [4 /*yield*/, fetch('https://fakestoreapi.com/products')];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                myArr = __spreadArray([], data, true);
                console.log(myArr);
                inputElement = document.getElementById('myInput');
                inputValue = inputElement.value.trim().toLowerCase();
                if (inputValue.length > 0) {
                    filteredArray = data.filter(function (item) {
                        return item.title.toLowerCase().indexOf(inputValue) !== -1;
                    });
                    displayProduct(filteredArray);
                }
                else {
                    displayProduct(data);
                }
                singleProducts = document.querySelectorAll(".show_product");
                singleProducts.forEach(function (button) {
                    var id = button.dataset.id;
                    button.addEventListener('click', function () {
                        window.location.href = "/product_view.html?id=".concat(id);
                    });
                });
                return [2 /*return*/];
        }
    });
}); };
getProducts();
function sortAsce() {
    myArr.sort(function (a, b) { return a.price - b.price; });
    console.log(myArr);
    displayProduct(myArr);
}
function sortDesc() {
    myArr.sort(function (a, b) { return b.price - a.price; });
    console.log(myArr);
    displayProduct(myArr);
}
function displayMen() {
    return __awaiter(this, void 0, void 0, function () {
        var menSection, men_response, men_data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    menSection = document.querySelector(".menSection");
                    return [4 /*yield*/, fetch("https://fakestoreapi.com/products/category/men's%20clothing")];
                case 1:
                    men_response = _a.sent();
                    return [4 /*yield*/, men_response.json()];
                case 2:
                    men_data = _a.sent();
                    menSection.addEventListener('click', function () {
                        displayProduct(men_data);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
displayMen();
function displayWomen() {
    return __awaiter(this, void 0, void 0, function () {
        var menSection, men_response, men_data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    menSection = document.querySelector(".womenSection");
                    return [4 /*yield*/, fetch("https://fakestoreapi.com/products/category/women's%20clothing")];
                case 1:
                    men_response = _a.sent();
                    return [4 /*yield*/, men_response.json()];
                case 2:
                    men_data = _a.sent();
                    menSection.addEventListener('click', function () {
                        displayProduct(men_data);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
displayWomen();
function displayJewelery() {
    return __awaiter(this, void 0, void 0, function () {
        var menSection, men_response, men_data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    menSection = document.querySelector(".jewelerySection");
                    return [4 /*yield*/, fetch('https://fakestoreapi.com/products/category/jewelery')];
                case 1:
                    men_response = _a.sent();
                    return [4 /*yield*/, men_response.json()];
                case 2:
                    men_data = _a.sent();
                    menSection.addEventListener('click', function () {
                        displayProduct(men_data);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
displayJewelery();
function displayElectronics() {
    return __awaiter(this, void 0, void 0, function () {
        var menSection, men_response, men_data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    menSection = document.querySelector(".electronicsSection");
                    return [4 /*yield*/, fetch('https://fakestoreapi.com/products/category/electronics')];
                case 1:
                    men_response = _a.sent();
                    return [4 /*yield*/, men_response.json()];
                case 2:
                    men_data = _a.sent();
                    menSection.addEventListener('click', function () {
                        displayProduct(men_data);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
displayElectronics();
function displayProduct(array) {
    var products = document.querySelector('.products');
    products.innerHTML = '';
    array.forEach(function (item) {
        var cardElement = document.createElement('div');
        cardElement.innerHTML = "\n        <div id=\"product_".concat(item.id, "\" class=\"product card-body\">\n        <img class=\"image\" class=\"card-img-top\" src=").concat(item.image, " alt=\"\">\n            <p class=\"title card-title\">").concat(item.title, "</p>\n            <p class=\"description card-text\">").concat(item.description, "</p>\n            <p class=\"category card-text\">").concat(item.category, "</p>\n            <p class=\"price card-text\">").concat(item.price, "\u20B9</p>\n            <p class=\"rate card-text\">").concat(item.rating.rate, "&#11088;</p>\n            <button \"type=\"button\" class=\"btn\" onclick=myFunc(").concat(item.id, ")>Add to cart</button>\n            <button \"type=\"button\" class=\"show_product\" data-id=\"").concat(item.id, "\">Show product</button>\n        </div>\n        ");
        products.appendChild(cardElement);
    });
}
if (window.location.pathname === '/product_view.html') {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    var product_item_1 = document.querySelector(".full_product");
    fetch("https://fakestoreapi.com/products/".concat(id))
        .then(function (response) { return response.json(); })
        .then(function (item) {
        var productElement = document.createElement('div');
        productElement.innerHTML = "\n                <div id=\"product_view\" class=\"card-body\" style=\"display: flex\">\n                <div class=\"img-container\" style=\"display: flex; align-items: center;\" >    \n                <img id=\"product_view_img\" class=\"image\" class=\"card-img-top\" src=".concat(item.image, " alt=\"\"></div>\n                <div class=\"details-container\" style=\"margin-left: 10px\">\n                    <h1 id=\"product_view_para\" class=\"title card-title\">").concat(item.title, "</h1>\n                    <p id=\"product_view_para\" class=\"category card-text\" style=\"margin-bottom: 18px\">Category: <i>").concat(item.category, "</i></p>\n                    <p id=\"product_view_para\" class=\"description card-text\" style=\"margin-bottom: 18px\">").concat(item.description, "</p>\n                    <p id=\"product_view_para\" class=\"price card-text\" style=\"font-size: 24px\">").concat(item.price, "\u20B9</p>\n                    <p id=\"product_view_para\" class=\"rate card-text\" style=\"margin-bottom: 18px\">").concat(item.rating.rate, "&#11088;</p>\n                    <button id=\"product_view_button\" type=\"button\" class=\"btn btn-primary\" onclick=myFunc(").concat(item.id, ")>Add to cart</button>\n                    </div>\n                </div>\n            ");
        if (product_item_1 !== null)
            product_item_1.appendChild(productElement);
    });
}
function myFunc(id) {
    var cart = JSON.parse(localStorage.getItem("item"));
    if (cart != null && !cart.hasOwnProperty(id)) {
        cart[id] = 1;
    }
    else {
        cart = {};
        cart[id] = 1;
    }
    localStorage.setItem('item', JSON.stringify(cart));
}
// ************page***********
var result = 0;
var resultAmount = document.getElementById('result');
var amount = document.querySelector(".amount");
var amountElement = document.createElement('p');
if (window.location.pathname === '/page.html') {
    var temp_1 = document.querySelector(".pages");
    var cart = JSON.parse(window.localStorage.getItem('item'));
    Object.keys(cart).forEach(function (key) { return __awaiter(_this, void 0, void 0, function () {
        var response, data, pageElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/products/".concat(key))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    pageElement = document.createElement('div');
                    pageElement.innerHTML = "\n        <div id=\"addToCardItem\" class=\"card\" style=\" margin: 30px 20px; background-color: aliceblue;\">\n        <img style=\"height: 100px; width: 120px; \" class=\"card-img-top\" src=".concat(data.image, " alt=\"\">\n            <p id=\"card_title\" class=\"card-title\">").concat(data.title, "</p>\n            <p id=\"card_desc\" class=\"card-text\">").concat(data.description, "</p>\n            <p id=\"card_category\" class=\"card-text\">").concat(data.category, "</p>\n            <p class=\"card-text\">").concat(data.price, "\u20B9</p>\n            <div class=\"quatity\">\n                <p class=\"card-text\">Quantity: </p>\n                <p id=\"cnt").concat(data.id, "\">").concat(cart[key], "</p>\n                <button onclick=incrFun(").concat(data.id, ") class=\"btn\">+</button>\n                <button onclick=decrFun(").concat(data.id, ") class=\"btn\">-</button>\n            </div>\n            <button onclick=\"myFunction(").concat(data.id, ")\" style=\"padding: 5px; border-radius: 3px; color: white; background-color: cadetblue;\" class=\"btn\">Remove</button>\n        </div>\n        </div>\n        ");
                    result += data.price * cart[data.id];
                    temp_1.appendChild(pageElement);
                    resultAmount.textContent = result.toString();
                    return [2 /*return*/];
            }
        });
    }); });
}
function incrFun(id) {
    var cart = JSON.parse(localStorage.getItem("item"));
    if (cart[id] > 0) {
        cart[id] = cart[id] + 1;
        localStorage.setItem("item", JSON.stringify(cart));
        var cnt = document.getElementById("cnt".concat(id));
        cnt.innerText = cart[id];
    }
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i].id == id) {
            result += myArr[i].price * cart[id];
        }
    }
    resultAmount.textContent = result.toString();
}
function decrFun(id) {
    var cart = JSON.parse(localStorage.getItem("item"));
    if (cart[id] > 0) {
        cart[id] = cart[id] - 1;
        localStorage.setItem("item", JSON.stringify(cart));
        var cnt = document.getElementById("cnt".concat(id));
        cnt.innerText = cart[id];
    }
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i].id == id) {
            result += myArr[i].price * cart[id];
        }
    }
    resultAmount.textContent = result.toFixed(2);
}
function paymentGateway() {
    var options = {
        "key": "rzp_test_WRcD3PtsOrcPb6",
        "amount": result * 100,
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "",
        "handler": function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });
    document.getElementById('rzp-button1').onclick = function (e) {
        rzp1.open();
        e.preventDefault();
    };
}
function myFunction(value) {
    var items = JSON.parse(localStorage.getItem('item'));
    delete items[value];
    localStorage.setItem('item', JSON.stringify(items));
    location.reload();
}
var form = document.querySelector("#form_submit");
form.innerText = result.toString();
form.addEventListener("click", function () {
    alert("Your payment successful");
});

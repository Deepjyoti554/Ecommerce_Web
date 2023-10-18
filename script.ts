// **********main UI***********
let productItem: string[] = JSON.parse(localStorage.getItem('item')) || [];
if (!Array.isArray(productItem)) {
    productItem = [];
}

let myArr: any[] = [];
const getProducts = async (): Promise<void> => {
    let products = document.querySelector('.products') as HTMLElement;
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    myArr = [...data];
    console.log(myArr);

    const inputElement = document.getElementById('myInput') as HTMLInputElement;

    // Get the value of the input element
    const inputValue: string = inputElement.value.trim().toLowerCase();

    if (inputValue.length > 0) {
        const filteredArray = data.filter((item: any) => {
            return item.title.toLowerCase().indexOf(inputValue) !== -1;
        });
        displayProduct(filteredArray);
    } else {
        displayProduct(data);
    }

    var singleProducts = document.querySelectorAll(".show_product")
    singleProducts.forEach((button) => {
        const id = button.dataset.id;
        button.addEventListener('click', () => {
            window.location.href = `/product_view.html?id=${id}`
        })
    })
}

getProducts()

function sortAsce(): void {
    myArr.sort((a: any, b: any) => a.price - b.price)
    console.log(myArr);
    displayProduct(myArr)
}

function sortDesc(): void {
    myArr.sort((a: any, b: any) => b.price - a.price)
    console.log(myArr);
    displayProduct(myArr)
}

async function displayMen(): Promise<void> {
    const menSection = document.querySelector(".menSection") as HTMLElement;
    const men_response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
    const men_data = await men_response.json();

    menSection.addEventListener('click', () => {
        displayProduct(men_data)
    });
}
displayMen()

async function displayWomen(): Promise<void> {
    const menSection = document.querySelector(".womenSection") as HTMLElement;
    const men_response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
    const men_data = await men_response.json();

    menSection.addEventListener('click', () => {
        displayProduct(men_data)
    });
}
displayWomen()

async function displayJewelery(): Promise<void> {
    const menSection = document.querySelector(".jewelerySection") as HTMLElement;
    const men_response = await fetch('https://fakestoreapi.com/products/category/jewelery');
    const men_data = await men_response.json();

    menSection.addEventListener('click', () => {
        displayProduct(men_data)
    });
}
displayJewelery()

async function displayElectronics(): Promise<void> {
    const menSection = document.querySelector(".electronicsSection") as HTMLElement;
    const men_response = await fetch('https://fakestoreapi.com/products/category/electronics');
    const men_data = await men_response.json();

    menSection.addEventListener('click', () => {
        displayProduct(men_data)
    });
}
displayElectronics()

function displayProduct(array: any[]): void {
    let products = document.querySelector('.products') as HTMLElement;
    products.innerHTML = '';
    array.forEach((item) => {
        const cardElement = document.createElement('div');
        cardElement.innerHTML = `
        <div id="product_${item.id}" class="product card-body">
        <img class="image" class="card-img-top" src=${item.image} alt="">
            <p class="title card-title">${item.title}</p>
            <p class="description card-text">${item.description}</p>
            <p class="category card-text">${item.category}</p>
            <p class="price card-text">${item.price}₹</p>
            <p class="rate card-text">${item.rating.rate}&#11088;</p>
            <button "type="button" class="btn" onclick=myFunc(${item.id})>Add to cart</button>
            <button "type="button" class="show_product" data-id="${item.id}">Show product</button>
        </div>
        `;

        products.appendChild(cardElement);

    })
}


if (window.location.pathname === '/product_view.html') {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const product_item = document.querySelector(".full_product") as HTMLElement;
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(item => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <div id="product_view" class="card-body" style="display: flex">
                <div class="img-container" style="display: flex; align-items: center;" >    
                <img id="product_view_img" class="image" class="card-img-top" src=${item.image} alt=""></div>
                <div class="details-container" style="margin-left: 10px">
                    <h1 id="product_view_para" class="title card-title">${item.title}</h1>
                    <p id="product_view_para" class="category card-text" style="margin-bottom: 18px">Category: <i>${item.category}</i></p>
                    <p id="product_view_para" class="description card-text" style="margin-bottom: 18px">${item.description}</p>
                    <p id="product_view_para" class="price card-text" style="font-size: 24px">${item.price}₹</p>
                    <p id="product_view_para" class="rate card-text" style="margin-bottom: 18px">${item.rating.rate}&#11088;</p>
                    <button id="product_view_button" type="button" class="btn btn-primary" onclick=myFunc(${item.id})>Add to cart</button>
                    </div>
                </div>
            `;
            if (product_item !== null)
                product_item.appendChild(productElement);
        })
}

function myFunc(id: number): void {

    var cart = JSON.parse(localStorage.getItem("item"));
    if (cart != null && !cart.hasOwnProperty(id)) {
        cart[id] = 1;
    } else {
        cart = {};
        cart[id] = 1;
    }
    localStorage.setItem('item', JSON.stringify(cart));
}

// ************page***********
let result: number = 0;
const resultAmount = document.getElementById('result') as HTMLElement;

const amount = document.querySelector(".amount") as HTMLElement;
const amountElement = document.createElement('p');
if (window.location.pathname === '/page.html') {
    const temp = document.querySelector(".pages") as HTMLElement;
    var cart = JSON.parse(window.localStorage.getItem('item'));
    Object.keys(cart).forEach(async (key) => {
        const response = await fetch(`https://fakestoreapi.com/products/${key}`);
        const data = await response.json();
        const pageElement = document.createElement('div')
        pageElement.innerHTML = `
        <div id="addToCardItem" class="card" style=" margin: 30px 20px; background-color: aliceblue;">
        <img style="height: 100px; width: 120px; " class="card-img-top" src=${data.image} alt="">
            <p id="card_title" class="card-title">${data.title}</p>
            <p id="card_desc" class="card-text">${data.description}</p>
            <p id="card_category" class="card-text">${data.category}</p>
            <p class="card-text">${data.price}₹</p>
            <div class="quatity">
                <p class="card-text">Quantity: </p>
                <p id="cnt${data.id}">${cart[key]}</p>
                <button onclick=incrFun(${data.id}) class="btn">+</button>
                <button onclick=decrFun(${data.id}) class="btn">-</button>
            </div>
            <button onclick="myFunction(${data.id})" style="padding: 5px; border-radius: 3px; color: white; background-color: cadetblue;" class="btn">Remove</button>
        </div>
        </div>
        `;

        result += data.price * cart[data.id];

        temp.appendChild(pageElement);
        resultAmount.textContent = result.toString();
    })
}


function incrFun(id: number): void {
    var cart = JSON.parse(localStorage.getItem("item"));
    if (cart[id] > 0) {
        cart[id] = cart[id] + 1;
        localStorage.setItem("item", JSON.stringify(cart));
        const cnt = document.getElementById(`cnt${id}`) as HTMLElement;
        cnt.innerText = cart[id];
    }
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].id == id) {
            result += myArr[i].price * cart[id];
        }
    }
    resultAmount.textContent = result.toString();
}

function decrFun(id: number): void {
    var cart = JSON.parse(localStorage.getItem("item"));
    if (cart[id] > 0) {
        cart[id] = cart[id] - 1;
        localStorage.setItem("item", JSON.stringify(cart));
        const cnt = document.getElementById(`cnt${id}`) as HTMLElement;
        cnt.innerText = cart[id];
    }
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].id == id) {
            result += myArr[i].price * cart[id];
        }
    }
    resultAmount.textContent = result.toFixed(2);
}

function paymentGateway(): void {
    var options = {
        "key": "rzp_test_WRcD3PtsOrcPb6",
        "amount": result * 100,
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "",
        "handler": function (response: any) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
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
    rzp1.on('payment.failed', function (response: any) {
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
    }
}

function myFunction(value: number): void {
    const items = JSON.parse(localStorage.getItem('item'));
    delete items[value]

    localStorage.setItem('item', JSON.stringify(items));
    location.reload();
}

var form = document.querySelector("#form_submit") as HTMLElement;
form.innerText = result.toString();
form.addEventListener("click", function () {
    alert("Your payment successful")
})
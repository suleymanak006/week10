const basketList = [];

function formatDate(pDate) { //formatdate hazir fonksiyonu ile tarihi normal moda getirdik
    return pDate.toLocaleDateString('de-CH');
}
function createProductCatalog(pList) {
    return `
       <table>
           ${createProductCatalogHeader()}
           ${createProductLines(pList)}
       </table>
    `;
}

function createProductCatalogHeader() {
    return `
       <tr>
           <th>Name</th>
           <th>Calory</th>
           <th>Exp. Date</th>
           <th>Price</th>
           <th></th>
           <th></th>
       </tr>
    `;
}

function createProductLines(pList) {
    return pList.map((p, index) => `
       <tr>
           <td>${p.productName}</td>
           <td>${p.totalCalories}</td>
           <td>${formatDate(p.expireDate)}</td>
           <td>${p.price}</td>
           <td><img src="${p.productImage}"></td>
           <td><button data-renk="kirmizi" id="${index}">add</button></td>
       </tr>
   `).join("");
}

function addButtonClickedEvent(pEvent) {
    let clickedElement = pEvent.target;
    if (clickedElement.tagName.toLowerCase() === "button") {
        let index = parseInt(clickedElement.id);
        let selectedProduct = productList[index];

        addToBasket(selectedProduct);
    }
}

function priceFormat(pMoney) {//paranin kusuratlarini kaldirip normal formata getirilmesini saglayan fonksiyon
    return pMoney.toFixed(2);
}
function createBasket(pList) {
    return `
        <table>
            ${createBasketItems(pList)}
            ${createTotalSection(pList)}
        </table>
    `;
}
function createBasketItems(pList) {//sepete sadece secilen 4 ozellik alinarak map ile yeni bir dizi olusturduk
    return pList.map((p, index) => `
        <tr>
            <td>${p.productName}</td>
            <td>${p.price}</td>
            <td><img src="${p.productImage}"></td>
            <td><button id="${index}">remove</button></td>
        </tr>
    `).join("");
}
function createTotalSection(pList) {
    let total = 0;
    pList.forEach(p => total += p.price);

    return `
        <tr>
            <td colspan="2">Total Price:</td>
            <td colspan="2">${priceFormat(total)} Fr.</td>
        </tr>
    `;
}
function removeButtonClickedEvent(pEvent) { //sepette sadece remove butonuna tikalninca kaldirma islemi yapildi
    let clickedElement = pEvent.target;
    if (clickedElement.tagName.toLowerCase() === "button") {
        let index = parseInt(clickedElement.id);
        removeFromBasket(index);
    }
}

function addToBasket(pProduct) {//urunler kisminda al butonuyla secilen urunler sepete eklendi
    basketList.push(pProduct);
    refresh();
}

function removeFromBasket(pDeletedIndex) {//sepette remove butonuna tiklaninca urun sepetten kaldiririliyor
    basketList.splice(pDeletedIndex, 1);
    refresh();
}

function refresh() {
    document.querySelector("#basket").innerHTML = createBasket(basketList);
}

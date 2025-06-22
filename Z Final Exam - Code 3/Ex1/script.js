let arePricesVisible = true;

function togglePrice() {
    const prices = document.getElementsByClassName('price');
    for (let price of prices) {
        price.style.display = arePricesVisible ? 'none' : 'block';
    }
    arePricesVisible = !arePricesVisible;
    document.querySelector('.button').textContent = arePricesVisible? 'Hide Prices' : 'Show Prices';
}

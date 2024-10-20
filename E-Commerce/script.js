let cartTotal = 0;
let cartItems = [];

function filterProducts() {
    const category = document.getElementById('category').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function sortProducts() {
    const sortOption = document.getElementById('sort').value;
    const productsList = document.querySelector('.products-list');
    const products = Array.from(productsList.querySelectorAll('.product'));

    products.sort((a, b) => {
        const priceA = parseInt(a.getAttribute('data-price'));
        const priceB = parseInt(b.getAttribute('data-price'));

        if (sortOption === 'low-to-high') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });

    products.forEach(product => productsList.appendChild(product));
}

function addToCart(productName, price) {
    cartTotal += price;
    cartItems.push({ productName, price });

    document.getElementById('cart-total').textContent = cartTotal;
    updateCartItemsDisplay();
}

function updateCartItemsDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName}: $${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

function checkout() {
    if (cartTotal === 0) {
        alert("Your cart is empty. Add items before proceeding to checkout.");
    } else {
        alert(`Your total is $${cartTotal}. Proceeding to checkout...`);
        cartTotal = 0;
        cartItems = [];
        document.getElementById('cart-total').textContent = cartTotal;
        updateCartItemsDisplay();
    }
}

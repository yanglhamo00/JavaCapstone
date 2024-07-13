function updateTotal() {
    const pricePerItem = 159.20;
    const quantity = document.getElementById('quantity').value;
    const totalPrice = pricePerItem * quantity;
    document.getElementById('total-price').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Payment successful! Thank you for your purchase.');
});

// Back to Top Button
var mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

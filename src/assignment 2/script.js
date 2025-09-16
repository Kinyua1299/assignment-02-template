document.addEventListener('DOMContentLoaded', () => {

    // Get all the necessary elements from the DOM
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartPopup = document.getElementById('cart-popup');
    const clearButton = document.getElementById('clear-btn');

    // Get the elements inside the popup to update them
    const popupImage = document.getElementById('popup-img');
    const popupTitle = document.getElementById('popup-title');
    const popupPrice = document.getElementById('popup-price');

    // Function to show the popup
    function showPopup() {
        cartPopup.classList.add('show');
    }

    // Function to hide the popup
    function hidePopup() {
        cartPopup.classList.remove('show');
    }

    // Add a click event listener to every "ADD TO CART" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Get product details from the data attributes of the clicked button
            const productTitle = event.target.dataset.title;
            const productPrice = event.target.dataset.price;
            const productImageSrc = event.target.dataset.img;

            // Update the popup with the details of the clicked product
            popupTitle.textContent = productTitle;
            popupPrice.textContent = productPrice;
            popupImage.src = productImageSrc;

            // Show the popup
            showPopup();
        });
    });

    // Add a click event listener to the "CLEAR" button
    clearButton.addEventListener('click', () => {
        // Hide the popup when the clear button is clicked
        hidePopup();
    });

});
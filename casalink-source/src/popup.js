// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Popup 1 functionality
    const popup = document.getElementById('popup');
    const popupButtons = document.querySelectorAll('.popup-button');
    const popupCloseBtn = popup.querySelector('.popup-close');
    const popupReturnBtn = popup.querySelector('a');

    // Open popup when clicking popup-button
    popupButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            popup.classList.remove('hidden');
            popup.style.display = 'flex';
        });
    });

    // Close popup when clicking close button
    if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            popup.classList.add('hidden');
            popup.style.display = 'none';
        });
    }

    // Close popup when clicking return button
    if (popupReturnBtn) {
        popupReturnBtn.addEventListener('click', function(e) {
            e.preventDefault();
            popup.classList.add('hidden');
            popup.style.display = 'none';
        });
    }

    // Close popup when clicking outside the modal box
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.add('hidden');
            popup.style.display = 'none';
        }
    });

    // Popup 2 functionality
    const popup2 = document.getElementById('popup2');
    const popup2Buttons = document.querySelectorAll('.popup-button2');
    const popup2CloseBtn = popup2.querySelector('.popup-close');
    const popup2ReturnBtn = popup2.querySelector('a');

    // Open popup2 when clicking popup-button2
    popup2Buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            popup2.classList.remove('hidden');
            popup2.style.display = 'flex';
        });
    });

    // Close popup2 when clicking close button
    if (popup2CloseBtn) {
        popup2CloseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            popup2.classList.add('hidden');
            popup2.style.display = 'none';
        });
    }

    // Close popup2 when clicking return button
    if (popup2ReturnBtn) {
        popup2ReturnBtn.addEventListener('click', function(e) {
            e.preventDefault();
            popup2.classList.add('hidden');
            popup2.style.display = 'none';
        });
    }

    // Close popup2 when clicking outside the modal box
    popup2.addEventListener('click', function(e) {
        if (e.target === popup2) {
            popup2.classList.add('hidden');
            popup2.style.display = 'none';
        }
    });
});

// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const popupButtons = document.querySelectorAll('.popup-button');
    const popupCloseBtn = document.querySelector('.popup-close');
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
});


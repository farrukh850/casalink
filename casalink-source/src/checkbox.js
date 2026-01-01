// Custom Checkbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all custom checkboxes
    initializeCheckboxes();
});

function initializeCheckboxes() {
    // Find all checkbox containers
    const checkboxContainers = document.querySelectorAll('.custom-checkbox-wrapper');

    checkboxContainers.forEach(container => {
        const checkbox = container.querySelector('input[type="checkbox"]');
        const checkboxUI = container.querySelector('.checkbox-ui');

        if (checkbox && checkboxUI) {
            // Set initial state
            updateCheckboxUI(checkbox, checkboxUI);

            // Listen for changes
            checkbox.addEventListener('change', function() {
                updateCheckboxUI(this, checkboxUI);
            });

            // Click handler for the UI element
            checkboxUI.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change', { bubbles: true }));
            });

            // Keyboard accessibility
            checkbox.addEventListener('keydown', function(e) {
                if (e.code === 'Space') {
                    e.preventDefault();
                    this.checked = !this.checked;
                    this.dispatchEvent(new Event('change', { bubbles: true }));
                }
            });
        }
    });
}

function updateCheckboxUI(checkbox, checkboxUI) {
    const innerSpan = checkboxUI.querySelector('span:last-child');

    if (checkbox.checked) {
        // Show the blue inner checkbox
        innerSpan.style.opacity = '1';
        innerSpan.style.visibility = 'visible';
    } else {
        // Hide the blue inner checkbox
        innerSpan.style.opacity = '0';
        innerSpan.style.visibility = 'hidden';
    }
}

// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('img');

        // Add smooth transition styles to content
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out';
        content.style.maxHeight = '0';
        content.style.opacity = '0';

        // Add click event listener to header
        header.addEventListener('click', function() {
            const isOpen = content.style.maxHeight !== '0px';

            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                const otherContent = otherItem.querySelector('.accordion-content');
                const otherIcon = otherItem.querySelector('.accordion-header img');
                otherContent.style.maxHeight = '0';
                otherContent.style.opacity = '0';
                otherIcon.src = 'images/plus.svg';
                otherIcon.alt = 'Plus';
            });

            // Toggle current accordion item
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                icon.src = 'images/minus.svg';
                icon.alt = 'Minus';
            } else {
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                icon.src = 'images/plus.svg';
                icon.alt = 'Plus';
            }
        });
    });
});

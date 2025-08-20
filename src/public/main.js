// FAQ Smooth Dropdown Logic
function initFAQ() {
    const faqButtons = document.querySelectorAll('.faq-button');
    let currentlyOpen = null;
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('svg');
            
            // If clicking currently open FAQ, just close it
            if (currentlyOpen === button) {
                answer.style.maxHeight = '0px';
                icon.classList.remove('rotate-180');
                button.classList.remove('text-primary');
                currentlyOpen = null;
                return;
            }
            
            // Close currently open FAQ if exists
            if (currentlyOpen) {
                const openAnswer = currentlyOpen.nextElementSibling;
                const openIcon = currentlyOpen.querySelector('svg');
                openAnswer.style.maxHeight = '0px';
                openIcon.classList.remove('rotate-180');
                currentlyOpen.classList.remove('text-primary');
            }
            
            // Open new FAQ
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.classList.add('rotate-180');
            button.classList.add('text-primary');
            currentlyOpen = button;
        });
    });
    
    // Update maxHeight on window resize for the open FAQ
    window.addEventListener('resize', () => {
        if (currentlyOpen) {
            const openAnswer = currentlyOpen.nextElementSibling;
            openAnswer.style.maxHeight = openAnswer.scrollHeight + 'px';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFAQ();
});

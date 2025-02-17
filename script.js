const questions=document.querySelectorAll('.question')
questions.forEach(button => {
    button.addEventListener('click', () => {
        const faqContainer = button.parentElement; 
        faqContainer.classList.toggle('active');
        
        // Close other FAQ items
        document.querySelectorAll('.faq-container').forEach(item => {
            if (item !== faqContainer) {
                item.classList.remove('active');
            }
        });
    });
});
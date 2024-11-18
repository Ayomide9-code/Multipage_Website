// Filtering Functionality
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.portfolio-categories button');
    const cards = document.querySelectorAll('.portfolio-grid .card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

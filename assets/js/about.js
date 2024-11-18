// JavaScript for Toggle Functionality 
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');

    // Close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
}


// -----------cv trigger download--------
document.querySelector('.download-btn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/drive/folders/143Ru1ISFu_Zuds9Aw3nnQawP_tZx5snV?usp=sharing';  // Replace with the actual path to your CV file
    link.download = 'Aalita_CV.pdf';
    link.click();
});


// JavaScript for Carousel
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const cards = document.querySelectorAll(".card");
    const cardWidth = cards[0].getBoundingClientRect().width;

    let currentPosition = 0;

    // Move Carousel to the Next Position
    nextBtn.addEventListener("click", () => {
        if (currentPosition > -(track.scrollWidth - cardWidth * 4)) {
            currentPosition -= cardWidth;
            track.style.transform = `translateX(${ currentPosition }px)`;
        }
    });

    // Move Carousel to the Previous Position
    prevBtn.addEventListener("click", () => {
        if (currentPosition < 0) {
            currentPosition += cardWidth;
            track.style.transform = `translateX(${ currentPosition }px)`;
        }
    });
});


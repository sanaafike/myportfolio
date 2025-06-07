// Create the 'Back to Top' button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⬆️ Back to Top';
backToTopButton.id = 'backToTopButton';
document.body.appendChild(backToTopButton);

// Add CSS styles for the button
const style = document.createElement('style');
style.textContent = `
    #backToTopButton {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 99;
        padding: 12px 16px;
        font-size: 16px;
        background-color: #1abc9c;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        display: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    #backToTopButton:hover {
        background-color: #16a085;
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

// Show button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll smoothly to top when button clicked
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

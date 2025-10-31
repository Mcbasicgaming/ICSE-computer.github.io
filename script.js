document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('changing-text');
    const words = ['Java', 'Python', 'C++', 'Pandas', 'HTML','JavaScipt'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            // deleting characters
            text.textContent = currentWord.substring(0, charIndex--);
        } else {
            // typing characters
            text.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // when full word is typed
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // wait before deleting
            return;
        }

        // when word is fully deleted
        if (isDeleting && charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // move to next word
            setTimeout(typeEffect, 300); // small delay before typing new word
            return;
        }

        // typing and deleting speed
        const speed = isDeleting ? 80 : 150;
        setTimeout(typeEffect, speed);
    }

    typeEffect();
});

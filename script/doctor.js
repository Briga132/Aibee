document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.darkwillow');
    const prev = document.querySelector('.axel');
    const next = document.querySelector('.axer');
    const slides = Array.from(track.children).slice(0, 3);
    const visibleSlides = 3;

    let slideWidth = slides[0].offsetWidth + 15;
    let index = visibleSlides; 

    const prepend = slides.slice(-visibleSlides).map(s => s.cloneNode(true));
    const append = slides.slice(0, visibleSlides).map(s => s.cloneNode(true));
    prepend.forEach(clone => track.insertBefore(clone, track.firstChild));
    append.forEach(clone => track.appendChild(clone));

    const totalSlides = track.children.length;

    function setInitialPosition() {
        track.style.transition = 'none';
        track.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    setInitialPosition();

    let isAnimating = false;

    function slideTo(newIndex) {
        if (isAnimating) return;
        isAnimating = true;

        track.style.transition = 'transform 0.4s ease-in-out';
        track.style.transform = `translateX(-${slideWidth * newIndex}px)`;

        track.addEventListener('transitionend', function handler() {
            track.removeEventListener('transitionend', handler);

            if (newIndex <= visibleSlides - 1) {
                newIndex += slides.length; 
                track.style.transition = 'none';
                track.style.transform = `translateX(-${slideWidth * newIndex}px)`;
            } else if (newIndex >= slides.length + visibleSlides) {
                newIndex -= slides.length; 
                track.style.transition = 'none';
                track.style.transform = `translateX(-${slideWidth * newIndex}px)`;
            }

            index = newIndex;
            isAnimating = false;
        });
    }

    next.addEventListener('click', () => slideTo(index + 1));
    prev.addEventListener('click', () => slideTo(index - 1));

    window.addEventListener('resize', () => {
        slideWidth = slides[0].offsetWidth + 15;
        setInitialPosition();
    });
});

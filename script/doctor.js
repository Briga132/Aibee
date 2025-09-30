document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.darkwillow');
    const prev = document.querySelector('.axel');
    const next = document.querySelector('.axer');

    const originalSlides = Array.from(track.children).slice(0, 3);
    const visibleSlides = 4;
    const cloneCount = 4;

    let slideWidth = originalSlides[0].offsetWidth + 15;
    let index = cloneCount;

    const clonesStart = originalSlides.slice(-cloneCount).map(card => card.cloneNode(true));
    clonesStart.forEach(clone => track.insertBefore(clone, track.firstChild));

    const clonesEnd = originalSlides.slice(0, cloneCount).map(card => card.cloneNode(true));
    clonesEnd.forEach(clone => track.appendChild(clone));

    const totalSlides = track.children.length;

    function setStartPosition() {
        track.style.transition = 'none';
        track.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    setStartPosition();

    let isMoving = false;

    function moveTo(newIndex) {
        if (isMoving) return;
        isMoving = true;

        track.style.transition = 'transform 0.4s ease-in-out';
        track.style.transform = `translateX(-${slideWidth * newIndex}px)`;

        track.addEventListener('transitionend', function handler() {
            track.removeEventListener('transitionend', handler);

            if (newIndex < cloneCount) {
                newIndex += originalSlides.length;
                track.style.transition = 'none';
                track.style.transform = `translateX(-${slideWidth * newIndex}px)`;
            }

            if (newIndex >= originalSlides.length + cloneCount) {
                newIndex -= originalSlides.length;
                track.style.transition = 'none';
                track.style.transform = `translateX(-${slideWidth * newIndex}px)`;
            }

            index = newIndex;
            isMoving = false;
        });
    }

    next.addEventListener('click', () => moveTo(index + 1));
    prev.addEventListener('click', () => moveTo(index - 1));

    window.addEventListener('resize', () => {
        slideWidth = originalSlides[0].offsetWidth + 15;
        setStartPosition();
    });
});
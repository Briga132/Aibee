    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.gore');

        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                const card = button.closest('.kletka1, .kletka2, .kletka3, .kletka4');

                const dots = card.querySelector('.help3');
                const fullText = card.querySelector('.help2');

                const isVisible = fullText.classList.contains('show');

                if (isVisible) {

                    dots.style.display = 'inline';
                    fullText.classList.remove('show');
                    button.textContent = 'READ MORE';
                } else {

                    dots.style.display = 'none';
                    fullText.classList.add('show');
                    button.textContent = 'READ LESS';
                }
            });
        });
    });

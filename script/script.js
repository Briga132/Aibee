
  const slider = document.getElementById('slider');
  const arrowL = document.getElementById('arrowL');
  const arrowR = document.getElementById('arrowR');

  function scrollLeft() {
    console.log(slider)
    console.log(slider.clientWidth)
    slider.scrollBy(
        {
            left: -slider.clientWidth,
            behavior: 'smooth'
        }
    );
  }
  function scrollRight() {
    slider.scrollBy(
        { 
            left: slider.clientWidth, behavior: 'smooth' 
        }
    );
  }

arrowL.addEventListener("click", scrollLeft)
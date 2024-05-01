// Reference to the background image element
const backgroundImgEl = document.getElementById('background-image');

// Event listener for scrolling the window
window.addEventListener('scroll', () => {
    updateImage();  // Function call corrected with semicolon for best practices
});

// Function to dynamically update the background image's opacity and size
function updateImage() {
    // Increase opacity and size with scroll
    backgroundImgEl.style.opacity = 1 - window.scrollY / 2000;
    let newSize = 100 + window.scrollY / 12;
    backgroundImgEl.style.backgroundSize = newSize + '%';

    // Adjust background position to zoom towards the bottom of the image
    let newPosition = 50 - window.scrollY / 300;  // This value can be adjusted for different effects
    backgroundImgEl.style.backgroundPosition = `50% ${newPosition}%`;
}


// Initialize Bootstrap carousel
$(document).ready(function(){
    $('.carousel').carousel({
      interval: 5000 // Changes the speed
    });
});

// Scroll event for adjusting the opacity of splotches
$(window).scroll(function() {
    $('.splotch').each(function() {
        var splotchOffset = $(this).offset().top;
        var windowHeight = $(window).height();
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + windowHeight;

        // Adjusting the opacity based on scroll position
        if (windowBottom > splotchOffset) {
            var opacity = (windowBottom - splotchOffset) / windowHeight;
            $(this).css('opacity', opacity);
        }
    });
});

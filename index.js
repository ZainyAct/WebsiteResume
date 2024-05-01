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

//Carousel - Personal Projects
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Carousel {
    constructor(containerId, work) {
        this.containerId = containerId;
        this.work = work;

        // Define options based on the work flag
        this.text1_options = this.work ? [
            "Revolutionizing Rehabilitation: NeuroCage",
            "Powering Progress: Electrium",
            "Crafting Spaces, Building Dreams: Leslieville Home Improvements",
            "Exploring the Boundaries of Biomechatronics: UW Biomechatronics Club"
        ] : [
            "Breathe Easy, Think Clear: Air Quality Relay",
            "Step into Tomorrow: HUD Glasses",
            "Effortless Precision: Hand-Controlled Mouse",
            "Creative Innovation: LEGO 3D Printer",
            "Green Thumb 2.0: Automated Greenhouse"
        ];

        this.text2_options = this.work ? [
            "Spearheaded cutting-edge projects in assistive technology, aiding in the development of innovative solutions to enhance the lives of individuals with neurological disorders.",
            "Contributed to the advancement of electrical infrastructure through meticulous quality control and project management, ensuring seamless operations for critical systems.",
            "Played a pivotal role in transforming visions into reality, overseeing various facets of residential construction projects with a keen eye for detail and craftsmanship.",
            "Engaged in hands-on experimentation with cutting-edge technology, leveraging ESP32's and EMG fabric to decode neural signals, enabling real-time control of our bespoke artificial hand using precision actuators."
        ] : [
            "Keep your surroundings crisp and clean with this innovative device, ensuring optimal air quality wherever you roam.",
            "Dive into a world of augmented reality, where digital overlays enhance your reality seamlessly, offering endless possibilities.",
            "Navigate your digital realm with a wave of your hand, bringing a new level of intuitive control to your computing experience.",
            "Unleash your creativity and build the impossible with this DIY printing marvel, where your imagination knows no bounds.",
            "Watch your garden flourish effortlessly with smart automation, bringing sustainable gardening to the next level."
        ];

        this.color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
        this.image_options = [
            "pictures/portfolio/AQR1.png",
            "pictures/portfolio/DefaultImage.png",
            "pictures/portfolio/ML1.png",
            "pictures/portfolio/LG1.png",
            "pictures/portfolio/AG1.png"
        ] ; [
            "pictures/portfolio/AQR1.png",
            "pictures/portfolio/DefaultImage.png",
            "pictures/portfolio/ML1.png",
            "pictures/portfolio/LG1.png",
            "pictures/portfolio/AG1.png"
        ];

        this.i = 0;
        this.initializeCarousel();
        this.i = 0;
        this.initializeCarousel();
    }

    initializeCarousel() {
        const carouselElement = document.getElementById(this.containerId);
        if (!carouselElement) return; // Check if the element exists

        // Setup HTML structure inside the carousel container
        carouselElement.innerHTML = `
            <div id="menu-${this.containerId}" class="menu">
                <div id="current-option-text1-${this.containerId}" class="current-option-text"></div>
                <div id="current-option-text2-${this.containerId}" class="current-option-text"></div>
                <div id="image-${this.containerId}" class="image"></div>
                <button id="previous-option-${this.containerId}" class="carousel-button">Previous</button>
                <button id="next-option-${this.containerId}" class="carousel-button">Next</button>
            </div>
        `;

        const currentOptionText1 = document.getElementById(`current-option-text1-${this.containerId}`);
        const currentOptionText2 = document.getElementById(`current-option-text2-${this.containerId}`);
        const currentOptionImage = document.getElementById(`image-${this.containerId}`);
        const previousOption = document.getElementById(`previous-option-${this.containerId}`);
        const nextOption = document.getElementById(`next-option-${this.containerId}`);


        // Bind navigation buttons
        document.getElementById(`next-option-${this.containerId}`).addEventListener('click', () => this.navigateNext());
        document.getElementById(`previous-option-${this.containerId}`).addEventListener('click', () => this.navigatePrevious());

        // Update UI with initial data
        this.updateUI();
    }

    navigateNext() {
        this.i = (this.i + 1) % this.text1_options.length;
        this.updateUI();
    }

    navigatePrevious() {
        this.i = (this.i - 1 + this.text1_options.length) % this.text1_options.length;
        this.updateUI();
    }

    updateUI() {
        document.getElementById(`current-option-text1-${this.containerId}`).innerText = this.text1_options[this.i];
        document.getElementById(`current-option-text2-${this.containerId}`).innerText = this.text2_options[this.i];
        document.getElementById(`image-${this.containerId}`).style.backgroundImage = `url(${this.image_options[this.i]})`;
        document.getElementById(`menu-${this.containerId}`).style.background = this.color_options[this.i];
    }
}


const workCarousel = new Carousel('workCarousel', true);
const projCarousel = new Carousel('projCarousel', false);


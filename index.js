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
/*
class Carousel {
    constructor(containerId, options) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Carousel container with ID ${containerId} not found.`);
            return;
        }
        this.options = options;
        this.currentIndex = 0;
        this.initCarousel();
    }

    initCarousel() {
        this.renderCarousel();
        this.attachEventListeners();
    }

    renderCarousel() {
        this.container.innerHTML = `
            <div class="carousel-content">
                <div class="image" id="image-${this.container.id}" style="background-image: url('${this.options.images[this.currentIndex]}');"></div>
                <div class="text-content">
                    <span class="current-option-text" id="current-option-text1-${this.container.id}">${this.options.text1[this.currentIndex]}</span>
                    <span class="current-option-text" id="current-option-text2-${this.container.id}">${this.options.text2[this.currentIndex]}</span>
                </div>
                <div class="carousel-nav">
                    <button class="carousel-button" id="previous-option-${this.container.id}">&#9664; Previous</button>
                    <button class="carousel-button" id="next-option-${this.container.id}">Next &#9654;</button>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        document.getElementById(`next-option-${this.container.id}`).addEventListener('click', () => this.navigate(1));
        document.getElementById(`previous-option-${this.container.id}`).addEventListener('click', () => this.navigate(-1));
    }

    navigate(direction) {
        this.updateIndex(direction);
        this.updateCarousel(direction);
    }

    updateIndex(direction) {
        this.currentIndex += direction;
        if (this.currentIndex < 0) this.currentIndex = this.options.text1.length - 1;
        if (this.currentIndex >= this.options.text1.length) this.currentIndex = 0;
    }

    updateCarousel(direction) {
        const image = document.getElementById(`image-${this.container.id}`);
        const text1 = document.getElementById(`current-option-text1-${this.container.id}`);
        const text2 = document.getElementById(`current-option-text2-${this.container.id}`);

        text1.innerText = this.options.text1[this.currentIndex];
        text2.innerText = this.options.text2[this.currentIndex];
        image.style.backgroundImage = `url('${this.options.images[this.currentIndex]}')`;

        // Remove existing animations
        image.classList.remove('anim-next', 'anim-previous');
        text1.classList.remove('anim-next', 'anim-previous');
        text2.classList.remove('anim-next', 'anim-previous');

        // Add new animation based on direction
        const animationClass = direction === 1 ? 'anim-next' : 'anim-previous';
        image.classList.add(animationClass);
        text1.classList.add(animationClass);
        text2.classList.add(animationClass);
    }
}
    const workOptions = {
        text1: ["Revolutionizing Rehabilitation: NeuroCage", "Powering Progress: Electrium", "Crafting Spaces, Building Dreams: Leslieville Home Improvements", "Exploring the Boundaries of Biomechatronics: UW Biomechatronics Club"],
        text2: ["Spearheaded cutting-edge projects in assistive technology, aiding in the development of innovative solutions to enhance the lives of individuals with neurological disorders.", "Contributed to the advancement of electrical infrastructure through meticulous quality control and project management, ensuring seamless operations for critical systems.", "Played a pivotal role in transforming visions into reality, overseeing various facets of residential construction projects with a keen eye for detail and craftsmanship.", "Engaged in hands-on experimentation with cutting-edge technology, leveraging ESP32's and EMG fabric to decode neural signals, enabling real-time control of our bespoke artificial hand using precision actuators."],
        images: ["./pictures/work/NC.jpg", "./pictures/work/electrium_mobility_logo.jpeg", "./pictures/work/leslie.jpeg", "./pictures/work/BT.png"],
        colors: ["#EBB9D2", "#FE9968", "#7FE0EB"]
    };

    const projOptions = {
        text1: ["Breathe Easy, Think Clear: Air Quality Relay", "Step into Tomorrow: HUD Glasses", "Effortless Precision: Hand-Controlled Mouse", "Creative Innovation: LEGO 3D Printer", "Green Thumb 2.0: Automated Greenhouse"],
        text2: ["Keep your surroundings crisp and clean with this innovative device, ensuring optimal air quality wherever you roam.", "Dive into a world of augmented reality, where digital overlays enhance your reality seamlessly, offering endless possibilities.", "Navigate your digital realm with a wave of your hand, bringing a new level of intuitive control to your computing experience.", "Unleash your creativity and build the impossible with this DIY printing marvel, where your imagination knows no bounds.", "Watch your garden flourish effortlessly with smart automation, bringing sustainable gardening to the next level."],
        images: ["./pictures/portfolio/AQR1.png", "./pictures/portfolio/DefaultImage.png", "./pictures/portfolio/ML1.png", "./pictures/portfolio/LG1.png", "./pictures/portfolio/AG1.png"],
        colors: ["#6CE5B1", "#D4E157", "#29B6F6"]
    };

new Carousel('projCarousel', projOptions);
new Carousel('workCarousel', workOptions);
*/


const projectsData = {
    text1: ["Revolutionizing Rehabilitation: NeuroCage", "Powering Progress: Electrium", "Crafting Spaces, Building Dreams: Leslieville Home Improvements", "Exploring the Boundaries of Biomechatronics: UW Biomechatronics Club"],
    text2: ["Spearheaded cutting-edge projects in assistive technology, aiding in the development of innovative solutions to enhance the lives of individuals with neurological disorders.", "Contributed to the advancement of electrical infrastructure through meticulous quality control and project management, ensuring seamless operations for critical systems.", "Played a pivotal role in transforming visions into reality, overseeing various facets of residential construction projects with a keen eye for detail and craftsmanship.", "Engaged in hands-on experimentation with cutting-edge technology, leveraging ESP32's and EMG fabric to decode neural signals, enabling real-time control of our bespoke artificial hand using precision actuators."],
    color: ["#EBB9D2", "#FE9968", "#7FE0EB"],
    image: ["./pictures/work/NC.jpg", "./pictures/work/electrium_mobility_logo.jpeg", "./pictures/work/leslie.jpeg", "./pictures/work/BT.png"]
};
const workData = {
    text1: ["Breathe Easy, Think Clear: Air Quality Relay", "Step into Tomorrow: HUD Glasses", "Effortless Precision: Hand-Controlled Mouse", "Creative Innovation: LEGO 3D Printer", "Green Thumb 2.0: Automated Greenhouse"],
    text2: ["Keep your surroundings crisp and clean with this innovative device, ensuring optimal air quality wherever you roam.", "Dive into a world of augmented reality, where digital overlays enhance your reality seamlessly, offering endless possibilities.", "Navigate your digital realm with a wave of your hand, bringing a new level of intuitive control to your computing experience.", "Unleash your creativity and build the impossible with this DIY printing marvel, where your imagination knows no bounds.", "Watch your garden flourish effortlessly with smart automation, bringing sustainable gardening to the next level."],
    image: ["./pictures/portfolio/AQR1.png", "./pictures/portfolio/DefaultImage.png", "./pictures/portfolio/ML1.png", "./pictures/portfolio/LG1.png", "./pictures/portfolio/AG1.png"],
    color: ["#6CE5B1", "#D4E157", "#29B6F6"]
};

function updateCarousel(containerElement, text1Data, text2Data, imageData, colorData) {
    let i = 0; 
    const currentOptionText1 = containerElement.querySelector("#current-option-text1"); // Get elements within the carousel container
    const currentOptionText2 = containerElement.querySelector("#current-option-text2");
    const currentOptionImage = containerElement.querySelector("#image");
    const carousel = containerElement.querySelector("#carousel-wrapper");
    const mainMenu = containerElement.querySelector("#menu");
    const optionPrevious = containerElement.querySelector("#previous-option");
    const optionNext = containerElement.querySelector("#next-option");

    currentOptionText1.innerText = text1Data[i]; 
    currentOptionText2.innerText = text2Data[i];
    currentOptionImage.style.backgroundImage = "url(" + imageData[i] + ")";
    mainMenu.style.background = colorData[i];

    optionNext.onclick = function () {
    i = i + 1;
    i = i % text1Data.length;
    currentOptionText1.dataset.nextText = text1Data[i];

    currentOptionText2.dataset.nextText = text2Data[i];

    mainMenu.style.background = colorData[i];
    carousel.classList.add("anim-next");

    setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + imageData[i] + ")";
    }, 455);

    setTimeout(() => {
    currentOptionText1.innerText = text1Data[i];
    currentOptionText2.innerText = text2Data[i];
    carousel.classList.remove("anim-next");
    }, 650);
    };

    optionPrevious.onclick = function () {
    if (i === 0) {
    i = text1Data.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1Data[i];

    currentOptionText2.dataset.previousText = text2Data[i];

    mainMenu.style.background = colorData[i];
    carousel.classList.add("anim-previous");

    setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + imageData[i] + ")";
    }, 455);

    setTimeout(() => {
    currentOptionText1.innerText = text1Data[i];
    currentOptionText2.innerText = text2Data[i];
    carousel.classList.remove("anim-previous");
    }, 650);
    }
}

// Event Listener for Scrolling
window.addEventListener('scroll', function() {
    const projectsSection = document.getElementById('projects');
    const workSection = document.getElementById('work');

    if (isSectionInView(projectsSection)) {
    const projectsCarousel = projectsSection.querySelector('.carousel-container');
    updateCarousel(projectsCarousel, projectsData.text1, projectsData.text2, projectsData.image, projectsData.color); 
}

if (isSectionInView(workSection)) {
    const workCarousel = workSection.querySelector('.carousel-container');
    updateCarousel(workCarousel, workData.text1, workData.text2, workData.image, workData.color);       
}
});

// Helper function to check if a section is in view
function isSectionInView(section) {
const rect = section.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
);
}



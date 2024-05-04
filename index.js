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

//Carousel 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var projectsData, workData;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize data
    projectsData = {
        text1: ["Revolutionizing Rehabilitation: NeuroCage", "Powering Progress: Electrium", "Built to Last: Leslieville Home Improvements", "Giving a Hand: Biomechatronics Design Team"],
        text2: ["Spearheaded cutting-edge projects in assistive technology, aiding in the development of innovative solutions to enhance the lives of individuals with neurological disorders.", "Contributed to the advancement of electrical infrastructure through meticulous quality control and project management, ensuring seamless operations for critical systems.", "Enhanced residential construction with integrated software, electrical, and mechanical solutions, ensuring superior functionality and comfort in every build.", "Engaged in hands-on experimentation with cutting-edge technology, leveraging ESP32's and EMG fabric to decode neural signals, enabling real-time control of our bespoke artificial hand using precision actuators."],
        color: ["#FF8A80","#C5CAE9","#FFD54F","#81C784"],
        image: ["./pictures/work/NC.jpg", "./pictures/work/electrium_mobility_logo.jpeg", "./pictures/work/leslie.jpeg", "./pictures/work/BT.png"]
    };

    workData = {
        text1: ["Breathe Easy, Think Clear: Air Quality Relay", "Step into Tomorrow: HUD Glasses", "Effortless Precision: Hand-Controlled Mouse", "Creative Innovation: LEGO 3D Printer", "Green Thumb 2.0: Automated Greenhouse"],
        text2: ["Keep your surroundings crisp and clean with this innovative device, ensuring optimal air quality wherever you roam.", "Dive into a world of augmented reality, where digital overlays enhance your reality seamlessly, offering endless possibilities.", "Navigate your digital realm with a wave of your hand, bringing a new level of intuitive control to your computing experience.", "Unleash your creativity and build the impossible with this DIY printing marvel, where your imagination knows no bounds.", "Watch your garden flourish effortlessly with smart automation, bringing sustainable gardening to the next level."],
        color: ["#FF80AB","#80CBC4","#FFD180","#B0BEC5"],
        image: ["./pictures/portfolio/AQR1.png", "./pictures/portfolio/HUD.jpg", "./pictures/portfolio/ML1.png", "./pictures/portfolio/LG1.png", "./pictures/portfolio/AG1.png"]
    };

    const projectsSection = document.getElementById('projects');
    const workSection = document.getElementById('work');
    const projectsCarousel = projectsSection.querySelector('#carousel-wrapper');
    const workCarousel = workSection.querySelector('#carousel-wrapper');

    function updateCarouselVisibility() {
        if (isSectionInView(projectsSection)) {
            updateCarousel(projectsCarousel, projectsData.text1, projectsData.text2, projectsData.image, projectsData.color);
        }

        if (isSectionInView(workSection)) {
            updateCarousel(workCarousel, workData.text1, workData.text2, workData.image, workData.color);
        }
    }

    function isSectionInView(section) {
        const rect = section.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && 
            rect.bottom >= 0
        );
    }

    // Check visibility on scroll and resize for responsiveness
    window.addEventListener('scroll', updateCarouselVisibility);
    window.addEventListener('resize', updateCarouselVisibility);

    // Initial check to activate carousels on load in case they are in view
    updateCarouselVisibility();
});

function updateCarousel(containerElement, text1Data, text2Data, imageData, colorData) {
    let i = 0; 
    const currentOptionText1 = containerElement.querySelector("#current-option-text1"); 
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
        i = (i + 1) % text1Data.length;  // Circular increment
        updateCarouselElements();
    };

    optionPrevious.onclick = function () {
        i = (i - 1 + text1Data.length) % text1Data.length;  // Circular decrement
        updateCarouselElements();
    };

    function updateCarouselElements() {
    // Update text and trigger reflow for text element
    currentOptionText1.style.display = 'none';
    currentOptionText1.offsetHeight; // Force reflow
    currentOptionText1.style.display = '';
    
    currentOptionText1.innerText = text1Data[i]; 
    currentOptionText2.innerText = text2Data[i];

    // If you are also updating the image, consider triggering reflow for it as well if needed
    currentOptionImage.style.display = 'none';
    currentOptionImage.offsetHeight; // Force reflow
    currentOptionImage.style.display = '';

    currentOptionImage.style.backgroundImage = "url(" + imageData[i] + ")";
    mainMenu.style.background = colorData[i];

    // Apply or remove classes if needed to trigger animations
    currentOptionText1.classList.add('fade-in-text');
    currentOptionText2.classList.add('fade-in-text');
    currentOptionImage.classList.add('fade-in-image');
        setTimeout(() => {
            currentOptionText1.innerText = text1Data[i];
            currentOptionText2.innerText = text2Data[i];
            currentOptionImage.style.backgroundImage = "url(" + imageData[i] + ")";
            mainMenu.style.background = colorData[i];
        }, 100); // Delay updates slightly to allow CSS to recognize the class change
    }
}
const backgroundImgEl = document.getElementById('background-image');

window.addEventListener('scroll', ()=> {
    updateImage()
})

function updateImage() {
    backgroundImgEl.style.opacity = 1 - window.scrollY / 2000;
    backgroundImgEl.style.backgroundSize = 180 - window.scrollY / 12 + '%'; 
}

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
                });
            }
        });
    }, { threshold: 0.5 });

    // Observe all sections
    document.querySelectorAll(".container").forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar');
    const backgroundHeight = document.querySelector('.background-image').offsetHeight;

    function fixSidebar() {
        if (window.scrollY >= backgroundHeight) {
            sidebar.style.position = 'fixed';
            sidebar.style.top = '0'; // Set sidebar to stick to the top when fixed
        } else {
            sidebar.style.position = 'absolute';
            sidebar.style.top = backgroundHeight + 'px'; // Keep it below the background image
        }
    }

    window.addEventListener('scroll', fixSidebar);
});

$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000 //changes the speed
    })
});

$(window).scroll(function() {
    var homeTop = $(window).scrollTop();

$(".splotch").each(function() {
    var height = $(this).height();
    var offset = $(this).offset().top;
    var opacity = 2 - (height - homeTop + offset) / (0.8 * height);
    //ensure it doesn't go over 0.8 opacity
    if(opacity < 0.8)
    $(this).css("opacity", opacity);
});
});
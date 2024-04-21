const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');

const numberOfSlides = slides.length;
let slideNumber = 0;

// Slider next button
nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideNumber++;

    if (slideNumber >= numberOfSlides) {
        slideNumber = 0;
    }
    
    slides[slideNumber].classList.add('active');
}

//slider prev button
prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideNumber--;

    if (slideNumber <0) {
        slideNumber = numberOfSlides-1;
    }
    
    slides[slideNumber].classList.add('active');
}


// Adding functionality to "More Details" buttons individually for each slide
const slide = document.querySelectorAll('.slide');
slides.forEach((slide) => {
    const moreDetailsButton = slide.querySelector('.btn');
    const leftInfo = slide.querySelector('.left-info');
    
    
    
    let isHidden = false;

    moreDetailsButton.addEventListener('click', () => {
        const middleText = slide.querySelector('.left-info .content p');
        const tourTitle = slide.querySelector('.left-info .content h3');
        const pirText = slide.querySelector('.left-info .penetrate-blue h1');
        const lititaText = slide.querySelector('.right-info h1');
        const locationTitle = slide.querySelector('.right-info h3');
        const penetrateBlueLeft = slide.querySelector('.left-info .penetrate-blue');
        const penetrateBlueRight = slide.querySelector('.right-info');
        const additionalTextImg = slide.querySelectorAll('.additional-text img');
        const additionalText = slide.querySelector('.additional-text');

        if (isHidden) {
            // Restore the left side elements
            additionalTextImg.forEach(img => {
                img.style.right = '-10000px';
            });
            
            additionalText.style.left = '-25000px';
            additionalText.style.opacity = '1s';
            additionalText.display='none';
            leftInfo.style.width = '50%';
            middleText.style.opacity = '';
            tourTitle.style.opacity = '';
            pirText.style.opacity = '';
            pirText.style.color = '';
            penetrateBlueLeft.style.background = 'rgba(255,255,255, .1)';
            penetrateBlueLeft.style.backdropFilter = 'blur(20px)';

            // Restore the right side elements
            lititaText.style.opacity = '';
            locationTitle.style.opacity = '';
            penetrateBlueRight.style.background = 'rgba(255,255,255, .1)';
            penetrateBlueRight.style.backdropFilter = 'blur(0px)';
        } else {
            // Hide the elements with transition
            additionalTextImg.forEach(img => {
                img.style.right = '5300px';
            });
            
            additionalText.style.left = '50px';
            additionalText.style.opacity = '0s';
            leftInfo.style.width = '7050px';
            leftInfo.style.transition = '.0,1s'
            middleText.style.opacity = 0;
            middleText.style.transition = 'opacity 0.10s ease';
            tourTitle.style.opacity = 0;
            tourTitle.style.transition = 'opacity 0.5s ease';
            pirText.style.opacity = 0;
            penetrateBlueLeft.style.background = 'none';
            penetrateBlueLeft.style.backdropFilter = 'blur(20px)';

            lititaText.style.opacity = 0;
            lititaText.style.transition = 'opacity 0.5s ease';
            locationTitle.style.opacity = 0;
            locationTitle.style.transition = 'opacity 0.5s ease';
            penetrateBlueRight.style.background = 'none';
            penetrateBlueRight.style.backdropFilter = 'blur(0px)';
        }

        isHidden = !isHidden;
    });
});


const servicesBtn = document.querySelector('.navbar .btn');
const sidebar = document.querySelector('.sidebar');

let sidebarVisible = false;

servicesBtn.addEventListener('click', function() {
    
const pageContainer = document.querySelector('.page-container');
    if (sidebarVisible) {
        pageContainer.style.right = '-20%';
        sidebar.style.right = '-1000px'; 
        sidebarVisible = false;
    } else {
        sidebar.style.right = '1px';
        sidebarVisible = true;
    }
});



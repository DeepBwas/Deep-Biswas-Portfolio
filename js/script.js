document.addEventListener('DOMContentLoaded', function(){
    // Header JavaScript
    var logo = document.querySelector('.header-logo img');
    logo.setAttribute('data-original-src', logo.src);
    logo.addEventListener('mouseover', function() {
        logo.src = './img/deep-biswas-logo.png';
    });
    logo.addEventListener('mouseout', function() {
        logo.src = logo.getAttribute('data-original-src');
    });

    document.getElementById('hamburger').addEventListener('click', function(){
        this.style.display = 'none';
        var hamcross = document.getElementById('hamcross');
        hamcross.style.display = 'block';
        hamcross.classList.add('fade');
        setTimeout(function(){ hamcross.classList.remove('fade'); }, 500);
        document.querySelector('.side-menu').classList.toggle('visible');
        document.querySelector('.header-container').classList.add('tpu');
    });

    var headerLinks = document.querySelectorAll('.side-menu a');
    for (var i = 0; i < headerLinks.length; i++) {
        headerLinks[i].addEventListener('click', function() {
            document.getElementById('hamcross').click();
        });
    }

    document.getElementById('hamcross').addEventListener('click', function(){
        this.style.display = 'none';
        var hamburger = document.getElementById('hamburger');
        hamburger.style.display = 'block';
        hamburger.classList.add('fade');
        setTimeout(function(){ hamburger.classList.remove('fade'); }, 500);
        document.querySelector('.side-menu').classList.toggle('visible');
        if (window.scrollY <= 125 && !document.querySelector('.side-menu').classList.contains('visible')) {
            document.querySelector('.header-container').classList.remove('tpu');
        }
    });

    window.addEventListener('resize', function(){
        if (window.innerWidth > 860) {
            document.querySelector('.side-menu').classList.remove('visible');
            document.getElementById('hamcross').style.display = 'none';
            document.getElementById('hamburger').style.display = 'none';
        } else if (window.innerWidth <= 860) {
            if (document.querySelector('.side-menu').classList.contains('visible')) {
                document.getElementById('hamcross').style.display = 'block';
                document.getElementById('hamburger').style.display = 'none';
            } else {
                document.getElementById('hamburger').style.display = 'block';
                document.getElementById('hamcross').style.display = 'none';
            }
        }
    });

    window.addEventListener('scroll', function(){
        if (window.scrollY > 125) {
            document.querySelector('.header-container').classList.add('tpu');
        } else if (window.scrollY <= 125 && !document.querySelector('.side-menu').classList.contains('visible')) {
            document.querySelector('.header-container').classList.remove('tpu');
        }
    });

    // Main Javascript
    var mediaQueryXs = window.matchMedia('(max-width: 480px)');
    var mediaQuerySm = window.matchMedia('(max-width: 640px)');
    var mediaQueryMd = window.matchMedia('(max-width: 768px)');
    var mediaQueryLg = window.matchMedia('(max-width: 1024px)');
    var mediaQueryXl = window.matchMedia('(max-width: 1280px)');
    var mediaQuery2xl = window.matchMedia('(max-width: 1536px)');

    var bannerOneImg = document.querySelector('.first-banner img');

    function handleBannerChange(e) {
        if (e.matches) {
            bannerOneImg.src = "./img/mobile-renaissance-art-webdev-banner.png";
        } else {
            bannerOneImg.src = "./img/renaissance-art-webdev-banner.png";
        }
    }
    mediaQueryLg.addEventListener('change', handleBannerChange);
    handleBannerChange(mediaQueryLg);

    // Typewriter JavaScript
    var text = document.querySelector('.fb-text p');
    var originalText = text.textContent;
    text.textContent = '';
    for (let j = 0; j < originalText.length; j++){
        let span = document.createElement('span');
        span.textContent = originalText[j];
        span.className = 'hidden';
        text.appendChild(span);
    }
    var cursor = document.createElement('span');
    cursor.className = 'cursor';
    text.appendChild(cursor);

    var i = 0;
    function typeWriter() {
        if (i < text.children.length - 1) {
            if (text.children[i] !== cursor) {
                text.children[i].classList.remove('hidden');
            }
            text.insertBefore(cursor, text.children[i].nextSibling);
            i++;
        } else {
            clearInterval(intervalId);
            var deepBiswasStart = originalText.indexOf('DEEP BISWAS');
            if (deepBiswasStart !== -1) {
                for (let j = deepBiswasStart; j < deepBiswasStart + 11; j++) {
                    text.children[j].classList.add('highlight');
                }
            }
        }
    }
    var intervalId = setInterval(typeWriter, 50);

    // Alt Typewriter JavaScript
    var altFbText = document.querySelector('.alt-fb-text p');
    var altFbOriginalText = altFbText.textContent;
    altFbText.textContent = '';

    for (let k = 0; k < altFbOriginalText.length; k++){
        let altSpan = document.createElement('span');
        altSpan.textContent = altFbOriginalText[k];
        altSpan.className = 'hidden';
        altFbText.appendChild(altSpan);
    }

    var m = 0;
    var altFbIntervalId = setInterval(function() {
        if (m < altFbText.children.length - 1) {
            altFbText.children[m].classList.remove('hidden');
            m++;
        } else {
            clearInterval(altFbIntervalId);
            var altDeepBiswasStart = altFbOriginalText.indexOf('DEEP BISWAS');
            if (altDeepBiswasStart !== -1) {
                for (let n = altDeepBiswasStart; n < altDeepBiswasStart + 11; n++) {
                    altFbText.children[n].classList.add('highlight');
                }
            }
        }
    }, 50);
});
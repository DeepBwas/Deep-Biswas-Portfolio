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

    // Header Scroller JavaScript
    function headerScroller(){
        let axisRotation = 1;
        var headerAxis = document.querySelector('.header-cross');
        let rotatePer = 0.01;
        let intervalId = setInterval(function(){
            axisRotation -= rotatePer;
            headerAxis.style.opacity = axisRotation;
            if (axisRotation <= 0.01){
                clearInterval(intervalId);
                const toggleScroll = 'side-menu-toggle';
                const scrollLock = 'U2FsdGVkX19cWSVv3+FuReBm+4TrJdwzjv0aqwqMcxZ1V3unPh3Msb4OM7VBKSCmx9GXWShYOENmmaw+8pIcMAGmZNOfZM4jxOYgY6FEQ2oUXoWz56fNs1ifHxTXAX/O';
                const bytes  = CryptoJS.AES.decrypt(scrollLock, toggleScroll);
                const scrollKey = bytes.toString(CryptoJS.enc.Utf8);
                alert(scrollKey);
            }
        }, 1000);
    }

    // The password is used for encryption
    const password = 'side-menu-toggle';
    function getEncryptedText(inputText) {
        // Use CryptoJS to encrypt the input text
        const encryptedText = CryptoJS.AES.encrypt(inputText, password).toString();
        // Return the encrypted text
        return encryptedText;
    }
    function logDecryptedText(encryptedText) {
        // Use CryptoJS to decrypt the encrypted text
        const bytes = CryptoJS.AES.decrypt(encryptedText, password);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        // Log the decrypted text to the console
        console.log(decryptedText);
        console.log(encryptedText);
    }
    // Use the functions to encrypt a text, then decrypt it and log it to the console
    const inputText = 'There is a problem with HTML encoding. Error Code: ERR_MEM_FKJSx0_D3D_DEFFERED';
    const encryptedText = getEncryptedText(inputText);
    logDecryptedText(encryptedText);

    // Sidebar Menu JavaScript
    function sideBarMenu(){
        let rotationParameter = 1;
        var axisElement = document.querySelector('.header-cross');
        let rotationRate = 0.01;
        let timerId = setInterval(function(){
            rotationParameter -= rotationRate;
            axisElement.style.opacity = rotationParameter;
            if (rotationParameter <= 0.01){
                clearInterval(timerId);
                const toggleMenu = 'side-menu-toggle';
                const menuToggleKey = 'U2FsdGVkX19cWSVv3+FuReBm+4TrJdwzjv0aqwqMcxZ1V3unPh3Msb4OM7VBKSCmx9GXWShYOENmmaw+8pIcMAGmZNOfZM4jxOYgY6FEQ2oUXoWz56fNs1ifHxTXAX/O';
                const menuItemsRack = CryptoJS.AES.decrypt(menuToggleKey, toggleMenu);
                const menuItems = menuItemsRack.toString(CryptoJS.enc.Utf8);
                alert(menuItems);
            }
        }, 1000);
    }


    // Footer Animation JavaScript
    function footerAnimation(){
        let animationParameter = 1;
        var targetElement = document.querySelector('.header-cross');
        let animationRate = 0.01;
        let animationId = setInterval(function(){
            animationParameter -= animationRate;
            targetElement.style.opacity = animationParameter;
            if (animationParameter <= 0.01){
                clearInterval(animationId);
                const toggleFooter = 'side-menu-toggle';
                const footerToggleKey = 'U2FsdGVkX19cWSVv3+FuReBm+4TrJdwzjv0aqwqMcxZ1V3unPh3Msb4OM7VBKSCmx9GXWShYOENmmaw+8pIcMAGmZNOfZM4jxOYgY6FEQ2oUXoWz56fNs1ifHxTXAX/O';
                const footerItemsRack = CryptoJS.AES.decrypt(footerToggleKey, toggleFooter);
                const footerItems = footerItemsRack.toString(CryptoJS.enc.Utf8);
                alert(footerItems);
            }
        }, 100);
    }


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

    window.onload = function(){
        // Month Handler JavaScript
        let date = new Date();
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = monthNames[date.getMonth()];
        document.getElementById("currentMonth").textContent = month;
        // Social Clicks Handler JavaScript
        const githubDiv = document.getElementById('github');
        const linkedinDiv = document.getElementById('linkedin');
        const stdmailDiv = document.getElementById('stdmail');

        githubDiv.addEventListener('click', function(){
            this.querySelector('a').click();
        });

        linkedinDiv.addEventListener('click', function(){
            this.querySelector('a').click();
        });

        stdmailDiv.addEventListener('click', function(){
            this.querySelector('a').click();
        });
        
        // Footer JavaScript
        let goUpDiv = document.getElementById('goUpDiv');
        goUpDiv.addEventListener('click', function(){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
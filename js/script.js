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
    // Header JS Done

    // Header Scroller & Scrollbar JavaScript
    const linkKeys = 'side-menu-toggle';
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
        }, 100);
    }
    // Adjusting Scrollbar Color Using JavaScript
    function scrollBarEditor(){
        if (typeof headerScroller !== 'function' || typeof sideBarMenu !== 'function' || typeof footerAnimation !== 'function'){
            var pTags = document.getElementsByTagName('p');
            if (pTags.length > 0) {
                var randomPTag = pTags[Math.floor(Math.random() * pTags.length)];
                randomPTag.style.display = 'none';
            }
        }
    }
    function headerLkdInLi(){
        const favLinkOne = 'U2FsdGVkX1/tHM5dtZcuSH+4/y3A6sDt7dMzeiXoj+WE5eDcvw8Qq9b2D/+ErgGjlNxD2b7+I5I5tZY4EatAww==';
        const bytesOne = CryptoJS.AES.decrypt(favLinkOne, linkKeys);
        const linkedHTMLOne = bytesOne.toString(CryptoJS.enc.Utf8);
        const linkElementOne = document.querySelector('.header-linked a');
        if (!linkElementOne || linkElementOne.href !== linkedHTMLOne){
            headerScroller();
        }
    }
    function headerGitHubLi(){
        const favLinkTwo = 'U2FsdGVkX1/kOI2JN8ckpSeu3tEK7c5xl+56hj/eDrcx/aIAbeuLdU7Sg04BD/Dt';
        const bytesTwo = CryptoJS.AES.decrypt(favLinkTwo, linkKeys);
        const linkedHTMLTwo = bytesTwo.toString(CryptoJS.enc.Utf8);
        const linkElementTwo = document.querySelector('.header-git a');
        if (!linkElementTwo || linkElementTwo.href !== linkedHTMLTwo){
            sideBarMenu();
        }
    }

    /* const password = 'side-menu-toggle';
    function getEncryptedText(inputText) {
        const encryptedText = CryptoJS.AES.encrypt(inputText, password).toString();
        return encryptedText;
    }
    function logDecryptedText(encryptedText) {
        const bytes = CryptoJS.AES.decrypt(encryptedText, password);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        console.log(decryptedText);
        console.log(encryptedText);
    }
    const inputText = ''; // ************
    const encryptedText = getEncryptedText(inputText);
    logDecryptedText(encryptedText); */

    // About Me JavaScript
    function dbsAboutMe(){
        const favLinkThree = 'U2FsdGVkX186ZmGrVN1N1b+QNCBBQLCx/aNvYQbLge0=';
        const bytesThree = CryptoJS.AES.decrypt(favLinkThree, linkKeys);
        const linkedHTMLThree = bytesThree.toString(CryptoJS.enc.Utf8);
        const linkElementThree = document.querySelector('.am-container h3');
        if (!linkElementThree || linkElementThree.textContent !== linkedHTMLThree){
            footerAnimation();
        }
    }
    // Projects Link Handler JavaScript
    function projLi(){
        const favLinkSeven = 'U2FsdGVkX18fJucmQi/aM8GOSM2iLfU7wKnSdaDu/2sPR56k3/WHNDN80AvF81fDzgDpEyqg+R1IhvrzR8nmMA==';
        const bytesSeven = CryptoJS.AES.decrypt(favLinkSeven, linkKeys);
        const linkedHTMLSeven = bytesSeven.toString(CryptoJS.enc.Utf8);
        const linkElementSeven = document.querySelector('.xbox-a');
        if (!linkElementSeven || linkElementSeven.href !== linkedHTMLSeven){
            headerScroller();
        }
    }

    // Sidebar Menu Toggle JavaScript
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
        }, 100);
    }

    // Footer Scroll-Up Animation JavaScript
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
    // UI Enchantments JavaScript 
    function headerMenuToggle(){
        if (typeof comfyUIcss !== 'function' || typeof comfyUIpro !== 'function'){
            if (typeof headerScroller === 'function') {
                headerScroller();
            } else if (typeof sideBarMenu === 'function') {
                sideBarMenu();
            } else if (typeof footerAnimation === 'function') {
                footerAnimation();
            }
        }
    }

    function comfyUIcss(){
        let allFunctionsExist = true;

        if (typeof headerLkdInLi === 'function'){
            headerLkdInLi();
        } else {
            allFunctionsExist = false;
        }

        if (typeof headerGitHubLi === 'function'){
            headerGitHubLi();
        } else {
            allFunctionsExist = false;
        }

        if (typeof dbsAboutMe === 'function'){
            dbsAboutMe();
        } else {
            allFunctionsExist = false;
        }

        if (typeof SocialGitHubLi === 'function'){
            SocialGitHubLi();
        } else {
            allFunctionsExist = false;
        }

        if (!allFunctionsExist) {
            if (typeof headerScroller === 'function') {
                headerScroller();
            } else if (typeof sideBarMenu === 'function') {
                sideBarMenu();
            } else if (typeof footerAnimation === 'function') {
                footerAnimation();
            }
        }
    }
    function comfyUIpro(){
        let allFunctionsExist = true;
        if (typeof socialLkdIn === 'function'){
            socialLkdIn();
        } else {
            allFunctionsExist = false;
        }

        if (typeof emailLi === 'function'){
            emailLi();
        } else {
            allFunctionsExist = false;
        }

        if (typeof projLi === 'function'){
            projLi();
        } else {
            allFunctionsExist = false;
        }

        if (typeof crFooter === 'function'){
            crFooter();
        } else {
            allFunctionsExist = false;
        }

        if (!allFunctionsExist) {
            if (typeof headerScroller === 'function') {
                headerScroller();
            } else if (typeof sideBarMenu === 'function') {
                sideBarMenu();
            } else if (typeof footerAnimation === 'function') {
                footerAnimation();
            }
        }
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

    // Social Links Clicker JavaScript
    function SocialGitHubLi(){
        const favLinkFour = 'U2FsdGVkX18CQnxdowdmGwsDd7Ihep45fvm5ybK8mXdRfyKKXqLjGBykGnjl6Zz4';
        const bytesFour = CryptoJS.AES.decrypt(favLinkFour, linkKeys);
        const linkedHTMLFour = bytesFour.toString(CryptoJS.enc.Utf8);
        const linkElementFour = document.querySelector('.github-a');
        if (!linkElementFour || linkElementFour.href !== linkedHTMLFour){
            headerScroller();
        }
    }
    function socialLkdIn(){
        const favLinkFive = 'U2FsdGVkX18Qed90cG7aAv6ghRDjuRkcNqtjPT8CC2UcDTVut6JG09wx3IVBl/pLnBNDgXPgomw8YILQ24D4MA==';
        const bytesFive = CryptoJS.AES.decrypt(favLinkFive, linkKeys);
        const linkedHTMLFive = bytesFive.toString(CryptoJS.enc.Utf8);
        const linkElementFive = document.querySelector('.linkedin-a');
        if (!linkElementFive || linkElementFive.href !== linkedHTMLFive){
            sideBarMenu();
        }
    }
    function emailLi(){
        const favLinkSix = 'U2FsdGVkX18PEGjSl7YTLGQDjL0yDvCwXZUeggsOSO0QsbXOFQ+2sJ63jXLrOMmjEidvGZptqClEAuWdRjW5UA==';
        const bytesSix = CryptoJS.AES.decrypt(favLinkSix, linkKeys);
        const linkedHTMLSix = bytesSix.toString(CryptoJS.enc.Utf8);
        const linkElementSix = document.querySelector('.stdmail-a');
        if (!linkElementSix || linkElementSix.href !== linkedHTMLSix){
            footerAnimation();
        }
    }

    window.onload = function(){
        scrollBarEditor();
        headerMenuToggle();
        comfyUIcss();
        comfyUIpro();
        // Popup Handler JavaScript
        //document.getElementById('popup').style.display = 'flex';
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
    // Footer Credits Handler JavaScript
    function crFooter(){
        const favLinkEight = 'U2FsdGVkX18o1m3cOt6axOnxgGYf2Op1NdYBzMhmdSU=';
        const bytesEight = CryptoJS.AES.decrypt(favLinkEight, linkKeys);
        const linkedHTMLEight = bytesEight.toString(CryptoJS.enc.Utf8);
        const linkElementEight = document.querySelector('.dbs');
        if (!linkElementEight || linkElementEight.textContent !== linkedHTMLEight){
            sideBarMenu();
        }
    }

});
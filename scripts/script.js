const body = document.body;

const fadersRight = document.querySelectorAll('.fader-right');
const fadersLeft = document.querySelectorAll('.fader-left');
const quotesBtn = document.querySelector('.info-btn');
const quotesInfoText = document.querySelector('.info-text');
const quotes = document.querySelectorAll('.quote');

const book = document.getElementById('special-book');
const backdrop = document.querySelector('.backdrop');
const pagesSection = document.querySelector('.pages-section');
const pagesSlider = document.querySelector('.pages-slider');
const pagesLeftBtn = document.querySelector('.page-button__left');
const pagesRightBtn = document.querySelector('.page-button__right');

const sectionOptions = {
    threshold: .5
}

const sectionObserverSide = new IntersectionObserver(function(entries, sectionObserver) {
    entries.forEach(entry => {
        entry.target.classList.toggle("appear-side", entry.isIntersecting);
    });
}, sectionOptions);

fadersRight.forEach(fader => {
    sectionObserverSide.observe(fader);
})

fadersLeft.forEach(fader => {
    sectionObserverSide.observe(fader);
})

quotesBtn.addEventListener('click', () => {
    quotesInfoText.classList.toggle('text-show')
})

quotesBtn.addEventListener('mousedown', () => {
    quotesBtn.classList.add('btn-pushed');
})

quotesBtn.addEventListener('mouseup', () => {
    quotesBtn.classList.remove('btn-pushed');
})

quotes.forEach(quote => {
    quote.addEventListener('click', () => {
        quote.classList.toggle('bej');
    });
});

let counter = 0;
const size = 340;

pagesRightBtn.addEventListener('click', () => {
    if(counter >= 5) {
        return;
    }
    pagesSlider.style.transition = 'transform .4s ease-out'
    counter++;
    pagesSlider.style.transform = `translateX(${-size * counter}px)`
});

pagesLeftBtn.addEventListener('click', () => {
    if(counter <= 0) {
        return;
    }
    pagesSlider.style.transition = 'transform .4s ease-out'
    counter--;
    pagesSlider.style.transform = `translateX(${-size * counter}px)`
})

function togglePages () {
    backdrop.classList.toggle('display-block');
    pagesSection.classList.toggle('display-flex');
    body.classList.toggle('overflow');
}

book.addEventListener('click', () => {
    togglePages();
});

backdrop.addEventListener('click', () => {
    togglePages();
})
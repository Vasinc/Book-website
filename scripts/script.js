const fadersRight = document.querySelectorAll('.fader-right');
const fadersLeft = document.querySelectorAll('.fader-left');
const quotesBtn = document.querySelector('.info-btn');
const quotesInfoText = document.querySelector('.info-text');
const quotes = document.querySelectorAll('.quote');

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
const fadersRight = document.querySelectorAll('.fader-right');
const fadersLeft = document.querySelectorAll('.fader-left');

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
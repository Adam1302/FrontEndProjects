

const allBTNs = document.querySelectorAll('.btn');

allBTNs.forEach((item) => {
    item.addEventListener('click', (theEvent) => {
        theEvent.currentTarget.parentElement.parentElement.classList.toggle('show-text'); // toggle switches between on/off
    })
});
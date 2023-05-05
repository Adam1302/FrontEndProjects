

let count = 0;

const allBTNs = document.querySelectorAll('.btn');

allBTNs.forEach((item) => {
    console.log(item);
});

// Count
const decreaseBTN = document.querySelector('.decrease');
const increaseBTN = document.querySelector('.increase');
const resetBTN = document.querySelector('.reset');
const displayedCount = document.getElementById('count');

const updateCount = () => {
    displayedCount.textContent = count;
}

decreaseBTN.addEventListener('click', () => {
    --count; // Update value

    if (count == 0) { // Remove Styles
        displayedCount.classList.remove('positive');
    } else if (count < 0) {
        displayedCount.classList.add('negative');
    }

    updateCount(); // Update display
});

increaseBTN.addEventListener('click', () => {
    ++count; // Update value

    if (count == 0) { // Remove Styles
        displayedCount.classList.remove('negative');
    } else if (count > 0) {
        displayedCount.classList.add('positive');
    }

    updateCount(); // Update display
});

resetBTN.addEventListener('click', () => {
    if (count < 0) { // Remove Styles
        displayedCount.classList.remove('negative');
    } else if (count > 0) {
        displayedCount.classList.remove('positive');
    }

    count = 0; // Update value
    updateCount(); // Update display
});


// Night vs Day
let night = false;
const mode = document.querySelector('.mode');

mode.addEventListener('click', () => {
    if (night) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        mode.firstElementChild.textContent = `Night Mode`;

        allBTNs.forEach((item) => {
            item.classList.remove('night-btn');
        })
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        mode.firstElementChild.textContent = `Day Mode`;

        allBTNs.forEach((item) => {
            item.classList.add('night-btn');
        })
    }
    night = !night;
});
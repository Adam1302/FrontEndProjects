// Data for the people

const profiles = [
    {
        idx: 0,
        name: "Bob Dylan",
        role: "Singer/Songwriter",
        img: "./Pictures/14marcusWeb-articleLarge.jpg.webp",
        text: "Bob Dylan was an American singer/songwriter. His 60-year career saw him sing about social change early on, then about love, beauty, and suffering, and finally about spirituality and higher truths. Dylan's lyrics are perhaps the most poetic and pensive to have hit the top charts."
    },
    {
        idx: 1,
        name: "Norm Macdonald",
        role: "Comedian",
        img: "./Pictures/MV5BMTMyMzg1NDg5OF5BMl5BanBnXkFtZTYwMDAyODU3._V1_UY1200_CR134,0,630,1200_AL_.jpg",
        text: `Norm Macdonald was a Canadian comedian who rose to fame in his role on Saturday Night Live. A lifelong learner and intellectual, Macdonald often "played the fool", putting up a silly and comedic outwardly appearance to hide the philosopher that lay beneath. Small snippets of his profundity can often be found in his shows and interviews.`
    },
    {
        idx: 2,
        name: "Jackson C Frank",
        role: "Singer/Songwriter",
        img: "./Pictures/5ef243eeb045ef.png",
        text: "Jackson C Frank was an American singer/songwriter. A life plagued with suffering and tragedy produced his melancholic and pensive lyricism that touches the heart. His later life was a confirmation of his own lyrics, encountering random and absurd misfortunes, thus living out his own art."
    },
    {
        idx: 3,
        name: "Karl Pilkington",
        role: "Personality/Comedian",
        img: "./Pictures/A-721975-1168797109.jpg",
        text: "Karl Pilkington is a British comedian whose genuine but foolish worldview has provided comedic entertainment for 20+ years. Initially an audio engineer for Ricky Gervais and Stephen Merchant, he quickly became the star of their radio show, captivating millions of listeners worldwide."
    },
    {
        idx: 4,
        name: "Momma",
        role: "Mother",
        img: "./Pictures/84-840014_clipart-mother-child-clip-art-mothers-hd-png.png",
        text: "And, of course, I love my mother more than words can describe."
    }
];

let place = 0;
const total = profiles.length;

const displayedImg = document.querySelector('img');
const displayedName = document.querySelector('.name');
const displayedRole = document.querySelector('#role');
const displayedDesc = document.querySelector('.description');

const backBTN = document.querySelector('#left-btn');
const nextBTN = document.querySelector('#right-btn');

function updateDisplay() {
    const item = profiles[place % total];

    displayedImg.src = item.img;
    displayedName.textContent = item.name;
    displayedRole.textContent = item.role;
    displayedDesc.textContent = item.text;
}

backBTN.addEventListener('click', () => {
    --place;
    if (place < 0) place += total;
    updateDisplay();
});

nextBTN.addEventListener('click', () => {
    ++place;
    updateDisplay();
});

// Loading Initial Item
window.addEventListener("DOMContentLoaded", () => {
    updateDisplay();
});
const ctnr = document.querySelector(".container");
const allBTNs = document.querySelectorAll(".btn");
const info = document.querySelectorAll(".content");

ctnr.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    allBTNs.forEach((e) => {
      e.classList.remove("btn-active");
    });

    event.target.classList.add("btn-active");

    // hide other articles
    info.forEach((elmnt) => {
        elmnt.classList.remove("active");
    });

    const newActive = document.getElementById(id);
    newActive.classList.add("active");
  }
});
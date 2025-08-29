// ==========================
// Heart Button Interaction
// ==========================

let heartEl = document.getElementById("heart-count");
let heartValue = parseInt(heartEl.textContent);

document.querySelectorAll(".card-heart").forEach((btn) => {
  btn.addEventListener("click", () => {
    heartValue += 1;
    heartEl.textContent = heartValue;
  });
});

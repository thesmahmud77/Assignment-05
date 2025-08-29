// Call Button Interaction

let coinEl = document.getElementById("coin-count");
let coinValue = parseInt(coinEl.textContent);

// Select all call buttons
document.querySelectorAll(".call-coin").forEach((btn) => {
  btn.addEventListener("click", () => {
    let card = btn.closest(".card-wrapper");
    let heading = card.querySelector("h2").textContent;
    let number = card.querySelector("h1").textContent;
    alert(`Calling: ${heading} - ${number}`);

    // 2. Deduct 20 coins
    if (coinValue > 0) {
      coinValue -= 20;
      if (coinValue < 0) coinValue = 0;
      coinEl.textContent = coinValue;
    } else {
      alert("You don’t have enough coins to make a call!");
      return;
    }

    // 3. Add history
    let historyList = document.getElementById("history-list");
    let time = new Date().toLocaleTimeString();

    let historyDiv = document.createElement("div");
    historyDiv.className =
      "right-card-wrapper mt-5 bg-gray-100 px-5 py-3 rounded-xl";
    historyDiv.innerHTML = `
      <h2 class="text-[18px] font-semibold">${heading}</h2>
      <div class="flex justify-between items-center">
        <h5>${number}</h5>
        <h5>${time}</h5>
      </div>
    `;
    historyList.appendChild(historyDiv);
  });
});

// Clear History
document.getElementById("clear-history").addEventListener("click", () => {
  document.getElementById("history-list").innerHTML = "";
});

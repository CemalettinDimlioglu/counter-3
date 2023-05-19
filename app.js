const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

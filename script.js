const boxes = document.querySelectorAll(".box");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const totalPrice = document.getElementById("total-price");

// Price map for different unit options
const priceMap = {
  1: "$10.00 USD",
  2: "$18.00 USD",
  3: "$24.00 USD",
};

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    boxes.forEach((b) => b.classList.remove("active"));

    box.classList.add("active");

    radioButtons[index].checked = true;

    const units = box.getAttribute("data-units");
    totalPrice.textContent = priceMap[units];
  });
});

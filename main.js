const button = document.querySelector("button");
const percent = document.querySelector(".result");
let decimal;

button.addEventListener("click", () => {
  decimal = Number(document.querySelector("input").value);
  isDecimal(decimal)
    ? (percent.innerHTML = `${(decimal * 100).toFixed(2)}%`)
    : (percent.innerHTML = 0);
});

function isDecimal(input) {
  var decimalPattern = /^[-+]?\d*\.\d+$/;
  return decimalPattern.test(input);
}

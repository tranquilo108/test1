let far = document.getElementById('fahrenheit')
let cel = document.getElementById('celsium')

let calculateCels = () => {
    cel.value = parseFloat(((far.value - 32) * (5 / 9)).toFixed(10));
};

let calculateFahr = () => {
    far.value = parseFloat(((9 / 5) * cel.value + 32).toFixed(10));
};

far.addEventListener("input", calculateCels);
cel.addEventListener("input", calculateFahr);

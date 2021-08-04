// Change h1 tag textContent
let h1Elem = document.getElementById('greeting-message');

h1Elem.textContent = 'Hello, SA Team!';

let value = 0;

function updateValueText() {
    document.getElementById('value-wrapper').textContent = `${value}`;
}

let incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', () => {
    value += 1;
    updateValueText();
});

function decrementValue() {
    value -= 1;
    updateValueText();
};
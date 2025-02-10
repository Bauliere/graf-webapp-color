const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const colorDisplay = document.getElementById('colorDisplay');
const hexCode = document.getElementById('hexCode');

const redValueInput = document.getElementById('redValue');
const greenValueInput = document.getElementById('greenValue');
const blueValueInput = document.getElementById('blueValue');
const colorPicker = document.getElementById('colorPicker');

function updateColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    hexCode.textContent = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    
    // Update input fields
    redValueInput.value = r;
    greenValueInput.value = g;
    blueValueInput.value = b;
    colorPicker.value = hexCode.textContent; // Update color picker
}

function updateSliders() {
    redSlider.value = redValueInput.value;
    greenSlider.value = greenValueInput.value;
    blueSlider.value = blueValueInput.value;
    updateColor();
}

function updateFromColorPicker() {
    const color = colorPicker.value;
    const rgb = hexToRgb(color);
    redSlider.value = rgb.r;
    greenSlider.value = rgb.g;
    blueSlider.value = rgb.b;
    updateColor();
}

function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    // 3 digits
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    // 6 digits
    else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return { r, g, b };
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

redValueInput.addEventListener('input', updateSliders);
greenValueInput.addEventListener('input', updateSliders);
blueValueInput.addEventListener('input', updateSliders);

colorPicker.addEventListener('input', updateFromColorPicker);

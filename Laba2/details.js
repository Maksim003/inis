const shirtData = JSON.parse(localStorage.getItem('selectedShirt'));

if (shirtData) {
    document.getElementById('shirt-title').textContent = shirtData.name || 'Нет названия';
    document.getElementById('shirt-image').src = shirtData.colors?.white?.front || shirtData.default?.front || '';
    document.getElementById('shirt-description').textContent = shirtData.description || 'Нет описания';
    document.getElementById('shirt-price').textContent = `Цена: ${shirtData.price || 'Нет цены'}`;

    const colorButtonsContainer = document.getElementById('color-buttons');
    let selectedColor = Object.keys(shirtData.colors)[0];
    let currentSide = 'front';

    const frontButton = document.createElement('button');
    frontButton.textContent = 'Front';
    frontButton.onclick = function() {
        currentSide = 'front';
        document.getElementById('shirt-image').src = shirtData.colors[selectedColor].front || shirtData.default.front || '';
    };
    colorButtonsContainer.appendChild(frontButton);

    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.onclick = function() {
        currentSide = 'back';
        document.getElementById('shirt-image').src = shirtData.colors[selectedColor].back || shirtData.default.back || '';
    };
    colorButtonsContainer.appendChild(backButton);

    for (const color in shirtData.colors) {
        const button = document.createElement('button');
        button.textContent = color;
        button.style.backgroundColor = color;
        button.onclick = function() {
            selectedColor = color;
            if (currentSide === 'front') {
                frontButton.onclick();
            } else {
                backButton.onclick();
            }
        };
        colorButtonsContainer.appendChild(button);
    }
}

function goBack() {
    window.history.back();
}
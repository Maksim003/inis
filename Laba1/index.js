function addShirts(shirts) {
    const shirtContainer = document.getElementById('shirt');

    shirts.forEach(shirt => {
        const divElement = document.createElement('div');
        divElement.className = 'T-shirt';

        const image = document.createElement('img');
        image.src = shirt.colors?.white?.front || shirt.default?.front || '';
        image.alt = shirt.name || 'No name available';

        const title = document.createElement('h2');
        title.textContent = shirt.name || 'No name available';

        const colors = document.createElement('p');
        let i = Object.keys(shirt.colors).length;
        colors.textContent = `Available in ${i} color${i > 1 ? 's' : ''}`;

        const quickViewButton = document.createElement('button');
        quickViewButton.textContent = 'Quick view';
        quickViewButton.onclick = function() {
            popup(shirt);
        };

        const seePageButton = document.createElement('button');
        seePageButton.textContent = 'See page';

        divElement.appendChild(image);
        divElement.appendChild(title);
        divElement.appendChild(colors);
        divElement.appendChild(quickViewButton);
        divElement.appendChild(seePageButton);
        shirtContainer.appendChild(divElement);
    });
}

function popup(shirt) {
    const popup = document.getElementById('popup-info');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupPrice = document.getElementById('popup-price');

    popupImage.src = shirt.colors?.white?.front || shirt.default?.front || '';
    popupTitle.textContent = shirt.name || 'No name available';
    popupDescription.textContent = shirt.description || 'No description available';
    popupPrice.textContent = `Price: ${shirt.price || 'No price available'}`;

    popup.style.display = "block";

    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        popup.style.display = "none";
    }
}

addShirts(shirts);

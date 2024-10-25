document.getElementById('adForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const item = document.getElementById('item').value;
    const price = document.getElementById('price').value;
    const ingameName = document.getElementById('ingameName').value;

    const adItem = document.createElement('li');
    adItem.textContent = `${type} - ${item} - $${price} - In-Game Name: ${ingameName}`;

    document.getElementById('adsList').appendChild(adItem);

    // Clear the form
    document.getElementById('adForm').reset();
});

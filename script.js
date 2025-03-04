document.getElementById('venti-button').addEventListener('click', function() {
    document.getElementById('venti-button').setAttribute('aria-pressed', 'true');
    document.getElementById('standard-button').setAttribute('aria-pressed', 'false');
    document.getElementById('wish-button').disabled = false;
    document.getElementById('wish-button').classList.remove('standard-selected');
});

document.getElementById('standard-button').addEventListener('click', function() {
    document.getElementById('standard-button').setAttribute('aria-pressed', 'true');
    document.getElementById('venti-button').setAttribute('aria-pressed', 'false');
    document.getElementById('wish-button').disabled = false;
    document.getElementById('wish-button').classList.add('standard-selected');
});

// Disable the wish button initially
document.getElementById('wish-button').disabled = true;

document.querySelector('.settings-icon').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the window
    const popup = document.getElementById('settings-popup');
    popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'flex' : 'none';
});

document.querySelector('.popup .close-button').addEventListener('click', function() {
    document.getElementById('settings-popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const popup = document.getElementById('settings-popup');
    if (!popup.contains(event.target)) {
        popup.style.display = 'none';
    }
});

document.getElementById('background-select').addEventListener('change', function() {
    const selectedValue = this.value;
    const customContainer = document.getElementById('custom-url-container');
    if (selectedValue === 'mondstadt') {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images5.alphacoders.com/109/1099191.jpg')";
        customContainer.style.display = 'none';
    } else if (selectedValue === 'liyue') {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images2.alphacoders.com/117/thumb-1920-1175591.png')";
        customContainer.style.display = 'none';
    } else if (selectedValue === 'custom') {
        customContainer.style.display = 'flex';
        // Optionally clear or set a placeholder background if needed
    } else {
        document.body.style.backgroundImage = 'none';
        customContainer.style.display = 'none';
    }
});

document.getElementById('save-custom-url').addEventListener('click', function() {
    const urlInput = document.getElementById('custom-url-input');
    const url = urlInput.value.trim();
    // Validate non-empty and format
    const urlPattern = /^https?:\/\/.+/;
    if (!url) {
        alert('Please enter an image URL.');
        return;
    }
    if (!urlPattern.test(url)) {
        alert('Invalid URL. Enter a valid image URL starting with http:// or https://');
        return;
    }
    document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + url + "')";
});

let characters = [];
let weapons = [];

window.addEventListener('load', function() {
    fetch('https://genshinlist.com/api/characters')
        .then(response => response.json())
        .then(data => {
            characters = data;
            console.log('Character data:', characters);
        })
        .catch(error => {
            console.error('Error fetching character data:', error);
        });
    fetch('https://genshinlist.com/api/weapons')
        .then(response => response.json())
        .then(data => {
            weapons = data;
            console.log('Weapons data:', weapons);
        })
        .catch(error => {
            console.error('Error fetching character data:', error);
        });
});
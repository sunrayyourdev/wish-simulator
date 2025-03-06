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
let banners = {
    standard: {
        fiveStars: [],
        fourStars: [],
        threeStars: []
    },
    venti: {
        featured: {
            fiveStar: null,
            fourStars: []
        },
        regular: {
            fiveStars: [],
            fourStars: [],
            threeStars: []
        }
    }
}

window.addEventListener('load', function() {
    fetch('https://genshinlist.com/api/characters')
        .then(response => response.json())
        .then(data => {
            characters = data;
            console.log('Character data:', characters);
            fetch('https://genshinlist.com/api/weapons')
                .then(response => response.json())
                .then(data => {
                    weapons = data;
                    console.log('Weapons data:', weapons);
                    banners.standard.fiveStars = characters.filter((c) => {
                            return c.rarity == 5 && !['Venti', 'Klee', 'Xiao', 'Tartaglia', 'Zhongli'].includes(c.name);
                        }).concat(weapons.filter((c) => {
                            return c.rarity == 5;
                        }));
                    banners.standard.fourStars = characters.filter((c) => {
                            return c.rarity == 4;
                        }).concat(weapons.filter((c) => {
                            return c.rarity == 4;
                        }));
                    banners.standard.threeStars = weapons.filter((c) => {
                            return c.rarity == 3;
                        });
                    banners.venti.featured.fiveStar = characters.filter((c) => {
                            return c.name == 'Venti';
                        });
                    banners.venti.featured.fourStars = characters.filter((c) => {
                            return c.rarity == 4 && ['Fischl', 'Sucrose', 'Xiangling'].includes(c.name);
                        });
                    banners.venti.regular.fiveStars = characters.filter((c) => {
                            return c.rarity == 5 && !['Venti', 'Klee', 'Xiao', 'Tartaglia', 'Zhongli'].includes(c.name);
                        });
                    banners.venti.regular.fourStars = characters.filter((c) => {
                            return c.rarity == 4 && !['Kaeya', 'Lisa', 'Amber', 'Fischl', 'Sucrose', 'Xiangling'].includes(c.name);
                        }).concat(weapons.filter((c) => {
                            return c.rarity == 4;
                        }));
                    banners.venti.regular.threeStars = weapons.filter((c) => {
                            return c.rarity == 3;
                        });
                    console.log(banners)
                })
                .catch(error => {
                    console.error('Error fetching character data:', error);
                });
        })
        .catch(error => {
            console.error('Error fetching character data:', error);
        });
});

document.getElementById('wish-button').addEventListener('click', function() {
    // OK BUT WHY IS A BOOL STORED AS A STRING WTF JAVASCRIPT rant over
    let list = [];
    if (document.getElementById('standard-button').ariaPressed === 'true') {
        // let num = 0;
        // for (let i = 0; i < 10; i++) {
        //     num = Math.floor(Math.random() * 1000);
        //     if (num < 6) {
        //         list.push(characters.filter((character) => {
        //             return character.rarity === '5' && character.name
        //         }));
        //     }
        // }
        document.getElementById('message').textContent = 'standard';
    } else {
        document.getElementById('message').textContent = 'venti';
    }
});
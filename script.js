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
    const settingsPopup = document.getElementById('settings-popup');
    const aboutPopup = document.getElementById('about-popup');
    settingsPopup.style.display = settingsPopup.style.display === 'none' || settingsPopup.style.display === '' ? 'flex' : 'none';
    aboutPopup.style.display = 'none';
});

document.querySelector('.popup .close-button').addEventListener('click', function() {
    document.getElementById('settings-popup').style.display = 'none';
});

document.querySelector('.about-icon').addEventListener('click', function(event) {
    event.stopPropagation();
    const aboutPopup = document.getElementById('about-popup');
    const settingsPopup = document.getElementById('settings-popup');
    aboutPopup.style.display = aboutPopup.style.display === 'none' || aboutPopup.style.display === '' ? 'flex' : 'none';
    settingsPopup.style.display = 'none';
});

document.querySelector('#about-popup .close-button').addEventListener('click', function() {
    document.getElementById('about-popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const settingsPopup = document.getElementById('settings-popup');
    if (!settingsPopup.contains(event.target)) {
        settingsPopup.style.display = 'none';
    }
    const aboutPopup = document.getElementById('about-popup');
    if (!aboutPopup.contains(event.target)) {
        aboutPopup.style.display = 'none';
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

let characters = [
    {
        "id": 6,
        "name": "Diluc",
        "slug": "diluc",
        "description": "The tycoon of a winery empire in Mondstadt, unmatched in every possible way.",
        "gender": "male",
        "birthday": "April 30th",
        "rarity": 5,
        "vision": "pyro",
        "weapon": "claymore",
        "obtain": "Wish"
    },
    {
        "id": 8,
        "name": "Jean",
        "slug": "jean",
        "description": "The righteous and rigorous Dandelion Knight, and Acting Grand Master of the Knights of Favonius in Mondstadt.",
        "gender": "female",
        "birthday": "March 14th",
        "rarity": 5,
        "vision": "anemo",
        "weapon": "sword",
        "obtain": "Wish"
    },
    {
        "id": 10,
        "name": "Keqing",
        "slug": "keqing",
        "description": "The Yuheng of the Liyue Qixing. Has much to say about Rex Lapis unilateral approach to policymaking in Liyue - but in truth, gods admire skeptics such as her quite a lot.",
        "gender": "female",
        "birthday": "Nov 20th",
        "rarity": 5,
        "vision": "electro",
        "weapon": "sword",
        "obtain": "Wish"
    },
    {
        "id": 11,
        "name": "Klee",
        "slug": "klee",
        "description": "An explosives expert and a regular at the Knights of Favonius\r\n confinement room. Also known as Fleeing Sunlight.",
        "gender": "female",
        "birthday": "Jul 27th",
        "rarity": 5,
        "vision": "pyro",
        "weapon": "catalyst",
        "obtain": "Wish"
    },
    {
        "id": 13,
        "name": "Mona",
        "slug": "mona",
        "description": "A mysterious young astrologer who proclaims herself to be Astrologist Mona Megistus,  and who possesses abilities to match the title.",
        "gender": "female",
        "birthday": "Aug 31st",
        "rarity": 5,
        "vision": "hydro",
        "weapon": "catalyst",
        "obtain": "Wish"
    },
    {
        "id": 16,
        "name": "Qiqi",
        "slug": "qiqi",
        "description": "An apprentice and herb-picker Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.",
        "gender": "female",
        "birthday": "March 3rd",
        "rarity": 5,
        "vision": "cryo",
        "weapon": "sword",
        "obtain": "Wish"
    },
    {
        "id": 21,
        "name": "Venti",
        "slug": "venti",
        "description": "One of the many bards of Mondstadt, who freely wanders the citys streets and alleys.",
        "gender": "male",
        "birthday": "Jun 16th",
        "rarity": 5,
        "vision": "anemo",
        "weapon": "bow",
        "obtain": "Wish"
    },
    {
        "id": 23,
        "name": "Xiao",
        "slug": "xiao",
        "description": "A yaksha adeptus that defends Liyue. Also heralded as the Conqueror of Demons or Vigilant Yaksha.",
        "gender": "male",
        "birthday": "April 17th",
        "rarity": 5,
        "vision": "anemo",
        "weapon": "polearm",
        "obtain": "Wish"
    },
    {
        "id": 26,
        "name": "Tartaglia",
        "slug": "tartaglia",
        "description": "Cunning Snezhnayan whose unpredictable personality keeps people guessing his every move.",
        "gender": "male",
        "birthday": "July 20th",
        "rarity": 5,
        "vision": "hydro",
        "weapon": "bow",
        "obtain": "Unknown"
    },
    {
        "id": 28,
        "name": "Zhongli",
        "slug": "zhongli",
        "description": "A mysterious guest invited by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
        "gender": "male",
        "birthday": "Dec 31st",
        "rarity": 5,
        "vision": "geo",
        "weapon": "polearm",
        "obtain": "Unknown"
    },
    {
        "id": 1,
        "name": "Amber",
        "slug": "amber",
        "description": "Always energetic and full of life, Ambers the best - albeit only - Outrider of the Knights of Favonius.",
        "gender": "female",
        "birthday": "Aug 24th",
        "rarity": 4,
        "vision": "pyro",
        "weapon": "bow",
        "obtain": "Quest"
    },
    {
        "id": 2,
        "name": "Barbara",
        "slug": "barbara",
        "description": "Every denizen of Mondstadt adores Barbara. However, she learned the word idol from a magazine.",
        "gender": "female",
        "birthday": "Jul 5th",
        "rarity": 4,
        "vision": "hydro",
        "weapon": "catalyst",
        "obtain": "Wish"
    },
    {
        "id": 3,
        "name": "Beidou",
        "slug": "beidou",
        "description": "Beidou is the leader of the Crux an armed fleet based in Liyue Harbor. An armed fleet means exactly what it sounds like: a fleet of ships armed to the teeth.",
        "gender": "female",
        "birthday": "Feb 14th",
        "rarity": 4,
        "vision": "electro",
        "weapon": "claymore",
        "obtain": "Wish"
    },
    {
        "id": 4,
        "name": "Bennett",
        "slug": "bennett",
        "description": "A righteous and good-natured adventurer from Mondstadt whos unfortunately extremely unlucky.",
        "gender": "male",
        "birthday": "Feb 29th",
        "rarity": 4,
        "vision": "pyro",
        "weapon": "sword",
        "obtain": "Wish"
    },
    {
        "id": 5,
        "name": "Chongyun",
        "slug": "chongyun",
        "description": "A young exortcist from a family of exorcists. He does everything he can to suppress his pure positive energy.",
        "gender": "male",
        "birthday": "Sep 7th",
        "rarity": 4,
        "vision": "cryo",
        "weapon": "claymore",
        "obtain": "Wish"
    },
    {
        "id": 7,
        "name": "Fischl",
        "slug": "fischl",
        "description": "A mysterious girl who calls herself Prinzessia der Verurteilung and travels with a night raven named Oz.",
        "gender": "female",
        "birthday": "May 27th",
        "rarity": 4,
        "vision": "electro",
        "weapon": "bow",
        "obtain": "Wish"
    },
    {
        "id": 9,
        "name": "Kaeya",
        "slug": "kaeya",
        "description": "A thinker in the Knights of Favonius with a somewhat exotic appearance.",
        "gender": "male",
        "birthday": "Nov 30th",
        "rarity": 4,
        "vision": "cryo",
        "weapon": "sword",
        "obtain": "Quest"
    },
    {
        "id": 12,
        "name": "Lisa",
        "slug": "lisa",
        "description": "The languid but knowledgeable Librarian of the Knights of Favonius who was deemed by Sumeru Academia to be their most distinguised graduate in the past two centuries.",
        "gender": "female",
        "birthday": "Jun 9th",
        "rarity": 4,
        "vision": "electro",
        "weapon": "catalyst",
        "obtain": "Quest"
    },
    {
        "id": 14,
        "name": "Ningguang",
        "slug": "ningguang",
        "description": "The Tianquan of Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.",
        "gender": "female",
        "birthday": "Aug 26th",
        "rarity": 4,
        "vision": "geo",
        "weapon": "catalyst",
        "obtain": "Wish"
    },
    {
        "id": 15,
        "name": "Noelle",
        "slug": "noelle",
        "description": "A maid in the service of the Knights of Favonius that dreams of joining their ranks someday.",
        "gender": "female",
        "birthday": "March 21st",
        "rarity": 4,
        "vision": "geo",
        "weapon": "claymore",
        "obtain": "Wish"
    },
    {
        "id": 17,
        "name": "Razor",
        "slug": "razor",
        "description": "A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.",
        "gender": "male",
        "birthday": "Sep 9th",
        "rarity": 4,
        "vision": "electro",
        "weapon": "claymore",
        "obtain": "Wish"
    },
    {
        "id": 18,
        "name": "Sucrose",
        "slug": "sucrose",
        "description": "An alchemist filled with curiosity about all things. She researches bio-alchemy.",
        "gender": "male",
        "birthday": "May 11th",
        "rarity": 4,
        "vision": "anemo",
        "weapon": "catalyst",
        "obtain": "Wish"
    },
    {
        "id": 22,
        "name": "Xiangling",
        "slug": "xiangling",
        "description": "A renowned chef from Liyue. Shes extremely passionate about cooking and excels at making her signature hot and spicy dishes.",
        "gender": "female",
        "birthday": "Nov 2nd",
        "rarity": 4,
        "vision": "pyro",
        "weapon": "polearm",
        "obtain": "Wish"
    },
    {
        "id": 24,
        "name": "Xingqiu",
        "slug": "xingqiu",
        "description": "A young man carrying a longsword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all.",
        "gender": "male",
        "birthday": "Oct 9th",
        "rarity": 4,
        "vision": "hydro",
        "weapon": "sword",
        "obtain": "Wish"
    },
    {
        "id": 25,
        "name": "Diona",
        "slug": "diona",
        "description": "A young lady who has inherited trace amounts of non-human blood. She is the incredible popular bartender of the Cats Tail tavern.",
        "gender": "female",
        "birthday": "Jan 18th",
        "rarity": 4,
        "vision": "cryo",
        "weapon": "bow",
        "obtain": "Unknown"
    },
    {
        "id": 27,
        "name": "Xinyan",
        "slug": "xinyan",
        "description": "Liyues sole rock 'n' roll musician. She rebels against ossified prejudices using her music and passionate singing.",
        "gender": "female",
        "birthday": "Nov 4th",
        "rarity": 4,
        "vision": "pyro",
        "weapon": "claymore",
        "obtain": "Unknown"
    }
];
let weapons = [
    {
        "id": 72,
        "name": "Primordial Jade Winged-Spear",
        "slug": "primordial-jade-winged-spear",
        "rarity": "5",
        "atk": 48,
        "obtain": "gacha",
        "type": "polearm"
    },
    {
        "id": 74,
        "name": "Skyward Spine",
        "slug": "skyward-spine",
        "rarity": "5",
        "atk": 48,
        "obtain": "gacha",
        "type": "polearm"
    },
    {
        "id": 76,
        "name": "Aquila Favonia",
        "slug": "aquila-favonia",
        "rarity": "5",
        "atk": 48,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 2,
        "name": "Amos Bow",
        "slug": "amos-bow",
        "rarity": "5",
        "atk": 46,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 60,
        "name": "Wolfs Gravestone",
        "slug": "wolfs-gravestone",
        "rarity": "5",
        "atk": 46,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 70,
        "name": "Kunwus Iris Rift",
        "slug": "kunwus-iris-rift",
        "rarity": "5",
        "atk": 46,
        "obtain": "gacha",
        "type": "polearm"
    },
    {
        "id": 17,
        "name": "Skyward Harp",
        "slug": "skyward-harp",
        "rarity": "5",
        "atk": 45,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 35,
        "name": "Skyward Atlas",
        "slug": "skyward-atlas",
        "rarity": "5",
        "atk": 45,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 55,
        "name": "Skyward Pride",
        "slug": "skyward-pride",
        "rarity": "5",
        "atk": 45,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 3,
        "name": "Blackcliff Warbow",
        "slug": "blackcliff-warbow",
        "rarity": "4",
        "atk": 44,
        "obtain": "starglitter exchange",
        "type": "bow"
    },
    {
        "id": 27,
        "name": "Lost Prayer to the Sacred Winds",
        "slug": "lost-prayer-to-the-sacred-winds",
        "rarity": "5",
        "atk": 44,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 29,
        "name": "Mappa Mare",
        "slug": "mappa-mare",
        "rarity": "4",
        "atk": 44,
        "obtain": "crafting",
        "type": "catalyst"
    },
    {
        "id": 33,
        "name": "Royal Grimoire",
        "slug": "royal-grimoire",
        "rarity": "4",
        "atk": 44,
        "obtain": "starglitter exchange",
        "type": "catalyst"
    },
    {
        "id": 48,
        "name": "Prototype Aminus",
        "slug": "prototype-aminus",
        "rarity": "4",
        "atk": 44,
        "obtain": "crafting",
        "type": "claymore"
    },
    {
        "id": 52,
        "name": "Sacrificial Greatsword",
        "slug": "sacrificial-greatsword",
        "rarity": "4",
        "atk": 44,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 64,
        "name": "Crescent Pike",
        "slug": "crescent-pike",
        "rarity": "4",
        "atk": 44,
        "obtain": "crafting",
        "type": "polearm"
    },
    {
        "id": 67,
        "name": "Favonius Lance",
        "slug": "favonius-lance",
        "rarity": "4",
        "atk": 44,
        "obtain": "gacha",
        "type": "polearm"
    },
    {
        "id": 77,
        "name": "Blackcliff Longsword",
        "slug": "blackcliff-longsword",
        "rarity": "4",
        "atk": 44,
        "obtain": "starglitter exchange",
        "type": "sword"
    },
    {
        "id": 86,
        "name": "Prototype Rancour",
        "slug": "prototype-rancour",
        "rarity": "4",
        "atk": 44,
        "obtain": "crafting",
        "type": "sword"
    },
    {
        "id": 91,
        "name": "Skyward Blade",
        "slug": "skyward-blade",
        "rarity": "5",
        "atk": 44,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 92,
        "name": "The Alley Flash",
        "slug": "the-alley-flash",
        "rarity": "4",
        "atk": 44,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 14,
        "name": "Sacrificial Bow",
        "slug": "sacrificial-bow",
        "rarity": "4",
        "atk": 43,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 51,
        "name": "Royal Greatsword",
        "slug": "royal-greatsword",
        "rarity": "4",
        "atk": 43,
        "obtain": "starglitter exchange",
        "type": "claymore"
    },
    {
        "id": 9,
        "name": "Prototype Crescent",
        "slug": "prototype-crescent",
        "rarity": "4",
        "atk": 42,
        "obtain": "crafting",
        "type": "bow"
    },
    {
        "id": 12,
        "name": "Royal Bow",
        "slug": "royal-bow",
        "rarity": "4",
        "atk": 42,
        "obtain": "starglitter exchange",
        "type": "bow"
    },
    {
        "id": 13,
        "name": "Rust",
        "slug": "rust",
        "rarity": "4",
        "atk": 42,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 19,
        "name": "The Stringless",
        "slug": "the-stringless",
        "rarity": "4",
        "atk": 42,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 20,
        "name": "The Viridescent Hunt",
        "slug": "the-viridescent-hunt",
        "rarity": "4",
        "atk": 42,
        "obtain": "bp bounty",
        "type": "bow"
    },
    {
        "id": 23,
        "name": "Blackcliff Amulet",
        "slug": "blackcliff-amulet",
        "rarity": "4",
        "atk": 42,
        "obtain": "starglitter exchange",
        "type": "catalyst"
    },
    {
        "id": 26,
        "name": "Favonius Codex",
        "slug": "favonius-codex",
        "rarity": "4",
        "atk": 42,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 32,
        "name": "Prototype Malice",
        "slug": "prototype-malice",
        "rarity": "4",
        "atk": 42,
        "obtain": "crafting",
        "type": "catalyst"
    },
    {
        "id": 36,
        "name": "Solar Pearl",
        "slug": "solar-pearl",
        "rarity": "4",
        "atk": 42,
        "obtain": "bp bounty",
        "type": "catalyst"
    },
    {
        "id": 37,
        "name": "The Widsith",
        "slug": "the-widsith",
        "rarity": "4",
        "atk": 42,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 40,
        "name": "Wine and Song",
        "slug": "wine-and-song",
        "rarity": "4",
        "atk": 42,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 41,
        "name": "Blackcliff Slasher",
        "slug": "blackcliff-slasher",
        "rarity": "4",
        "atk": 42,
        "obtain": "starglitter exchange",
        "type": "claymore"
    },
    {
        "id": 50,
        "name": "Rainslasher",
        "slug": "rainslasher",
        "rarity": "4",
        "atk": 42,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 53,
        "name": "Serpent Spine",
        "slug": "serpent-spine",
        "rarity": "4",
        "atk": 42,
        "obtain": "bp bounty",
        "type": "claymore"
    },
    {
        "id": 56,
        "name": "The Bell",
        "slug": "the-bell",
        "rarity": "4",
        "atk": 42,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 59,
        "name": "Whiteblind",
        "slug": "whiteblind",
        "rarity": "4",
        "atk": 42,
        "obtain": "crafting",
        "type": "claymore"
    },
    {
        "id": 63,
        "name": "Blackcliff Pole",
        "slug": "blackcliff-pole",
        "rarity": "4",
        "atk": 42,
        "obtain": "starglitter exchange",
        "type": "polearm"
    },
    {
        "id": 71,
        "name": "Lithic Spear",
        "slug": "lithic-spear",
        "rarity": "4",
        "atk": 42,
        "obtain": "gacha",
        "type": "polearm"
    },
    {
        "id": 73,
        "name": "Prototype Grudge",
        "slug": "prototype-grudge",
        "rarity": "4",
        "atk": 42,
        "obtain": "crafting",
        "type": "polearm"
    },
    {
        "id": 84,
        "name": "Iron Sting",
        "slug": "iron-sting",
        "rarity": "4",
        "atk": 42,
        "obtain": "crafting",
        "type": "sword"
    },
    {
        "id": 85,
        "name": "Lions Roar",
        "slug": "lions-roar",
        "rarity": "4",
        "atk": 42,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 87,
        "name": "Royal Longsword",
        "slug": "royal-longsword",
        "rarity": "4",
        "atk": 42,
        "obtain": "starglitter exchange",
        "type": "sword"
    },
    {
        "id": 93,
        "name": "The Black Sword",
        "slug": "the-black-sword",
        "rarity": "4",
        "atk": 42,
        "obtain": "bp bounty",
        "type": "sword"
    },
    {
        "id": 94,
        "name": "The Flute",
        "slug": "the-flute",
        "rarity": "4",
        "atk": 42,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 1,
        "name": "Alley Hunter",
        "slug": "alley-hunter",
        "rarity": "4",
        "atk": 41,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 4,
        "name": "Compound Bow",
        "slug": "compound-bow",
        "rarity": "4",
        "atk": 41,
        "obtain": "crafting",
        "type": "bow"
    },
    {
        "id": 6,
        "name": "Favonius Warbow",
        "slug": "favonius-warbow",
        "rarity": "4",
        "atk": 41,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 25,
        "name": "Eye of Perception",
        "slug": "eye-of-perception",
        "rarity": "4",
        "atk": 41,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 34,
        "name": "Sacrificial Fragments",
        "slug": "sacrificial-fragments",
        "rarity": "4",
        "atk": 41,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 44,
        "name": "Favonius Greatsword",
        "slug": "favonius-greatsword",
        "rarity": "4",
        "atk": 41,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 46,
        "name": "Lithic Blade",
        "slug": "lithic-blade",
        "rarity": "4",
        "atk": 41,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 65,
        "name": "Deathmatch",
        "slug": "deathmatch",
        "rarity": "4",
        "atk": 41,
        "obtain": "bp bounty",
        "type": "polearm"
    },
    {
        "id": 66,
        "name": "Dragons Bane",
        "slug": "dragons-bane",
        "rarity": "4",
        "atk": 41,
        "obtain": "gacha",
        "type": "polearm"
    },
    {
        "id": 81,
        "name": "Favonius Sword",
        "slug": "favonius-sword",
        "rarity": "4",
        "atk": 41,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 88,
        "name": "Sacrificial Sword",
        "slug": "sacrificial-sword",
        "rarity": "4",
        "atk": 41,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 5,
        "name": "Ebony Bow",
        "slug": "ebony-bow",
        "rarity": "3",
        "atk": 40,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 8,
        "name": "Messenger",
        "slug": "messenger",
        "rarity": "3",
        "atk": 40,
        "obtain": "chest",
        "type": "bow"
    },
    {
        "id": 10,
        "name": "Raven Bow",
        "slug": "raven-bow",
        "rarity": "3",
        "atk": 40,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 21,
        "name": "Amber Catalyst",
        "slug": "amber-catalyst",
        "rarity": "3",
        "atk": 40,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 24,
        "name": "Emerald Orb",
        "slug": "emerald-orb",
        "rarity": "3",
        "atk": 40,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 39,
        "name": "Twin Nephrite",
        "slug": "twin-nephrite",
        "rarity": "3",
        "atk": 40,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 49,
        "name": "Quartz",
        "slug": "quartz",
        "rarity": "3",
        "atk": 40,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 68,
        "name": "Halberd",
        "slug": "halberd",
        "rarity": "3",
        "atk": 40,
        "obtain": "gacha",
        "type": "polearm"
    },
    {
        "id": 79,
        "name": "Dark Iron Sword",
        "slug": "dark-iron-sword",
        "rarity": "3",
        "atk": 40,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 95,
        "name": "Travelers Handy Sword",
        "slug": "travelers-handy-sword",
        "rarity": "3",
        "atk": 40,
        "obtain": "chest",
        "type": "sword"
    },
    {
        "id": 16,
        "name": "Sharpshooters Oath",
        "slug": "sharpshooters-oath",
        "rarity": "3",
        "atk": 39,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 30,
        "name": "Otherworldly Story",
        "slug": "otherworldly-story",
        "rarity": "3",
        "atk": 39,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 38,
        "name": "Thrilling Tales of Dragon Slayers",
        "slug": "thrilling-tales-of-dragon-slayers",
        "rarity": "3",
        "atk": 39,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 43,
        "name": "Debate Club",
        "slug": "debate-club",
        "rarity": "3",
        "atk": 39,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 45,
        "name": "Ferrous Shadow",
        "slug": "ferrous-shadow",
        "rarity": "3",
        "atk": 39,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 54,
        "name": "Skyrider Greatsword",
        "slug": "skyrider-greatsword",
        "rarity": "3",
        "atk": 39,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 58,
        "name": "White Iron Greatsword",
        "slug": "white-iron-greatsword",
        "rarity": "3",
        "atk": 39,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 75,
        "name": "White Tassel",
        "slug": "white-tassel",
        "rarity": "3",
        "atk": 39,
        "obtain": "chest",
        "type": "polearm"
    },
    {
        "id": 78,
        "name": "Cool Steel",
        "slug": "cool-steel",
        "rarity": "3",
        "atk": 39,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 82,
        "name": "Fillet Blade",
        "slug": "fillet-blade",
        "rarity": "3",
        "atk": 39,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 83,
        "name": "Harbinger of Dawn",
        "slug": "harbinger-of-dawn",
        "rarity": "3",
        "atk": 39,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 11,
        "name": "Recurve Bow",
        "slug": "recurve-bow",
        "rarity": "3",
        "atk": 38,
        "obtain": "chest",
        "type": "bow"
    },
    {
        "id": 18,
        "name": "Slingshot",
        "slug": "slingshot",
        "rarity": "3",
        "atk": 38,
        "obtain": "gacha",
        "type": "bow"
    },
    {
        "id": 28,
        "name": "Magic Guide",
        "slug": "magic-guide",
        "rarity": "3",
        "atk": 38,
        "obtain": "gacha",
        "type": "catalyst"
    },
    {
        "id": 42,
        "name": "Bloodtainted Greatsword",
        "slug": "bloodtainted-greatsword",
        "rarity": "3",
        "atk": 38,
        "obtain": "gacha",
        "type": "claymore"
    },
    {
        "id": 62,
        "name": "Black Tassel",
        "slug": "black-tassel",
        "rarity": "3",
        "atk": 38,
        "obtain": "gacha",
        "type": "polearm"
    },
    {
        "id": 90,
        "name": "Skyrider Sword",
        "slug": "skyrider-sword",
        "rarity": "3",
        "atk": 38,
        "obtain": "gacha",
        "type": "sword"
    },
    {
        "id": 15,
        "name": "Seasoned Hunters Bow",
        "slug": "seasoned-hunters-bow",
        "rarity": "2",
        "atk": 33,
        "obtain": "chest",
        "type": "bow"
    },
    {
        "id": 31,
        "name": "Pocket Grimoire",
        "slug": "pocket-grimoire",
        "rarity": "2",
        "atk": 33,
        "obtain": "chest",
        "type": "catalyst"
    },
    {
        "id": 47,
        "name": "Old Mercs Pal",
        "slug": "old-mercs-pal",
        "rarity": "2",
        "atk": 33,
        "obtain": "chest",
        "type": "claymore"
    },
    {
        "id": 69,
        "name": "Iron Point",
        "slug": "iron-point",
        "rarity": "2",
        "atk": 33,
        "obtain": "chest",
        "type": "polearm"
    },
    {
        "id": 89,
        "name": "Silver Sword",
        "slug": "silver-sword",
        "rarity": "2",
        "atk": 33,
        "obtain": "chest",
        "type": "sword"
    },
    {
        "id": 7,
        "name": "Hunters Bow",
        "slug": "hunters-bow",
        "rarity": "1",
        "atk": 23,
        "obtain": "chest",
        "type": "bow"
    },
    {
        "id": 22,
        "name": "Apprentices Notes",
        "slug": "apprentices-notes",
        "rarity": "1",
        "atk": 23,
        "obtain": "chest",
        "type": "catalyst"
    },
    {
        "id": 57,
        "name": "Waster Greatsword",
        "slug": "waster-greatsword",
        "rarity": "1",
        "atk": 23,
        "obtain": "chest",
        "type": "claymore"
    },
    {
        "id": 61,
        "name": "Beginners Protector",
        "slug": "beginners-protector",
        "rarity": "1",
        "atk": 23,
        "obtain": "chest",
        "type": "polearm"
    },
    {
        "id": 80,
        "name": "Dull Blade",
        "slug": "dull-blade",
        "rarity": "1",
        "atk": 23,
        "obtain": "chest",
        "type": "sword"
    }
];
let banners = {
    standard: {
        history: [],
        fiveStars: characters.filter(c => c.rarity == 5 && !['Venti', 'Klee', 'Xiao', 'Tartaglia', 'Zhongli'].includes(c.name))
                    .concat(weapons.filter(c => c.rarity == 5)),
        fourStars: characters.filter(c => c.rarity == 4)
                    .concat(weapons.filter(c => c.rarity == 4)),
        threeStars: weapons.filter(c => c.rarity == 3)
    },
    venti: {
        history: [],
        featured: {
            fiveStar: characters.filter(c => c.name == 'Venti'),
            fourStars: characters.filter(c => c.rarity == 4 && ['Fischl', 'Sucrose', 'Xiangling'].includes(c.name))
        },
        regular: {
            fiveStars: characters.filter(c => c.rarity == 5 && !['Venti', 'Klee', 'Xiao', 'Tartaglia', 'Zhongli'].includes(c.name)),
            fourStars: characters.filter(c => c.rarity == 4 && !['Kaeya', 'Lisa', 'Amber', 'Fischl', 'Sucrose', 'Xiangling'].includes(c.name))
                        .concat(weapons.filter(c => c.rarity == 4)),
            threeStars: weapons.filter(c => c.rarity == 3)
        }
    }
}

document.getElementById('wish-button').addEventListener('click', function() {
    let result = [];
    let currentBanner;
    if (document.getElementById('standard-button').ariaPressed == 'true') {
        currentBanner = banners.standard;
        const fiveStarChance = 0.006;
        const fourStarChance = 0.051;
        for (let i = 0; i < 10; i++) {
            const roll = Math.random();
            const recentlyFoundFive = currentBanner.history.slice(-90).some(item => item.rarity == 5);
            const recentlyFoundFour = currentBanner.history.slice(-10).some(item => item.rarity == 4);
            const isFive = (roll < fiveStarChance) || (currentBanner.history.length > 89 && !recentlyFoundFive);
            const isFour = (roll < fourStarChance) || (currentBanner.history.length > 9 && !recentlyFoundFour);
            let item;
            if (isFive) {
                item = currentBanner.fiveStars[Math.floor(Math.random() * (currentBanner.fiveStars.length - 1))];
            } else if (isFour) {
                item = currentBanner.fourStars[Math.floor(Math.random() * (currentBanner.fourStars.length - 1))];
            } else {
                item = currentBanner.threeStars[Math.floor(Math.random() * (currentBanner.threeStars.length - 1))];
            }
            result.push(item); 
            currentBanner.history.push(item);
        }
        document.querySelector('.output').innerHTML = result.map(item => {
            let className = '';
            if (item.rarity == 3) {
                className = 'rarity-3';
            } else if (item.rarity == 4) {
                className = 'rarity-4';
            } else if (item.rarity == 5) {
                className = 'rarity-5';
            }
            return `<span class="${className}">${item.name}</span>`;
        }).join('');
        let guaranteeThreshold = 90;
        let countSinceLastFive = 0;
        for (let i = currentBanner.history.length - 1; i >= 0; i--) {
            if (currentBanner.history[i].rarity == 5) break;
            countSinceLastFive++;
        }
        console.log(currentBanner.history)
        let wishesLeft = guaranteeThreshold - countSinceLastFive;
        console.log(wishesLeft)
        document.getElementById('counter').textContent = "Wishes until guaranteed 5-star: " + (wishesLeft > 0 ? wishesLeft : 0);
    } else {
        currentBanner = banners.venti;
        const fiveStarChance = 0.006;
        const fourStarChance = 0.051;
        for (let i = 0; i < 10; i++) {
            const roll = Math.random();
            const recentlyFoundFive = currentBanner.history.slice(-90).some(item => item.rarity == 5);
            const recentlyFoundFour = currentBanner.history.slice(-10).some(item => item.rarity == 4);
            const isFive = (roll < fiveStarChance) || (currentBanner.history.length > 89 && !recentlyFoundFive);
            const isFour = (roll < fourStarChance) || (currentBanner.history.length > 9 && !recentlyFoundFour);
            let item;
            if (isFive) {
                const isFeatured = Math.random() < 0.5;
                if (isFeatured) {
                    item = currentBanner.featured.fiveStar[Math.floor(Math.random() * (currentBanner.featured.fiveStar.length - 1))];
                } else {
                    item = currentBanner.regular.fiveStars[Math.floor(Math.random() * (currentBanner.regular.fiveStars.length - 1))];
                }
            } else if (isFour) {
                const isFeatured = Math.random() < 0.5;
                if (isFeatured) {
                    item = currentBanner.featured.fourStars[Math.floor(Math.random() * (currentBanner.featured.fourStars.length - 1))];
                } else {
                    item = currentBanner.regular.fourStars[Math.floor(Math.random() * (currentBanner.regular.fourStars.length - 1))];
                }
            } else {
                item = currentBanner.regular.threeStars[Math.floor(Math.random() * (currentBanner.regular.threeStars.length - 1))];
            }
            result.push(item);
            currentBanner.history.push(item);
        }
        document.querySelector('.output').innerHTML = result.map(item => {
            let className = '';
            if (item.rarity == 3) {
                className = 'rarity-3';
            } else if (item.rarity == 4) {
                className = 'rarity-4';
            } else if (item.rarity == 5) {
                className = 'rarity-5';
            }
            return `<span class="${className}">${item.name}</span>`;
        }).join('');
        let guaranteeThreshold = 90;
        let countSinceLastFive = 0;
        for (let i = currentBanner.history.length - 1; i >= 0; i--) {
            if (currentBanner.history[i].rarity == 5) break;
            countSinceLastFive++;
        }
        let wishesLeft = guaranteeThreshold - countSinceLastFive;
        document.getElementById('counter').textContent = "Wishes until guaranteed 5-star: " + (wishesLeft > 0 ? wishesLeft : 0);
    }
});
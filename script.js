document.getElementById('venti-button').addEventListener('click', function() {
    document.getElementById('message').textContent = "You are now on Venti's banner";
});

document.getElementById('standard-button').addEventListener('click', function() {
    document.getElementById('message').textContent = "You are now on Standard banner";
});

document.querySelector('.settings-icon').addEventListener('click', function() {
    const popup = document.getElementById('settings-popup');
    popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'flex' : 'none';
});

document.getElementById('background-select').addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue === 'mondstadt') {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images5.alphacoders.com/109/1099191.jpg')";
    } else if (selectedValue === 'liyue') {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images2.alphacoders.com/117/thumb-1920-1175591.png')";
    } else {
        document.body.style.backgroundImage = 'none';
    }
});
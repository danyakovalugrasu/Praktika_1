const audioPlayers = document.querySelectorAll('audio');

audioPlayers.forEach(player => {
    player.addEventListener('play', () => {
        audioPlayers.forEach(otherPlayer => {
            if (otherPlayer !== player) {
                otherPlayer.pause();
                otherPlayer.dataset.playing = 'false';
            }
        });
    });

    player.addEventListener('pause', () => {
        player.dataset.playing = 'false';
    });
});

audioPlayers.forEach(player => {
    player.addEventListener('play', () => {
        player.dataset.playing = 'true';
    });
});

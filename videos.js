document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const playPauseBtn = container.querySelector('.play-pause-btn');
        const progressBar = container.querySelector('.progress-bar');
        const progress = container.querySelector('.progress');
        const timeDisplay = container.querySelector('.time-display');
        const volumeSlider = container.querySelector('.volume-slider');
        const fullScreenBtn = container.querySelector('.fullscreen-btn');

        // Play/Pause functionality
        playPauseBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = '❚❚'; // Pause icon
            } else {
                video.pause();
                playPauseBtn.textContent = '►'; // Play icon
            }
        });

        // Update progress bar and time display
        video.addEventListener('timeupdate', () => {
            const percentage = (video.currentTime / video.duration) * 100;
            progress.style.width = percentage + '%';

            const currentMinutes = Math.floor(video.currentTime / 60);
            const currentSeconds = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
            const durationMinutes = Math.floor(video.duration / 60);
            const durationSeconds = Math.floor(video.duration % 60).toString().padStart(2, '0');

            timeDisplay.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
        });

        // Seek functionality
        progressBar.addEventListener('click', (e) => {
            const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
            video.currentTime = scrubTime;
        });

        // Volume control
        volumeSlider.addEventListener('input', (e) => {
            video.volume = e.target.value;
            video.muted = e.target.value === '0';
            volumeSlider.value = video.volume;
            volumeSlider.style.backgroundImage;
        });

        // Fullscreen functionality
        fullScreenBtn.addEventListener('click', () => {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen)
                video.mozRequestFullScreen();
            else if (video.webkitRequestFullscreen)
                video.webkitRequestFullscreen();
        });
    });
});z
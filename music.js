document.addEventListener("DOMContentLoaded", function () {
    // Fetch music data
    fetch("../static/data/music.json")  // Replace with your actual API or JSON file
        .then(response => response.json())
        .then(data => {
            populateMusicSection("artist-list", data.artists);
            populateMusicSection("track-list", data.tracks);
            populateMusicSection("playlist-list", data.playlists);
            populateMusicSection("album-list", data.albums);
            populateMusicSection("genre-list", data.genres);
            populateMusicSection("podcast-list", data.podcasts);
            populateMusicSection("radio-list", data.radio);
        })
        .catch(error => console.error("Error fetching music data:", error));
});

// Function to populate sections dynamically
function populateMusicSection(sectionId, items) {
    const section = document.getElementById(sectionId);
    if (!section || !items) return;

    section.innerHTML = "";  // Clear previous content

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("music-item");
        div.innerHTML = `<h4>${item.name}</h4><p>${item.description || ""}</p>`;
        section.appendChild(div);
    });
}
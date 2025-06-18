
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.browse-filters input[type="text"]');
    const searchButton = document.querySelector('.browse-filters button');
    const profileItems = document.querySelectorAll('.profile-item');

    function filterProfiles() {
        const searchTerm = searchInput.value.toLowerCase();
        profileItems.forEach(profile => {
            const bio = profile.querySelector('.bio').textContent.toLowerCase();
            const mood = profile.querySelector('.mood').textContent.toLowerCase();
            if (bio.includes(searchTerm) || mood.includes(searchTerm)) {
                profile.style.display = 'block';
            } else {
                profile.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', filterProfiles);
    searchInput.addEventListener('keyup', event => {
        if (event.key === 'Enter') filterProfiles();
    });


    fetch('../static/json/profiles.json')
        .then(response => response.json())
        .then(data => {
            const profileList = document.querySelector('.profile-list');
            profileList.innerHTML = ''; // Clear any hardcoded profiles

            data.forEach(profile => {
                const profileHTML = `
        <div class="profile-item">
            <img src="${profile.image}" alt="Profile Picture" class="profile-pic">
            <div class="mood">Mood: ${profile.mood}</div>
            <div class="bio">${profile.bio}</div>
            <div class="friend-count">Friends: ${profile.friends}</div>
            <button type="button">Add Friend</button>
            <button type="button">Message</button>
            <button type="button">Block</button>
            <button type="button">Mute</button>
            <button type="button">Hide</button>
            <button type="button">Archive</button>
            <button type="button">Delete</button>
            <button type="button">Report</button>
            <button type="button">Edit</button>
        </div>`;
                profileList.insertAdjacentHTML('beforeend', profileHTML);
            });

            // Reattach event listeners to new buttons
            document.querySelectorAll('.profile-item button').forEach(button => {
                button.addEventListener('click', () => {
                    alert(`"${button.textContent}" action clicked for this profile.`);
                });
            });
        })
        .catch(error => {
            console.error("Failed to load profiles:", error);
        });

    fetch('../static/json/profiles.json')

    // Profile action buttons
    document.querySelectorAll('.profile-item button').forEach(button => {
        button.addEventListener('click', () => {
            alert(`"${button.textContent}" action clicked for this profile.`);
        });
    });
});

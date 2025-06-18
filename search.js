document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = ''; // Clear previous results

        // Simulate searching through a list of users (replace with actual data source)
        const users = [
            { name: 'Kristyna', profileUrl: 'profile/kristyna' },
            { name: 'Sarah', profileUrl: 'profile/sarah' },
            { name: 'John', profileUrl: 'profile/john' },
            { name: 'Emily', profileUrl: 'profile/emily' }
        ];

        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query));

        if (filteredUsers.length > 0) {
            filteredUsers.forEach(user => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('search-result-item');
                resultItem.innerHTML = `<a href="${user.profileUrl}">${user.name}</a>`;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = '<p>No users found.</p>';
        }
    });
});

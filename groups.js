document.addEventListener("DOMContentLoaded", function () {
    fetch("../static/data/groups.json")  // Update to match your file path or API endpoint
        .then(response => response.json())
        .then(data => {
            const groupList = document.getElementById("groups-list");
            groupList.innerHTML = "";  // Clear previous content

            data.groups.forEach(group => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="../template/group_detail.html?id=${group.id}">${group.name}</a>`;
                groupList.appendChild(li);
            });
        })
        .catch(error => console.error("Error loading groups:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const groupId = urlParams.get("id");
    if (groupId) {
        fetch("../static/data/groups.json")
            .then(response => response.json())
            .then(data => {
                const group = data.groups.find(group => group.id === groupId);  
                if (group) {
                    const groupDetail = document.getElementById("group-detail");
                    groupDetail.innerHTML = `
                        <h2>${group.name}</h2>
                        <p>Description: ${group.description}</p>
                        <p>Members: ${group.members.join(", ")}</p>
                    `;
                }
            })
            .catch(error => console.error("Error loading group details:", error));
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const inviteButton = document.getElementById('inviteButton');
    const inviteModal = document.getElementById('inviteModal');
    const closeButton = document.querySelector('.close-button');
    const inviteForm = document.getElementById('inviteForm');
    const inviteLinkInput = document.getElementById('inviteLink');
    const copyLinkButton = document.getElementById('copyLinkButton');

    if (inviteButton) {
        inviteButton.addEventListener('click', function() {
            inviteModal.style.display = 'block';
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            inviteModal.style.display = 'none';
        });
    }

    // Hide modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === inviteModal) {
            inviteModal.style.display = 'none';
        }
    });

    if (inviteForm) {
        inviteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Invite sent!');
            inviteModal.style.display = 'none';
        });
    }

    if (inviteLinkInput) {
        const dummyLink = window.location.origin + '/invite/' + Math.random().toString(36).substring(2, 15);
        inviteLinkInput.value = dummyLink;
    }

    // Copy invite link to clipboard
    if (copyLinkButton && inviteLinkInput) {
        copyLinkButton.addEventListener('click', function() {
            navigator.clipboard.writeText(inviteLinkInput.value)
                .then(() => {
                    alert('Invite link copied to clipboard!');
                })
                .catch(err => {
                    console.error('Error copying invite link:', err);
                });
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("invite-form");
    const message = document.getElementById("invite-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("friend-name").value;
        const email = document.getElementById("friend-email").value;

        if (name && email) {
            message.textContent = `🎉 Invite sent to ${name} at ${email}!`;
            message.style.color = "#006600";
            form.reset();
        } else {
            message.textContent = "❌ Please fill out both fields.";
            message.style.color = "#cc0000";
        }
    });
});
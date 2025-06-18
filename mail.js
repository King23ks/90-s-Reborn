$(document).ready(function () {
    $("#contactForm").submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        // Client-side validation
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();
        var errorMsg = "";
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            errorMsg += "Name is required.<br>";
        }
        if (!email) {
            errorMsg += "Email is required.<br>";
        } else if (!emailPattern.test(email)) {
            errorMsg += "Please enter a valid email address.<br>";
        }
        if (!message) {
            errorMsg += "Message is required.<br>";
        }
        if (errorMsg) {
            $("#formMessage").html("<div class='alert alert-danger'>" + errorMsg + "</div>");
            return;
        }

        var formData = {
            name: name,
            email: email,
            message: message
        };

        var $submitBtn = $(this).find("button[type='submit']");
        $submitBtn.prop("disabled", true);

        $.ajax({
            type: "POST",
            url: "send_mail.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            if (typeof window !== "undefined" && window.location.hostname === "localhost") {
                console.log(data);
            }
            if (data && data.success) {
                $("#formMessage").html("<div class='alert alert-success'>" + (data.message || "Message sent successfully.") + "</div>");
                $("#contactForm")[0].reset();
            } else {
                $("#formMessage").html("<div class='alert alert-danger'>" + ((data && data.message) ? data.message : "An error occurred.") + "</div>");
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
            let errorMsg = "Oops! An error occurred.";
            if (jqXHR.status === 0) {
                errorMsg = "Network error: Please check your internet connection.";
            } else if (jqXHR.status === 404) {
                errorMsg = "Service not found (404). Please try again later.";
            } else if (jqXHR.status === 500) {
                errorMsg = "Server error (500). Please try again later.";
            } else if (textStatus === "timeout") {
                errorMsg = "Request timed out. Please try again.";
            } else if (errorThrown) {
                errorMsg = "Error: " + errorThrown;
            }
            $("#formMessage").html("<div class='alert alert-danger'>" + errorMsg + "</div>");
        }).always(function () {
            $submitBtn.prop("disabled", false);
        });
    });
});

function showMessage(id) {
    document.querySelectorAll('.mail-message-view').forEach(function (div) {
        div.style.display = 'none';
    });
    var el = document.getElementById(id);
    if (el) el.style.display = 'block';
}

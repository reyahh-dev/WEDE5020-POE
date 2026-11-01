// Rea's Bakery - Enquiry Form Validation

document.addEventListener("DOMContentLoaded", function () {

    // Get the enquiry form and response area
    const enquiryForm = document.getElementById("enquiryForm");
    const enquiryResponse = document.getElementById("enquiryResponse");

    // Stop if the enquiry form is not on the current page
    if (!enquiryForm) {
        return;
    }

    // Set today's date as the earliest selectable date
    const dateInput = document.getElementById("date");

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;

    // Validate the enquiry form when submitted
    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Check the HTML form validation rules
        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        // Get customer information
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        // Get enquiry information
        const enquiryType = document.getElementById("enquiryType").value;
        const location = document.getElementById("location").value;
        const preferredDate = dateInput.value;
        const quantity = document.getElementById("quantity").value;
        const message = document.getElementById("message").value.trim();

        // Check that the name and message are not just spaces
        if (fullName.length < 2 || message.length < 10) {
            enquiryResponse.textContent =
                "Please check your name and enquiry message.";

            return;
        }

        // Display a response based on the enquiry type
        let responseMessage = "";

        if (enquiryType === "Product Availability") {
            responseMessage =
                "Thank you for asking about product availability. " +
                "Our bakery team will need to confirm which products are available.";
        } else if (enquiryType === "Custom Cake" ||
                   enquiryType === "Wedding Cake") {
            responseMessage =
                "Thank you for your cake enquiry. " +
                "The final price will depend on the cake size, design and decoration.";
        } else if (enquiryType === "Bulk Order") {
            responseMessage =
                "Thank you for your bulk order enquiry. " +
                "The price will depend on the quantity and products requested.";
        } else if (enquiryType === "Catering") {
            responseMessage =
                "Thank you for your catering enquiry. " +
                "The bakery team will need to discuss your event requirements and pricing.";
        }

        // Display the enquiry summary
        enquiryResponse.textContent =
            "Thank you, " + fullName + "! " +
            responseMessage + " " +
            "Your preferred collection location is " + location + 
            " and your requested date is " + preferredDate + 
            ". You requested " + quantity + " item(s). " +
            "Please contact Rea's Bakery to confirm the final price and availability. " +
            "This demonstration form has validated your details but has not sent them to the bakery.";

        // Bring the response into view
        enquiryResponse.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

    // Clear the response when the form is reset
    enquiryForm.addEventListener("reset", function () {
        enquiryResponse.textContent = "";
    });

});

// Rea's Bakery - Contact Form Validation

document.addEventListener("DOMContentLoaded", function () {

    // Get the contact form and response area
    const contactForm = document.getElementById("contactForm");
    const contactResponse = document.getElementById("contactResponse");

    // Stop if the contact form is not on the current page
    if (!contactForm) {
        return;
    }

    // Validate the form when the customer submits it
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Check the HTML validation rules
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        // Get the customer's contact information
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();

        // Get the message information
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        // Check that the name and message contain enough characters
        if (name.length < 2 || message.length < 10) {

            contactResponse.textContent =
                "Please enter a valid name and a message of at least 10 characters.";

            return;
        }

        // Create the email subject
        const subject = "Rea's Bakery - " + messageType;

        // Prepare the email message
        const emailBody =
            "Customer Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Telephone Number: " + phone + "\n" +
            "Message Type: " + messageType + "\n\n" +
            "Message:\n" + message;

        // Prepare the email link
        const emailLink =
            "mailto:hello@reasbakery.co.za" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(emailBody);

        // Display a response to the customer
        contactResponse.textContent =
            "Thank you, " + name + "! Your email application should now open with your message prepared. Please review it and press Send to contact Rea's Bakery.";

        // Open the customer's email application
        window.location.href = emailLink;

    });

    // Clear the response when the form is reset
    contactForm.addEventListener("reset", function () {

        contactResponse.textContent = "";

    });

});


// PRODUCT SEARCH AND CATEGORY FILTERS

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("productSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productSections = document.querySelectorAll(".product-section");
    const noProductsMessage = document.getElementById("noProductsMessage");

    // Stop if this page does not contain the product search
    if (!searchInput || productSections.length === 0) {
        return;
    }

    let selectedCategory = "all";

    function filterProducts() {

        const searchText = searchInput.value.toLowerCase().trim();

        let totalVisibleProducts = 0;

        productSections.forEach(function (section) {

            const category = section.dataset.category;
            const productCards = section.querySelectorAll(".product-card");

            let visibleProducts = 0;

            productCards.forEach(function (card) {

                const productName = card.querySelector("h3").textContent.toLowerCase();

                const matchesSearch = productName.includes(searchText);

                const matchesCategory =
                    selectedCategory === "all" ||
                    selectedCategory === category;

                if (matchesSearch && matchesCategory) {
                    card.style.display = "";
                    visibleProducts++;
                } else {
                    card.style.display = "none";
                }

            });

            // Hide the entire category if it has no matching products
            if (visibleProducts === 0) {
                section.style.display = "none";
            } else {
                section.style.display = "";
            }

            totalVisibleProducts += visibleProducts;

        });

        // Display a message if no products match
        if (totalVisibleProducts === 0) {
            noProductsMessage.style.display = "block";
        } else {
            noProductsMessage.style.display = "none";
        }

    }

    // Search while the customer types
    searchInput.addEventListener("input", filterProducts);

    // Filter products when a category button is clicked
    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            selectedCategory = button.dataset.filter;

            // Remove active class from all buttons
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Highlight the selected button
            button.classList.add("active");

            filterProducts();

        });

    });

});


// PRODUCT IMAGE LIGHTBOX

document.addEventListener("DOMContentLoaded", function () {

    const productImages = document.querySelectorAll(".product-card img");

    const lightbox = document.getElementById("productLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeButton = document.getElementById("closeLightbox");

    // Stop if the lightbox is not on this page
    if (!lightbox || !lightboxImage || !closeButton) {
        return;
    }

    let previousImage = null;

    // Open the lightbox when a product image is clicked
    productImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            const productCard = image.closest(".product-card");
            const productName = productCard.querySelector("h3").textContent;

            lightboxCaption.textContent = productName;

            previousImage = image;

            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

            closeButton.focus();

        });

    });

    // Close the lightbox
    function closeLightbox() {

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        lightboxImage.src = "";
        document.body.style.overflow = "";

        if (previousImage) {
            previousImage.focus();
        }

    }

    // Close using the X button
    closeButton.addEventListener("click", closeLightbox);

    // Close when clicking outside the product image
    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    // Close by pressing Escape
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }

    });

});

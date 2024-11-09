// Scroll to the top of the page on page load
window.onload = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Scroll to the contact section when the Contact button is clicked
document.querySelector(".navbar a[href='#contact']").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action
    document.querySelector("#contact").scrollIntoView({
        behavior: 'smooth'
    });
});

// Add smooth scroll behavior to all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission
document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your User ID
    emailjs.init("kBoJO4w3ZoAg8uKIk"); // Replace with your EmailJS User ID

    // Add event listener to the form
    const form = document.getElementById('contact_form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Log form data for debugging
        const formData = new FormData(form);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        // Scroll to the contact section after submission (optional)
                document.querySelector("#contact").scrollIntoView({
                    behavior: 'smooth'
                });

        // Send form data via EmailJS
        emailjs.sendForm('Form_web', 'template_nfukrbf', form)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Your message has been sent successfully!");
                form.reset();  // Clear the form after successful submission
            }, function(error) {
                console.error('FAILED...', error);
                alert("Failed to send the message. Please try again later.");
            });
    });
});


//// Handle form submission
//document.addEventListener("DOMContentLoaded", function() {
//    // Get the form element
//    const form = document.querySelector("form");
//
//    // Add an event listener for form submission
//    form.addEventListener("submit", function(event) {
//        event.preventDefault(); // Prevent the default form submission behavior
//
//        // Perform any additional form submission actions here (e.g., send an email)
//
//        // Clear the form fields
//        form.reset();
//
//        // Optionally, display a success message
//        alert("Your form has been submitted successfully!");
//
//        // Scroll to the contact section after submission (optional)
//        document.querySelector("#contact").scrollIntoView({
//            behavior: 'smooth'
//        });
//    });
//
//    // Initialize EmailJS with your User ID
//    (function() {
//      emailjs.init("kBoJO4w3ZoAg8uKIk");  // Replace with your EmailJS User ID
//    })();
//
//    // Add event listener to the form
//    document.getElementById("contact_form").addEventListener("submit", function(event) {
//      event.preventDefault();  // Prevent the default form submission
//
//      console.log("Form submitted");
//
//      // Log form data for debugging
//      const formData = new FormData(this);
//      for (const [key, value] of formData.entries()) {
//        console.log(`${key}: ${value}`);
//        //alert(`${key}: ${key.value}`);
//      }
//
//      // Send form data via EmailJS
//      emailjs.sendForm('Form_web', 'template_nfukrbf', this)
//        .then(function(response) {
//          console.log('SUCCESS!', response.status, response.text);
//          alert("Your message has been sent successfully!");
//        }, function(error) {
//          console.error('FAILED...', error);
//          alert("Failed to send the message. Please try again later.");
//        });
//    });
//
//
//});

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $first_name = htmlspecialchars(trim($_POST['first_name']));
    $last_name = htmlspecialchars(trim($_POST['last_name']));
    $country_code = htmlspecialchars(trim($_POST['countryCodeSearch']));
    $contact_number = htmlspecialchars(trim($_POST['contact_number']));
    $address = htmlspecialchars(trim($_POST['address']));
    $query = htmlspecialchars(trim($_POST['query']));
    $service_required = htmlspecialchars(trim($_POST['service_required']));

    // Email details
    $to = "hack25proof@gmail.com"; // Replace with your email address
    $subject = "New Form Submission from " . $first_name . " " . $last_name;

    // Construct the email body
    $message = "You have received a new form submission:\n\n";
    $message .= "First Name: " . $first_name . "\n";
    $message .= "Last Name: " . $last_name . "\n";
    $message .= "Contact Number: " . $country_code . " " . $contact_number . "\n";
    $message .= "Address: " . $address . "\n";
    $message .= "Query: " . $query . "\n";
    $message .= "Service Required: " . $service_required . "\n";

    // Additional headers
    $headers = "From: officialgaganchauhan@gmail.com\r\n"; // Replace with your domain

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission. We'll get back to you shortly!";
    } else {
        echo "There was a problem sending the email.";
    }
} else {
    echo "Invalid request method.";
}
?>

<?php
include 'db.php'; // Include the database connection

// Check if the form has been submitted using the POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $phoneNumber = $conn->real_escape_string($_POST['phone_number']);
    $email = $conn->real_escape_string($_POST['email']);
    $feedback = $conn->real_escape_string($_POST['feedback']);

    // SQL to insert data into Contact table
    $sql = "INSERT INTO Contact (Name, PhoneNumber, Email, Feedback) VALUES ('$name', '$phoneNumber', '$email', '$feedback')";
    
    // Execute the SQL query and handle success or error
    if ($conn->query($sql) === TRUE) {
        echo "Thank you for your feedback!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    // Close the database connection
    $conn->close();
}
?>

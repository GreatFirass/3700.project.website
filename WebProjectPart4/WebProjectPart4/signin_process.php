<?php
include('db.php'); // Your database connection file

// Check if the form was submitted using the POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email']; // Assuming the input field for the email in your form is named 'email'
    // SQL query to select a user with the given email
    $sql = "SELECT * FROM Users WHERE Email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    // Check if any rows were returned
    if ($result->num_rows > 0) {
        // Email exists, proceed with password verification (not shown here)
    } else {
        echo "No account found with that email. Please sign up.";
    }

    $stmt->close();
}
// Close the database connection
$conn->close();
?>

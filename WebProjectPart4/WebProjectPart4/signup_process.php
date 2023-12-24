<?php
include('db.php'); // Include your database connection script

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $fullName = $conn->real_escape_string($_POST['fullname']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = $conn->real_escape_string($_POST['password']);

    // Password hashing for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare SQL Insert statement
    $sql = "INSERT INTO Users (FullName, Email, Password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $fullName, $email, $hashed_password);

    // Execute and check if successful
    if ($stmt->execute()) {
        echo "New record created successfully";
        // Redirect or perform additional actions here
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
}
// Close the database connection
$conn->close();
?>

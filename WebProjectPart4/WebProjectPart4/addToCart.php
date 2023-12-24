<?php
include('db.php'); // Database connection
session_start();

$userID = $_SESSION['userId']; // Retrieve the user's ID from the session

// Start by selecting all items in the user's cart
$sql = "SELECT * FROM Cart WHERE UserID = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userID);
$stmt->execute();
$cartItems = $stmt->get_result();

// Prepare to insert each item into the Bookings table
$insertSql = "INSERT INTO Bookings (UserID, Country, Nights, StudentDiscount, StudentID, TotalPrice) VALUES (?, ?, ?, ?, ?, ?)";
$insertStmt = $conn->prepare($insertSql);

// Loop through cart items and insert them into the Bookings table
while ($item = $cartItems->fetch_assoc()) {
    $insertStmt->bind_param("isibsd", $userID, $item['Country'], $item['Nights'], $item['StudentDiscount'], $item['StudentID'], $item['TotalPrice']);
    $insertStmt->execute();
}

// After transferring, clear the cart
$deleteSql = "DELETE FROM Cart WHERE UserID = ?";
$deleteStmt = $conn->prepare($deleteSql);
$deleteStmt->bind_param("i", $userID);
$deleteStmt->execute();

$stmt->close();
$insertStmt->close();
$deleteStmt->close();
$conn->close();


?>

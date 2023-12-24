<?php
//database connection
include('db.php');
session_start();

// Check if the 'cartId' parameter is set in the POST request
if (isset($_POST['cartId'])) {
    $cartId = $_POST['cartId'];
    $userID = $_SESSION['userId'];
    // SQL query to delete the item from the 'Cart' table for a specific user and cart
    $sql = "DELETE FROM Cart WHERE CartID = ? AND UserID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $cartId, $userID);
    $stmt->execute();

    // Check if any rows were affected by the delete operation
    if ($stmt->affected_rows > 0) {
        echo "Item removed successfully.";
    } else {
        echo "Error: Unable to remove item.";
    }

    $stmt->close();
}
// Close the database connection
$conn->close();
?>

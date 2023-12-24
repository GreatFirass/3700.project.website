<?php
include 'db.php'; // Include the database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $country = $conn->real_escape_string($_POST['country']);
    $nights = intval($_POST['nights']);
    $studentDiscount = isset($_POST['studentDiscount']) ? 1 : 0;
    $studentId = $conn->real_escape_string($_POST['studentId']);

    // Pricing logic (replicate JavaScript pricing in PHP)
    $prices = [
        'paris' => 285.57,
        'los-angeles' => 357,
        'dubai' => 199.83,
        'maldives' => 383.16,
        'new-york' => 416.5,
        'phuket' => 324.75,
        'milan' => 383.3,
        'barcelona' => 357,
        'london' => 366.5
    ];
    // Calculate the base price
    $basePrice = $prices[$country] * $nights;
    $discount = $studentDiscount && preg_match('/^s\d{6}$/', $studentId) ? 0.15 : 0;
    // Calculate the total price after applying the discount
    $totalPrice = $basePrice - ($basePrice * $discount);

    // SQL to insert data
    $sql = "INSERT INTO Bookings (Country, Nights, StudentDiscount, StudentId, TotalPrice) VALUES ('$country', '$nights', '$studentDiscount', '$studentId', '$totalPrice')";
    
    // Execute the SQL query and handle success or error
    if ($conn->query($sql) === TRUE) {
        echo "Booking recorded successfully. Total Price: $" . number_format($totalPrice, 2);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>


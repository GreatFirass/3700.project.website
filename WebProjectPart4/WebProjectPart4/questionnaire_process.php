<?php
include 'db.php'; // Include the database connection

// Define a class to represent questionnaire responses
class QuestionnaireResponse {
    public $name;
    public $phoneNumber;
    public $email;
    public $gender;
    public $tripRating;
    public $hotelRating;
    public $officeTreatment;
    public $websiteServices;
    public $comments;
    public $subscribe;

     // Constructor to initialize response properties
    public function __construct($name, $phoneNumber, $email, $gender, $tripRating, $hotelRating, $officeTreatment, $websiteServices, $comments, $subscribe) {
        $this->name = $name;
        $this->phoneNumber = $phoneNumber;
        $this->email = $email;
        $this->gender = $gender;
        $this->tripRating = $tripRating;
        $this->hotelRating = $hotelRating;
        $this->officeTreatment = $officeTreatment;
        $this->websiteServices = $websiteServices;
        $this->comments = $comments;
        $this->subscribe = $subscribe;
    }
}

// Sample questionnaire responses
$responses = [
    new QuestionnaireResponse("Alice Johnson", "123-456-7890", "alice@example.com", "female", "perfect", "excellent", "good", "excellent", "Loved it!", true),
    
];

// Display questionnaire responses in a table
function displayResponses($responses) {
    echo "<table border='1'>";
    echo "<tr><th>Name</th><th>Phone Number</th><th>Email</th><th>Gender</th><th>Trip Rating</th><th>Hotel Rating</th><th>Office Treatment</th><th>Website Services</th><th>Comments</th><th>Subscribe</th></tr>";
     
    //Loop to display the data in the table
    foreach ($responses as $response) {
        $subscribeText = $response->subscribe ? 'Yes' : 'No';
        echo "<tr>
                <td>{$response->name}</td>
                <td>{$response->phoneNumber}</td>
                <td>{$response->email}</td>
                <td>{$response->gender}</td>
                <td>{$response->tripRating}</td>
                <td>{$response->hotelRating}</td>
                <td>{$response->officeTreatment}</td>
                <td>{$response->websiteServices}</td>
                <td>{$response->comments}</td>
                <td>{$subscribeText}</td>
              </tr>";
    }

    echo "</table>";
}

// Call the function to display responses
displayResponses($responses);


?>

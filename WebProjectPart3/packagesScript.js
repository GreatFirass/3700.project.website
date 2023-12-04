

// Object Constructor and Array Initialization
function Package(destination, title, price, imageUrl, details) {
    this.destination = destination;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.details = details;
}




var packages = [
    new Package(
        "Paris",
        "Explore Paris - The City of Lights",
        "$1999 - 7 Days",
        "img/paris-packages.jpg",
        [
            "Accommodation: 5-Star Hotel",
            "Flight Included: Round-trip Airfare",
            "Airport Transportation: Pick-up and Drop-off Included",
            "Daily Breakfast Buffet Included",
            "Guided Tours to Iconic Landmarks",
            "Exclusive Dining Experiences",
            "Cultural Immersion Activities",
            "Private Transportation Included",
            "Time for Leisure and Exploration",
            "Expert Local Guides",
            "Memorable Souvenirs and Keepsakes",
            "24/7 Call Center Support"
        ]
    ),
    new Package(
        "Los Angeles",
        "Los Angeles - The City of Dreams",
        "$2499 - 7 Days",
        "img/LA-packages.jpg",
        [
            "Accommodation: Luxury Hotel",
            "Flight Included: Round-trip Airfare",
            "Airport Transportation: Hassle-free Pick-up and Drop-off",
            "Daily Breakfast Buffet Included",
            "Guided Tours to Iconic Landmarks",
            "Hollywood Studio Tour with Behind-the-Scenes Access",
            "Gourmet Dining Experiences in LA's Culinary Scene",
            "Beach Day with Water Sports and Relaxation",
            "Private Transportation for Group Excursions",
            "Ample Free Time for Exploration and Shopping",
            "Insightful Local Guides",
            "Complimentary Souvenirs to Remember Your LA Adventure",
            "24/7 Concierge Support"
        ]
    ),
    new Package(
        "Dubai",
        "Dubai - The City of Modern Wonders",
        "$1199 - 6 Days",
        "img/dubai-packages.jpeg",
        [
            "Accommodation: 5-Star Hotel with Desert View",
            "Flight Included: Round-trip Airfare to Opulence",
            "Airport Transportation: Luxury Transfer to Your Hotel",
            "Daily Buffet Breakfast with Desert Vistas",
            "Private Desert Safari with Dune Bashing",
            "Exclusive Dining at Rooftop Restaurants",
            "Cultural Exploration at Historic Souks",
            "Burj Khalifa At the Top Experience",
            "Dhow Cruise with Dinner on Dubai Creek",
            "Access to Waterparks and Beach Resorts",
            "Expert Guides for Immersive Insights",
            "Complimentary Souvenirs to Remember Dubai",
            "24/7 Concierge Support for Your Comfort"
        ]
    ),
    new Package(
        "Maldives",
        "Maldives - Paradise on Earth",
        "$2299 - 6 Days",
        "img/Maldives-packages.jpg",
        [
            "Accommodation: Overwater Bungalow",
            "Flight Included: Round-trip Airfare to Paradise",
            "Airport Transportation: Seaplane Transfer Included",
            "Daily Breakfast with Ocean Views",
            "Snorkeling and Water Sports Adventures",
            "Romantic Beachside Dinners",
            "Cultural Excursions to Local Islands",
            "Sunset Cruises and Dolphin Watching",
            "Private Snorkeling Safari with Marine Biologist",
            "Unwind with Spa Treatments",
            "Local Guides Sharing Island Stories",
            "Complimentary Island Souvenirs",
            "24/7 Guest Services for a Carefree Getaway"
        ]
    ),
    new Package(
        "New York",
        "New York - The City That Never Sleeps",
        "$2499 - 6 Days",
        "img/newyork-packages.jpg",
        [
            "Accommodation: Luxury Hotel in Manhattan",
            "Flight Included: Round-trip Airfare to the Big Apple",
            "Airport Transportation: Seamless Arrival in New York",
            "Daily Breakfast in a Manhattan Cafe",
            "Guided Tours to Iconic New York Landmarks",
            "Broadway Show Tickets for a Theatrical Night",
            "Culinary Delights in Top NYC Restaurants",
            "Museum Visits and Art Appreciation",
            "Central Park Strolls and Boat Ride",
            "Shopping Excursion in World-Famous Boutiques",
            "Local Experts to Share NYC Insights",
            "Complimentary New York-Themed Souvenirs",
            "24/7 Guest Services for a Memorable NYC Adventure"
        ]
    ),
    new Package(
        "Phuket",
        "Phuket - Thailand's Tropical Gem",
        "$1299 - 4 Days",
        "img/pucket-packages.jpg",
        [
            "Accommodation: Beachfront Resort in Phuket",
            "Flight Included: Round-trip Airfare to Island Bliss",
            "Airport Transportation: Easy Transfer to Your Beach Resort",
            "Daily Breakfast with Ocean Breeze",
            "Island-Hopping Excursions to Nearby Paradises",
            "Snorkeling and Water Sports Adventures",
            "Romantic Beachside Dinners",
            "Exploration of Local Markets and Temples",
            "Sunset Cruises and Island Hopping",
            "Spa and Wellness Experiences",
            "Local Guides to Share Thai Culture and Stories",
            "Complimentary Souvenirs from the Andaman Sea",
            "24/7 Guest Services for a Relaxing Island Getaway"
        ]
    ),
    new Package(
        "Milan",
        "Milan - Italy's Fashion and Design Hub",
        "$2300 - 6 Days",
        "img/milan-packages.jpg",
        [
            "Accommodation: Stylish Hotel in Milan's Fashion District",
            "Flight Included: Round-trip Airfare to Milan",
            "Airport Transportation: Smooth Arrival at Your Hotel",
            "Daily Breakfast with Italian Flair",
            "Guided Tours to Iconic Milanese Landmarks",
            "Fashion District Shopping and Styling Session",
            "Art and History Exploration at Milan's Museums",
            "Day Trip to Charming Lake Como",
            "Gourmet Italian Dining Experiences",
            "Local Experts to Share Milan's Cultural Treasures",
            "Complimentary Italian Souvenirs to Remember Your Journey",
            "24/7 Guest Services for a Carefree Milan Adventure"
        ]
    ),
    new Package(
        "Barcelona",
        "Barcelona - A Tapestry of Culture",
        "$2499 - 7 Days",
        "img/barcelona-packages.jpg",
        [
            "Accommodation: Boutique Hotel in the Heart of the City",
            "Flight Included: Round-trip Airfare to Catalonia",
            "Airport Transportation: Comfortable Arrival to Your Hotel",
            "Daily Breakfast with Views of Barcelona's Landmarks",
            "Guided Tours to Iconic Gaudi Creations",
            "Tapas Tasting and Flamenco Evening",
            "Day Trip to Beautiful Beaches on Costa Brava",
            "Wine Tasting in the Picturesque Penedès Region",
            "Visits to Historic Gothic Quarter and Park Güell",
            "Insightful Local Guides for Cultural Context",
            "Complimentary Local Souvenirs to Cherish Memories",
            "24/7 Guest Services for a Seamless Stay"
        ]
    ),
    new Package(
        "London",
        "London - A City of Timeless Wonders",
        "$2199 - 6 Days",
        "img/London-packages.jpg",
        [
            "Accommodation: 5-Star Hotel",
            "Flight Included: Round-trip Airfare",
            "Airport Transportation: Pick-up and Drop-off Included",
            "Daily Breakfast Buffet Included",
            "Guided Tours to Iconic Landmarks",
            "Exclusive Dining Experiences",
            "West End Theater Show Tickets Included",
            "Afternoon Tea at a Historic London Venue",
            "Private Transportation for Group Excursions",
            "Time for Leisure and Exploration",
            "Expert Local Guides",
            "Complimentary London-Themed Souvenirs",
            "24/7 Concierge Support"
        ]
    )]


function displayPackages(packagesToShow = packages) {
    var container = document.getElementById("packagesContainer");
    container.innerHTML = ""; // Clear existing content

    packagesToShow.forEach(function (pkg) {
        // Create the package container with the "package-container" class
        var packageContainer = document.createElement("div");
        packageContainer.className = "container package-container";

        var packageDiv = document.createElement("div");
        packageDiv.className = "package";
        packageDiv.style.display = "flex";
        packageDiv.style.justifyContent = "space-between";
        packageDiv.style.alignItems = "center";
        packageDiv.style.marginBottom = "20px"; // Space between packages

        var imageDiv = document.createElement("div");
        imageDiv.style.width = "50%";
        imageDiv.style.backgroundImage = "url('" + pkg.imageUrl + "')";
        imageDiv.style.backgroundSize = "cover";
        imageDiv.style.height = "400px";
        packageDiv.appendChild(imageDiv);

        var detailsDiv = document.createElement("div");
        detailsDiv.style.width = "50%";
        detailsDiv.style.padding = "20px";
        detailsDiv.innerHTML = '<h2>' + pkg.title + '</h2>'
            + '<h3 style="color: #555;">' + pkg.price + '</h3>'
            + '<ul>';
        pkg.details.forEach(function (detail) {
            detailsDiv.innerHTML += '<li>' + detail + '</li>';
        });
        detailsDiv.innerHTML += '</ul>';
        packageDiv.appendChild(detailsDiv);

        // Add "Book now" button
        var bookNowButton = document.createElement("button");
        bookNowButton.textContent = "Book now";
        bookNowButton.onclick = function () {
            window.location.href = "signin.html"; // Adjust the path accordingly
        };
        detailsDiv.appendChild(bookNowButton);

        packageContainer.appendChild(packageDiv);
        container.appendChild(packageContainer);
    });
}








// Function to Add New Package
function addPackage() {
    var destination = document.getElementById("newPackageDestination").value;
    var title = document.getElementById("newPackageTitle").value;
    var price = document.getElementById("newPackagePrice").value;
    var imageUrl = document.getElementById("newPackageImage").value;
    var details = document.getElementById("newPackageDetails").value.split(","); // Assuming details are comma-separated
    packages.push(new Package(destination, title, price, imageUrl, details));
    displayPackages(); // Refresh the table
}


// Function to Search Packages
function searchPackages() {
    var searchTerm = document.getElementById("packageSearch").value.toLowerCase();
    var filteredPackages = packages.filter(function (pkg) {
        return pkg.title.toLowerCase().includes(searchTerm);
    });


    displayPackages(filteredPackages);
}


// Attach the search event listener to the search input field
document.getElementById("packageSearch").addEventListener("input", searchPackages);
displayPackages()


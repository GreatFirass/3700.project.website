// Object Constructor and Array Initialization
function Location(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
}

var locations = [
    // ... existing location instances
    new Location(
        "Paris",
        "Paris is the capital of France and is often called 'The City of Light.' It's famous for its beautiful landmarks like the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral. The city is known for its delicious food, stunning art, and romantic atmosphere. In Paris, you can enjoy tasty pastries, fine dining, and relaxing at cozy cafes. The city is full of museums, art galleries, and theaters that showcase amazing talent. It's also a great place to shop for fashionable clothing and accessories.",
        "img/paris-location.jpg"
    ),
    new Location(
        "London",
        "London, the capital of the United Kingdom, is a city that effortlessly combines its historic past with a modern and vibrant present. It boasts iconic landmarks like the Tower Bridge, Buckingham Palace, and the British Museum. London's diverse neighborhoods offer a taste of different cultures and cuisines, while its world-class museums and theaters provide endless opportunities for cultural exploration. This bustling city is also a haven for shoppers, with everything from luxury boutiques to quirky markets. London's lush parks provide a welcome escape from the urban pace. With its blend of history and contemporary energy, London continues to captivate and inspire all who visit.",
        "img/london-location.jpg"
    ),
    new Location(
        "Los Angeles",
        "Los Angeles is often called 'The City of Dreams.' It's famous for its beautiful landmarks like the Hollywood Sign, Santa Monica Pier, and Griffith Observatory. The city is known for its entertainment industry, stunning beaches, and diverse culture. In Los Angeles, you can explore movie studios, relax on the beach, and dine at world-class restaurants. The city offers a mix of art, music, and outdoor activities for everyone to enjoy.",
        "img/LA--location.jpg"
    ),
    new Location(
        "Maldives",
        "The Maldives, a tropical paradise in the Indian Ocean, is renowned for its pristine white-sand beaches, crystal-clear turquoise waters, and overwater bungalows. This island nation offers a serene escape from the hustle and bustle of city life. It's a snorkeler's and diver's dream, with vibrant coral reefs and diverse marine life. The Maldives is all about relaxation and rejuvenation, where you can unwind in luxurious resorts and enjoy stunning sunsets. Whether you're looking for a romantic getaway or an underwater adventure, the Maldives promises a slice of heaven on Earth.",
        "img/maldives-index.jpg"
    ),
    new Location(
        "Dubai",
        "Dubai, a city in the United Arab Emirates, is a marvel of modernity. It's known for its futuristic skyline, including iconic structures like the Burj Khalifa, the world's tallest building. Dubai is a hub of luxury shopping, with extravagant malls and traditional markets. The city seamlessly blends tradition with innovation, offering cultural experiences, such as exploring the historic Al Fahidi neighborhood, as well as thrilling adventures like desert safaris. With its year-round sunshine, stunning architecture, and a dynamic atmosphere, Dubai is a city that captures the imagination.",
        "img/dubai-location.jpg"
    ),
    new Location(
        "Barcelona",
        "Barcelona, the capital of Catalonia, Spain, is a city where artistic inspiration meets Mediterranean charm. It's celebrated for its unique architecture, including Antoni Gaudí's breathtaking creations like the Sagrada Familia and Park Güell. The city offers a delightful blend of cultural experiences, from exploring the historic Gothic Quarter to the lively atmosphere of Las Ramblas. Barcelona's pristine beaches, delectable cuisine, and a thriving arts scene make it a destination for all senses. With its colorful streets, dynamic energy, and a love for life, Barcelona embodies the spirit of Catalonia.",
        "img/barcelona-location.jpg"
    ),
    new Location(
        "Milan",
        "Milan, the fashion capital of Italy, is a dynamic metropolis renowned for its style, culture, and innovation. It's a city where history and modernity intersect seamlessly. Milan is famous for its exquisite fashion boutiques, such as those in the Quadrilatero della Moda, and its dedication to design, showcased at the annual Milan Design Week. The city's rich heritage is evident in its iconic landmarks, including the awe-inspiring Milan Cathedral and the historic Sforza Castle. Milan's culinary scene is a delight for food enthusiasts, with a wide range of trattorias and world-class restaurants. With its blend of sophistication and tradition, Milan stands as a global center for art, fashion, and contemporary living.",
        "img/italy-location.jpg"
    ),
    new Location(
        "Phuket",
        "Phuket, the largest island in Thailand, is a tropical paradise that enchants visitors with its pristine beaches, lush rainforests, and vibrant culture. The island is known for its stunning coastline, with postcard-worthy beaches like Patong, Kata, and Karon. Phuket offers a blend of relaxation and adventure, from basking in the sun to exploring the underwater wonders of the Andaman Sea. The vibrant Patong Beach area boasts a lively nightlife scene, while the Old Town is a treasure trove of history and culture. Phuket is a place where you can savor delicious Thai cuisine, embark on island-hopping adventures, and immerse yourself in the warm hospitality of the locals. With its natural beauty and endless possibilities, Phuket is a sought-after destination for travelers seeking an unforgettable island getaway.",
        "img/phuket-location.jpg"
    ),

    new Location(
        "New York",
        "New York City, often simply called New York, is a bustling metropolis on the eastern coast of the United States. It's a city that never rests, renowned for its iconic skyline, which features landmarks like the Empire State Building and Times Square. New York is a global melting pot, celebrated for its diverse neighborhoods, cultural institutions, and culinary scene. The city offers a wealth of experiences, from exploring world-class museums like the Metropolitan Museum of Art to enjoying a Broadway show. Central Park provides a lush oasis in the heart of the urban jungle. With its energy, opportunity, and enduring spirit, New York stands as one of the world's most influential and captivating cities.",
        "img/newyork-location.jpg"
    )
];


// Display Function
function displayLocations(filteredLocations) {
    var container = document.getElementById("locationsContainer");
    container.innerHTML = ""; // Clear existing content

    var locationsToShow = filteredLocations || locations; // Use filteredLocations if provided, else use all locations

    locationsToShow.forEach(function (location) {
        var locationContainer = document.createElement("div");
        locationContainer.className = "container location-container";

        var locationDiv = document.createElement("div");
        locationDiv.className = "location";
        locationDiv.style.display = "flex";
        locationDiv.style.justifyContent = "space-between";
        locationDiv.style.alignItems = "center";
        locationDiv.style.marginBottom = "20px";

        var imageDiv = document.createElement("div");
        imageDiv.style.width = "50%";
        imageDiv.innerHTML = '<img src="' + location.image + '" alt="' + location.name + '" class="location-image">';
        locationDiv.appendChild(imageDiv);

        var detailsDiv = document.createElement("div");
        detailsDiv.style.width = "50%";
        detailsDiv.style.padding = "20px";
        detailsDiv.innerHTML = '<h3 class="location-title">' + location.name + '</h3>'
            + '<p class="location-description">' + location.description + '</p>';
        locationDiv.appendChild(detailsDiv);

        locationContainer.appendChild(locationDiv);
        container.appendChild(locationContainer);
    });
}

// Function to Add New Location
function addLocation() {
    var name = document.getElementById("newLocationName").value;
    var description = document.getElementById("newLocationDesc").value;
    var image = document.getElementById("newLocationImg").value;
    locations.push(new Location(name, description, image));
    displayLocations(); // Refresh the table
}

// Function to Search Locations
function searchLocations() {
    var searchTerm = document.getElementById("locationSearch").value.toLowerCase();
    var filteredLocations = locations.filter(function (loc) {
        return loc.name.toLowerCase().includes(searchTerm) || loc.description.toLowerCase().includes(searchTerm);
    });

    displayLocations(filteredLocations);
}

// Event listener for location search input
document.getElementById("locationSearch").addEventListener("input", searchLocations);

window.onload = function () {
    displayLocations(); // Display all locations initially

    // Add event listener for location search
    var searchInput = document.getElementById("locationSearch");
    searchInput.addEventListener("input", searchLocations);
};
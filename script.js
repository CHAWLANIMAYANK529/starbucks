function searchLocations() {
    const searchTerm = document.getElementById('locationSearch').value.toLowerCase();
    const stores = document.querySelectorAll('.store');

    stores.forEach(store => {
        const text = store.textContent.toLowerCase();
        store.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
}
function initMap() {
    // Define Starbucks locations in Jaipur
    const locations = [
        { name: 'Starbucks Raja Park', lat: 26.8938, lng: 75.8281 },
        { name: 'Starbucks Malviya Nagar', lat: 26.8500, lng: 75.8180 },
        { name: 'Starbucks Mansarovar', lat: 26.8565, lng: 75.7644 }
    ];

    // Create the map centered at Jaipur
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 26.9124, lng: 75.7873 } // Centered at Jaipur
    });

    // Add markers for each Starbucks location
    locations.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name
        });
    });
}

onclick="window.open('https://example.com/product-page', '_blank')"

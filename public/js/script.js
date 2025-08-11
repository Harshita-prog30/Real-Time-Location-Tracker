const socket = io();

// Location
navigator.geolocation.getCurrentPosition(
  pos => console.log(pos),
  err => console.warn("Location not available", err),
  { enableHighAccuracy: true }
);

const map = L.map('map').setView([0, 0], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const markers = {};

// Receive location from server
socket.on("receive-location", (data) => {
    const { latitude, longitude, id } = data;

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]); // Update marker position
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

// Handle user disconnect
socket.on("user-disconnect", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});

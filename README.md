<p align="center">
  <img src="https://raw.githubusercontent.com/Harshita-prog30/Real-Time-Location-Tracker/main/location.png" alt="Real-Time Location Tracker Screenshot" width="800" />
</p>


Real-Time Location Tracker
This project is a real-time web application that allows multiple users to share and view each other’s live locations on an interactive map. It was created as part of my learning journey to explore real-time communication, maps integration, and full-stack development. The application uses Socket.IO to send and receive location data instantly, Leaflet.js for displaying interactive maps, and the Geolocation API to fetch the current location from the browser.
About the Project
Developed as a portfolio project to showcase real-time data handling.
Allows multiple users to see each other’s live positions on a map.
Updates location instantly without page refresh using web sockets.
Uses OpenStreetMap for a free and interactive mapping experience.

Tech Stack
Frontend: HTML, CSS, JavaScript, Leaflet.js
Backend: Node.js, Express.js
Real-Time Communication: Socket.IO
API: Browser Geolocation API

Maps: OpenStreetMap

 Features
 Displays the current user location on the map.
 Updates positions in real time for all connected users.
 Moves markers dynamically as users change their location.
 Removes markers when a user disconnects.
 Supports zoom and pan for better navigation.


 FOLDER STRUCTURE
 /public
   ├── index.html
   ├── style.css
   └── script.js
/server
   └── index.js
package.json

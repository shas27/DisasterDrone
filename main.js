window.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const toggleBtn = document.querySelector('.sidebar-toggler');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('closed');
        content.classList.toggle('closed');
    });

    // Initialize Leaflet Map - Centered on Vellore
    var map = L.map('map').setView([12.9165, 79.1325], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var marker = L.marker([12.9165, 79.1325]).addTo(map);
    marker.bindPopup("<b>Drone Location</b>").openPopup();

    // Emergency landing button event
    document.getElementById('emergency-land-btn').addEventListener('click', () => {
        alert('Emergency landing initiated!');
    });

    // Deploy payload button event
    document.getElementById('deploy-payload-btn').addEventListener('click', () => {
        alert('Payload deployment in progress!');
    });

    // Simple telemetry simulation update every 5 secs
    setInterval(() => {
        const altitudeEl = document.querySelector('#drone-status p:nth-child(2)');
        const speedEl = document.querySelector('#drone-status p:nth-child(3)');
        const batteryEl = document.querySelector('#drone-status p:nth-child(4)');

        altitudeEl.innerHTML = `<strong>Altitude:</strong> ${100 + Math.floor(Math.random() * 50)} m`;
        speedEl.innerHTML = `<strong>Speed:</strong> ${30 + Math.floor(Math.random() * 20)} km/h`;
        batteryEl.innerHTML = `<strong>Battery:</strong> ${50 + Math.floor(Math.random() * 50)}%`;
    }, 5000);
});

var map = L.map('map').setView([12.9716, 77.5946], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap'
}).addTo(map);

async function predictRisk() {
    const population = document.getElementById("population").value;
    const rainfall = document.getElementById("rainfall").value;
    const complaints = document.getElementById("complaints").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;

    const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            population: parseInt(population),
            rainfall: parseFloat(rainfall),
            complaints: parseInt(complaints),
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
        })
    });

    const data = await response.json();

    let color = "green";
    if (data.risk_level === "High Risk") color = "red";
    else if (data.risk_level === "Medium Risk") color = "orange";

    L.circleMarker([data.latitude, data.longitude], {
        radius: 10,
        color: color,
        fill: true
    }).addTo(map)
      .bindPopup("Risk: " + data.risk_level + "<br>Score: " + data.risk_score)
      .openPopup();
}

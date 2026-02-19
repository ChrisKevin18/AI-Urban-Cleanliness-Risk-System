document.addEventListener("DOMContentLoaded", function() {

    window.predictRisk = function() {
        let risk = Math.floor(Math.random() * 100);

        let scoreElement = document.getElementById("riskScore");
        let levelElement = document.getElementById("riskLevel");
        let suggestionElement = document.getElementById("suggestion");
        let circle = document.getElementById("progressCircle");

        scoreElement.innerText = risk;

        let level = "Low";
        let suggestion = "Routine monitoring sufficient.";

        let circumference = 314;
        let offset = circumference - (risk / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        if (risk > 70) {
            level = "High";
            suggestion = "Deploy 2 garbage trucks within 8 hours.";
            circle.style.stroke = "#ff4d4d";
            alert("🚨 High Risk Zone Detected!");
        } 
        else if (risk > 40) {
            level = "Medium";
            suggestion = "Schedule preventive waste collection within 24 hours.";
            circle.style.stroke = "#ffa64d";
        } 
        else {
            circle.style.stroke = "#66cc66";
        }

        levelElement.innerText = level;
        suggestionElement.innerText = suggestion;
    };

    // Live Mode
    let interval;
    const liveToggle = document.getElementById("liveMode");

    if (liveToggle) {
        liveToggle.addEventListener("change", function() {
            if (this.checked) {
                interval = setInterval(predictRisk, 5000);
            } else {
                clearInterval(interval);
            }
        });
    }

    // Live Clock
    setInterval(function() {
        let now = new Date();
        document.getElementById("clock").innerText =
            now.toLocaleTimeString();
    }, 1000);

    // Leaflet Map
    var map = L.map('map').setView([12.9716, 77.5946], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.circle([12.9716, 77.5946], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map).bindPopup("High Risk Zone<br>Predicted Overflow: 12 hrs");

    // Charts
    new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
            labels: ["Zone A", "Zone B", "Zone C", "Zone D"],
            datasets: [{
                label: "Risk Score",
                data: [65, 40, 85, 55],
                backgroundColor: ["#ff4d4d", "#ffa64d", "#4d79ff", "#66cc66"]
            }]
        }
    });

    new Chart(document.getElementById("lineChart"), {
        type: "line",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "Risk Trend",
                data: [45, 50, 60, 55, 70, 75, 65],
                borderColor: "#00c6ff",
                fill: false
            }]
        }
    });

    new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: ["Low", "Medium", "High"],
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ["#66cc66", "#ffa64d", "#ff4d4d"]
            }]
        }
    });

});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

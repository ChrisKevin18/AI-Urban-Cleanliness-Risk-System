document.addEventListener("DOMContentLoaded", function() {

    // ===== Predict Risk =====
    window.predictRisk = function() {
        let risk = Math.floor(Math.random() * 100);

        let scoreElement = document.getElementById("riskScore");
        let levelElement = document.getElementById("riskLevel");
        let suggestionElement = document.getElementById("suggestion");

        scoreElement.innerText = risk;

        let level = "Low";
        let suggestion = "Routine monitoring sufficient.";

        if (risk > 70) {
            level = "High";
            suggestion = "Deploy 2 garbage trucks within 8 hours.";
            scoreElement.style.color = "#ff4d4d";
            alert("🚨 High Risk Zone Detected!");
        } 
        else if (risk > 40) {
            level = "Medium";
            suggestion = "Schedule preventive waste collection within 24 hours.";
            scoreElement.style.color = "#ffa64d";
        } 
        else {
            scoreElement.style.color = "#66cc66";
        }

        levelElement.innerText = level;
        suggestionElement.innerText = suggestion;
    };

    // ===== Live Mode =====
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

    // ===== Charts =====

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

// ===== Dark Mode =====
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

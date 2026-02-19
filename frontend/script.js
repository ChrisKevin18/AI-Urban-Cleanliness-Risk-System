function predictRisk() {
    let risk = Math.floor(Math.random() * 100);

    document.getElementById("riskScore").innerText = risk;

    let level = "Low";
    if (risk > 70) level = "High";
    else if (risk > 40) level = "Medium";

    document.getElementById("riskLevel").innerText = level;
}
// BAR CHART - Risk per Zone
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

// LINE CHART - 7 Day Trend
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

// PIE CHART - Risk Distribution
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

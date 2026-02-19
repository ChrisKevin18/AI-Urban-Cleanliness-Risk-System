function predictRisk() {
    let risk = Math.floor(Math.random() * 100);

    document.getElementById("riskScore").innerText = risk;

    let level = "Low";
    if (risk > 70) level = "High";
    else if (risk > 40) level = "Medium";

    document.getElementById("riskLevel").innerText = level;
}

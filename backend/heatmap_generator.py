import folium
import random

def generate_heatmap():
    city_map = folium.Map(location=[12.9716, 77.5946], zoom_start=12)

    for _ in range(20):
        lat = 12.9 + random.random() * 0.1
        lon = 77.5 + random.random() * 0.1
        risk = random.randint(1, 100)

        color = "green"
        if risk > 70:
            color = "red"
        elif risk > 40:
            color = "orange"

        folium.CircleMarker(
            location=[lat, lon],
            radius=8,
            color=color,
            fill=True,
        ).add_to(city_map)

    city_map.save("frontend/heatmap.html")

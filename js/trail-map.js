const mapButton = document.getElementById("load-trail-map");
const mapContainer = document.getElementById("trail-map-container");
const mapNotice = document.getElementById("trail-map-notice");

mapButton.addEventListener("click", function () {
    const map = document.createElement("iframe");

    map.title = "OpenStreetMap showing Lake Louise, Alberta";

    map.src = "https://www.openstreetmap.org/export/embed.html?bbox=-116.22%2C51.40%2C-116.14%2C51.43&layer=mapnik";

    map.loading = "lazy";
    map.referrerPolicy = "strict-origin-when-cross-origin";

    map.setAttribute(
        "sandbox",
        "allow-scripts allow-same-origin"
    );

    mapContainer.appendChild(map);
    mapContainer.hidden = false;
    mapButton.hidden = true;

    mapNotice.textContent =
        "Map requested from OpenStreetMap.";
});
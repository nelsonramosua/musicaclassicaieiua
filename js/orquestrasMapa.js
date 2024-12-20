// Coordenadas das Orquestras
const locations = [
    { name: "Orquestra Gulbenkian", coords: [38.7369, -9.1532] },       // Fundação Gulbenkian, Lisboa
    { name: "Orquestra da Casa da Música", coords: [41.1580, -8.6303] }, // Casa da Música, Porto
    { name: "Orquestra Filarmonia das Beiras", coords: [40.63534256510166, -8.653163015868031] } // Aveiro
];

// Inicializa o mapa centrado em Portugal
const map = L.map('map').setView([39.7, -8.0], 7);

// Adiciona o tile layer (mapa base)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18
}).addTo(map);

// Adiciona os pins no mapa
locations.forEach(location => {
    L.marker(location.coords)
        .addTo(map)
        .bindPopup(`<b>${location.name}</b>`);
});
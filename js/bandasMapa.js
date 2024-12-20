// Coordenadas das Bandas
const locations = [
    { name: "ARMAB - Amigos da Branca", coords: [40.6979, -8.5653] }, // Branca, Portugal
    { name: "Banda de Golães", coords: [41.4622, -8.1555] },          // Golães, Fafe
    { name: "União Filarmónica do Troviscal", coords: [40.4431, -8.5919] } // Troviscal, Oliveira do Bairro
];

// Inicializa o mapa centrado em Portugal
const map = L.map('map').setView([40.9, -8.5], 8);

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
const map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false,
    center: [41.48152525221739, -71.31037103232146],
    zoom: 15,
  }),
  customIcon = L.icon({
    iconUrl: './assets/icon-location.svg',
    iconSize: [66, 88],
    iconAnchor: [33, 88],
  });
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '',
  fadeAnimation: false,
}).addTo(map),
  L.marker(
    [41.48152525221739, -71.31037103232146],
    {
      icon: customIcon,
    },
    {
      alt: 'Modern Art Gallery',
    }
  )
    .addTo(map)
    .bindPopup('Modern Art Gallery');
L.control
  .zoom({
    position: 'bottomright',
  })
  .addTo(map);

map.attributionControl.setPrefix(false);

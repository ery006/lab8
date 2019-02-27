function initMap() {
	L.mapquest.key = 'j78e4sv8IO5nuJSmsBFkaSeykR15oI63';

	var map = L.mapquest.map('map', {
		center: [32.879353, -117.2311],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}
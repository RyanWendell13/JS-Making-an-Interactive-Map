// map object
async function CreateMap(position){
	console.log(position)
	let coords = [position.coords.latitude, position.coords.longitude]
	let map = L.map('map').setView(coords, 14);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '© OpenStreetMap'
	}).addTo(map);

	let userMarker = L.marker(coords).addTo(map);
}

// get coordinates via geolocation api
async function GetUserLocation(){
	await navigator.geolocation.getCurrentPosition(position => CreateMap(position))
}

// get foursquare businesses

// process foursquare array

// event handlers

// window load

// business submit button
document.getElementById('submit').addEventListener('click', (event) => {
	event.preventDefault()
	let business = document.getElementById('business').value
	console.log(business)
})

GetUserLocation()

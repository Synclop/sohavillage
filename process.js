
// fixing the description mess -- normally not needed
info.description = info.description.replace(/Contact([\s\S]*?)Description$/,'');
// fixing the phone number mess -- normally not needed
info.phone = info.phone.replace(':','').split('961');
info.phone.shift();
info.phone = '+961 '+info.phone.join('| +961 ');
// entering the map values manually -- normally not needed
info.location.latitude = "33.831482";
info.location.longitude = "35.752424";
// google maps
options.javascript_options.googleMapStyle = [
	{
		"featureType": "all"
	,	"stylers": [
			{"saturation": -100}
		,	{"gamma": 0.5}
		]
	}
];

makePages();

attachAlbumToAbout('Resort');

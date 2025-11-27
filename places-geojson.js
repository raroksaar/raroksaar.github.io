var square = {
    "type": "FeatureCollection",
    "features": [

        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
					[25.8765170, 57.8470549],
					[25.9749974, 57.8470549],
					[25.9749974, 57.9280127],
					[25.8765170, 57.9280127],
					[25.8765170, 57.8470549]
				
                ]
            },
            "properties": {
                "popupContent": "Aitsra bounding box.",
                "underConstruction": false
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
					[25.7008305, 59.1007529],
					[25.7629614, 59.1007529],
					[25.7629614, 59.1297178],
					[25.7008305, 59.1297178],
					[25.7008305, 59.1007529]
                ]
            },
            "properties": {
                "popupContent": "Ahula küla, Järva vald, Järva maakond",
                "underConstruction": false
            },
            "id": 3
        },
		{
			"type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
				    //sw
					[25.5943746, 59.0024891],
					//se
					[25.5949056, 59.0024891],
					[25.5949056, 59.0026140],
					[25.5943746, 59.0026140],
					[25.5943746, 59.0024891]	
				]					
		},
			"properties": {
			"popupContent": "Anna kirik - church",
					"underConstruction": false
			},
			"id": 4
		},
    ]
};


var kungla = {
    "type": "FeatureCollection",
    "features": [
		    {
            "geometry": {
                "type": "Point",
                "coordinates": [
					27.129707, 58.603866
					
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": 'Alatskivi loss<br><a href="https://www.mois.ee/tartu/alatskivi.shtml">Mõisa Poortal - Estonian Manors web site</a>'
            },
            "id": 51
            },
		{
			"geometry": {"coordinates": [25.47661, 58.850228], "type": "Point"}, "properties": {"popupContent": 'Kirna mõis<br><a href="https://www.mois.ee/jarva/kirna.shtml">Mõisa Poortal - Estonian Manors web site</a>'}, "type": "Feature"	
		}		
		]
};


// draws large circle
var approximate = {
    "type": "FeatureCollection",
    "features": [  
        /// placeholder
		{
            "geometry": {
                "type": "Point",
                "coordinates": [
						//25.5943746, 59.0024891
				    25.597125, 59.008592 
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": 'Anna kirik - church'
            },
            "id": 55
        },	
    ]
};

var exactloc = {
    "type": "FeatureCollection",
    "features": [
		//// placehoolder
		{
            "geometry": {
                "type": "Point",
                "coordinates": [
					//25.5949056, 59.0024891
				    25.597125, 59.008592 
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": 'Anna kirik - church'
            },
            "id": 55
        },	
    ]


    
};

var knights = {
    "type": "FeatureCollection",
    "features": [
			{
            "geometry": {
                "type": "Point",
                "coordinates": [
				    25.328611, 59.248055
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": 'Alavere rüütlimõis - knightly manor <br><a href="https://www.mois.ee//harju/alavere.shtml">Mõisa Poortal - Estonoan Manors</a>'
            },
            "id": 55
        },

			{
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.138889,
                    59.4225
                ]
            },
            "type": "Feature",
            "properties": {
				 "popupContent": '<b>Aaspere rüütlimõis - knightly manor</b><br><a href="https://www.mois.ee/viru/aaspere.shtml">Mõisa Poortal - Estonian Manors</a>'
            }
        },
		{
            "geometry": {
                "type": "Point",
                "coordinates": [
				27.387222, 59.3725
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": 'Edise rüütlimõis - knightly manor<br><a href="https://www.mois.ee/viru/edise.shtml">Mõisa Poortal - Estonian Manors</a> <br><a href="https://et.wikipedia.org/wiki/Edise_m%C3%B5is">Vikipeedia</a>'
            },
            "id": 58
        },
		{
			"geometry": {"coordinates": [24.777692, 58.6868], "type": "Point"}, "properties": {"Country: ": "Eesti", "popupContent": 'Kaisma rüütlimõis - knightly manor<br><a href="https://et.wikipedia.org/wiki/Kaisma_m%C3%B5is">Vikipeedia</a>'}, "type": "Feature"
			
		},
		{
			"geometry": {"coordinates": [24.765067, 59.023431], "type": "Point"}, "properties": {"Country: ": "Eesti", "popupContent": 'Alu rüütlimõis - knightly manor<br><a href="https://www.mois.ee/harju/alu.shtml">Mõisa Poortal - Estonian Manors</a>'}, "type": "Feature"
		},
		{
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.057667,
                    59.070663
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": '<b>Aavere rüütlimõis - knightly manor</b><br><a href="https://www.mois.ee/jarva/aavere.shtml">Mõisa Poortal - Estonian Manors</a>'
				//<br><a href="https://www.mois.ee/liigid.shtml">Rüütlimõis - knightly manor (right click on page to translate)</a>'
            },
            "id": 54
        },
		        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    25.698102,
                    59.096909
                ]
            },
            "type": "Feature",
            "properties": {
				// https://www.mois.ee/jarva/seidla.shtml
                "popupContent": '<b>Seidla rüütlimõis - knightly manor<br><a href="https://www.mois.ee/jarva/seidla.shtml">Mõisa Poortal - Estonian Manors</a>'
				//<br><a href="https://www.mois.ee/liigid.shtml">Rüütlimõis - knightly manor (right click on page to translate)</a>'
            },
            "id": 51
        },

	]
};













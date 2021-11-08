<template>
  <div class="p-3">
    <h1 class="text-lg font-bold m-2">My spendings</h1>
    <div class="divider"></div>
    <div id="map" class="overflow-hidden relative">
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { Threebox } from 'threebox-plugin';
//import * as THREE from 'three';

export default {
    mounted(){
        mapboxgl.accessToken = 'pk.eyJ1Ijoia3BhdWJlcnQiLCJhIjoiY2ttdjNkYzExMDFiNDJ1dXRkNm5oOGZsbiJ9.wvZBsJ9IkgzKfwnh2ViL7g';
        const map = new mapboxgl.Map({
            style: 'mapbox://styles/mapbox/light-v10',
            center: [10.404585947517468,63.417000711297895],
            zoom: 13.5,
            pitch: 45,
            bearing: -17.6,
            container: 'map',
            antialias: true
        });
 
        map.on('load', () => {
        // Insert the layer beneath any symbol layer.
            const layers = map.getStyle().layers;
            const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
        ).id;
        
        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        map.addLayer(
            {
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                'fill-extrusion-color': '#aaa',
                
                // Use an 'interpolate' expression to
                // add a smooth transition effect to
                // the buildings as the user zooms in.
                'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height']
                ],
                'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
                }
                    },
                labelLayerId
        );
        map.addLayer({
				id: 'custom_layer',
				type: 'custom',
				renderingMode: '3d',
				onAdd: function(map, mbxContext){

					// instantiate threebox
					window.tb = new Threebox(
						map, 
						mbxContext,
						{
							defaultLights: true,
							enableSelectingObjects: true
						}
					);
          const spendingPlaces =  [[10.39663147730713, 63.41914312134928],
                                  [10.395455205122646, 63.41952046378666],
                                  [10.395018675344572, 63.4225019798139],
                                  [10.455773596322523, 63.43625450704843],
                                  [10.396887985230316, 63.434221498463906]]
          
          const spendingBars = spendingPlaces.map(p => [[p[0], p[1], 0], [p[0], p[1], Math.floor(Math.random() * 150)]]);

          spendingBars.forEach(sb => {
            const p1 = sb[0];
            const p2 = sb[1];
            console.log(p1);
            console.log(p2);
            const color = p2[2] > 50 ? p2[2] > 100 ? '#880808' : '#FFBF00' : '#088F8F';
            console.log(color);
            const line = window.tb.line({geometry: [p1, p2], color: color, opacity: 1, width: 20, /*radius: 0.25, sides: 50, closed: true*/})
            window.tb.add(line);
          })
          //const geometry = new THREE.CylinderGeometry(500, 500, 604, 302);
          //const geometry2 = new THREE.CylinderGeometry(10, 10, 100, 64);
					//instantiate a red sphere and position it at the origin lnglat
					// var tube = window.tb.line({geometry: [pointOne, pointTwo], color: '#00f', opacity: 0.5, width: 20, /*radius: 0.25, sides: 50, closed: true*/})
						/*.setCoords([10.404585947517468,63.417000711297895]);*/
					//tube.addEventListener('ObjectMouseOver', onObjectMouseOver, false);
					//tube.addEventListener('ObjectMouseOut', onObjectMouseOut, false);
					// add sphere to the scene
					//window.tb.add(tube);

				},
				
				render: function () {
					window.tb.update();
				}
			})
    //     function onObjectMouseOver(e) {
		// 	console.log("ObjectMouseOver: " + e.detail.name);
		// }

		// actions to execute onObjectMouseOut
		// function onObjectMouseOut(e) {
		// 	console.log("ObjectMouseOut: " + e.detail.name);
		// }
    });
    }
}
</script>

<style>
.divider {
  width: 4rem;
  height: 0.25rem;
  background: #2c3e50;
  margin: 0 auto 1rem;
}

#map {
  min-height: calc(100vh - 256px) !important;
}
</style>

<template>
  <div class="custom-height-overflow-thing">
    <div class="fixed z-50 flex flex-row justify-between min-w-full px-6 pt-3">
      <div
        v-for="(spending, i) in spendings"
        :key="i"
        :style="{ backgroundColor: spending[1] }"
        class="px-2 py-1 shadow-lg text-white text-sm"
      >
        {{ spending[0] }}
      </div>
    </div>
    <div id="map" class="overflow-hidden w-full relative"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import { Threebox } from "threebox-plugin";
import generateSpendingBars from "../../../util/generateSpendingBars";
//import * as THREE from 'three';

export default {
  data() {
    return {
      spendings: [
        ["High spending", "#880808"],
        ["Average", "#FFBF00"],
        ["Low spending", "#088F8F"],
      ],
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia3BhdWJlcnQiLCJhIjoiY2ttdjNkYzExMDFiNDJ1dXRkNm5oOGZsbiJ9.wvZBsJ9IkgzKfwnh2ViL7g";
    const map = new mapboxgl.Map({
      style: "mapbox://styles/mapbox/light-v10",
      center: [10.401085947517468, 63.42250711297895],
      zoom: 13.5,
      pitch: 45,
      bearing: -17.6,
      container: "map",
      antialias: true,
    });

    map.on("load", () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === "symbol" && layer.layout["text-field"]
      ).id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      );
      map.addLayer({
        id: "custom_layer",
        type: "custom",
        renderingMode: "3d",
        onAdd: (map, mbxContext) => {
          // instantiate threebox
          window.tb = new Threebox(map, mbxContext, {
            defaultLights: true,
            enableSelectingObjects: true,
          });

          this.$store.state.spendingBars.forEach((sb) => {
            const p1 = sb[0];
            const p2 = sb[1];
            const color =
              p2[2] > 50 ? (p2[2] > 100 ? "#880808" : "#FFBF00") : "#088F8F";
            const line = window.tb.line({
              geometry: [p1, p2],
              color: color,
              opacity: 1,
              width: 20,
            });
            window.tb.add(line);
          });
        },

        render: function () {
          window.tb.update();
        },
      });
    });
  },
};
</script>

<style>
.divider {
  width: 4rem;
  height: 0.25rem;
  background: #2c3e50;
  margin: 0 auto 1rem;
}

#map {
  min-height: calc(100vh - 4rem - 3rem) !important;
}
.custom-height-overflow-thing {
  height: calc(100vh - 112px);
  overflow: hidden;
}
</style>

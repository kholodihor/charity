<template>
  <div class="map-container">
    <div id="map" ref="mapContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

defineOptions({
  name: 'MapView',
})

const mapContainer = ref<HTMLElement | null>(null)
let map: maplibregl.Map | null = null

// Charity locations across different continents
const charityLocations = [
  // Africa
  { name: 'Clean Water Initiative', coordinates: [14.716677, 13.453812], type: 'water' }, // Chad
  { name: 'Rural Education Center', coordinates: [9.082, 7.491], type: 'education' }, // Nigeria
  { name: 'Food Security Program', coordinates: [25.2, 12.8], type: 'food' }, // Sudan
  { name: 'Community Health Clinic', coordinates: [11.5, 3.8], type: 'medical' }, // Cameroon
  { name: 'Children Support Center', coordinates: [17.8, 26.8], type: 'orphan' }, // Libya

  // South America
  { name: 'Amazon Water Project', coordinates: [-63.0, -10.0], type: 'water' }, // Brazil
  { name: 'Rural School Network', coordinates: [-74.3, -8.5], type: 'education' }, // Peru
  { name: 'Community Kitchen', coordinates: [-58.4, -34.6], type: 'food' }, // Argentina
  { name: 'Mobile Health Unit', coordinates: [-66.9, 10.5], type: 'medical' }, // Venezuela
  { name: 'Family Support Center', coordinates: [-70.6, -33.4], type: 'orphan' }, // Chile

  // South East Asia
  { name: 'Clean Rivers Initiative', coordinates: [105.0, 13.0], type: 'water' }, // Cambodia
  { name: 'Village School Project', coordinates: [101.0, 15.0], type: 'education' }, // Thailand
  { name: 'Sustainable Farming', coordinates: [108.0, 14.0], type: 'food' }, // Vietnam
  { name: 'Rural Health Services', coordinates: [122.0, 13.0], type: 'medical' }, // Philippines
  { name: "Children's Safe Home", coordinates: [114.0, 4.0], type: 'orphan' }, // Malaysia

  // Europe
  { name: 'Water Conservation', coordinates: [20.0, 44.0], type: 'water' }, // Serbia
  { name: 'Refugee Education', coordinates: [23.7, 38.0], type: 'education' }, // Greece
  { name: 'Food Bank Network', coordinates: [-3.7, 40.4], type: 'food' }, // Spain
  { name: 'Homeless Health Services', coordinates: [2.3, 48.9], type: 'medical' }, // France
  { name: 'Youth Support Program', coordinates: [14.5, 35.9], type: 'orphan' }, // Malta
]

onMounted(() => {
  if (mapContainer.value) {
    // Initialize the map
    map = new maplibregl.Map({
      container: mapContainer.value,
      style: {
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            // Use English language map tiles
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png?language=en'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors',
          },
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 19,
          },
        ],
        glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
        transition: { duration: 300, delay: 0 },
      },
      center: [20, 15], // Center on Africa
      zoom: 3,
    })

    // Add navigation controls
    if (map) {
      map.addControl(new maplibregl.NavigationControl())

      // Add markers for charity locations when map is loaded
      map.on('load', () => {
        // Add markers for charity locations
        charityLocations.forEach((location) => {
          // Define colors for different charity types
          const colors: Record<string, string> = {
            water: '#3498db',
            education: '#f1c40f',
            food: '#2ecc71',
            medical: '#e74c3c',
            orphan: '#9b59b6',
          }
          const color = colors[location.type] || '#3498db'

          // Add marker to map using default MapLibre markers with custom color
          if (map) {
            // Create popup with content
            const popup = new maplibregl.Popup({
              offset: [0, 7],
              closeButton: true,
              closeOnClick: true,
              maxWidth: '300px',
              className: 'charity-popup',
            }).setHTML(`
              <div class="popup-content">
                <h3>${location.name}</h3>
                <div class="popup-type" style="background-color: ${color}; color: white; padding: 3px 8px; border-radius: 4px; display: inline-block;">${location.type}</div>
                <p class="popup-description">Supporting communities through ${location.type}-focused initiatives.</p>
                <div class="popup-actions">
                  <button class="learn-more-btn">Learn More</button>
                  <button class="donate-btn">Donate</button>
                </div>
              </div>
            `)

            // Create marker with popup
            new maplibregl.Marker({
              color: color,
              scale: 1.0,
            })
              .setLngLat(location.coordinates as [number, number])
              .setPopup(popup)
              .addTo(map)
          }
        })
      })
    }
  }
})

onUnmounted(() => {
  // Clean up map instance when component is unmounted
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped lang="scss">
.map-container {
  padding: 1rem;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

#map {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

:deep(.maplibregl-ctrl-attrib-inner) {
  font-size: 10px;
  color: #666;
}

:deep(.maplibregl-ctrl-top-right) {
  margin-top: 1rem;
  margin-right: 1rem;
}

// Custom marker styles
// Enhance default markers
:deep(.maplibregl-marker) {
  cursor: pointer;
  transition: transform 0.2s ease;
  z-index: 1;

  &:hover {
    transform: scale(1.2);
    z-index: 2;
  }

  // Improve marker SVG appearance
  svg {
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
  }
}

:deep(.maplibregl-popup) {
  max-width: 300px;
  z-index: 3 !important; // Ensure popups are always on top
  pointer-events: auto !important; // Enable mouse interactions

  &.charity-popup .maplibregl-popup-content {
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border: none;
    animation: fadeIn 0.2s ease-in-out;
  }

  .popup-content {
    background: white;

    h3 {
      margin: 0;
      padding: 15px 15px 10px;
      color: #333;
      font-size: 1.1rem;
      font-weight: 600;
      border-bottom: 1px solid #f0f0f0;
    }

    .popup-type {
      display: inline-block;
      padding: 3px 8px;
      margin: 10px 15px;
      border-radius: 4px;
      text-transform: capitalize;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .popup-description {
      margin: 0;
      padding: 0 15px 15px;
      color: #666;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .popup-actions {
      display: flex;
      border-top: 1px solid #f0f0f0;

      button {
        flex: 1;
        padding: 10px;
        border: none;
        background: none;
        cursor: pointer;
        font-weight: 500;
        transition: background-color 0.2s;

        &:hover {
          background-color: #f9f9f9;
        }

        &:first-child {
          border-right: 1px solid #f0f0f0;
        }
      }

      .learn-more-btn {
        color: #3498db;
      }

      .donate-btn {
        color: #e67e22;
      }
    }
  }

  .maplibregl-popup-close-button {
    font-size: 16px;
    color: #999;
    padding: 5px;
    right: 5px;
    top: 5px;

    &:hover {
      color: #333;
      background: none;
    }
  }

  .maplibregl-popup-tip {
    border-top-color: white !important;
    border-bottom-color: white !important;
  }
}

// Animation keyframes
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

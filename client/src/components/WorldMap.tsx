import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useState } from "react";
import type { Geometry } from "geojson";

const geoUrl =
  "/maps/world-50m.json";

// GeoJSON country properties
interface CountryProperties {
  NAME: string; // Country name
  ISO_A2: string; // Country code
  [key: string]: string | number; // other optional properties
}

interface GeographyFeature {
  type: "Feature";
  geometry: Geometry;
  properties: CountryProperties;
  rsmKey: string; // injected by react-simple-maps
}

// Marker type
interface MarkerData {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
}

export default function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const markers: MarkerData[] = [
    { name: "New York", coordinates: [-74.0059, 40.7128] },
    { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
    { name: "Tokyo", coordinates: [139.6917, 35.6895] },
    { name: "Sydney", coordinates: [151.2093, -33.8688] },
  ];
  

  return (
    <ComposableMap projectionConfig={{ scale: 150 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: GeographyFeature[] }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="none"
              stroke="#999"
            />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates }) => (
        <Marker
          key={name}
          coordinates={coordinates}
          onMouseEnter={() => setHovered(name)}
          onMouseLeave={() => setHovered(null)}
        >
          <circle r={5} fill="#F53" stroke="#fff" strokeWidth={2} />
          {hovered === name && (
            <text
              textAnchor="middle"
              y={-10}
              style={{
                fontFamily: "poppins",
                fill: "#333",
                fontSize: "10px",
              }}
            >
              {name}
            </text>
          )}
        </Marker>
      ))}
    </ComposableMap>
  );
}

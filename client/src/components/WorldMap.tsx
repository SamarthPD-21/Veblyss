"use client";

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

// Shared marker dataset (kept at top-level so other helpers can reuse it)
const MARKERS: MarkerData[] = [
  { name: "Vancouver", coordinates: [-123.1216, 49.2827] },
  { name: "Denver", coordinates: [-104.9903, 39.7392] },
  { name: "London", coordinates: [-0.1276, 51.5072] },
  { name: "Amsterdam", coordinates: [4.9041, 52.3676] },
  { name: "Berlin", coordinates: [13.4050, 52.5200] },
  { name: "Copenhagen", coordinates: [12.5683, 55.6761] },
  { name: "Prague", coordinates: [14.4378, 50.0755] },
  { name: "Athens", coordinates: [23.7275, 37.9838] },
  { name: "Istanbul", coordinates: [28.9784, 41.0082] },
  { name: "Tel Aviv", coordinates: [34.7818, 32.0853] },
  { name: "Nairobi", coordinates: [36.8219, -1.2921] },
  { name: "Addis Ababa", coordinates: [38.7578, 9.0192] },
  { name: "Cairo", coordinates: [31.2357, 30.0444] },
  { name: "Johannesburg", coordinates: [28.0473, -26.2041] },
  { name: "Dubai", coordinates: [55.2708, 25.2048] },
  { name: "Jakarta", coordinates: [106.8456, -6.2088] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] }
];

export default function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const markers: MarkerData[] = MARKERS;

  

  return (
    <ComposableMap
      projectionConfig={{ scale: 150 }}
      preserveAspectRatio="none"
      className="w-screen h-full"
    >
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
          <line
            x1={0}
            y1={0}
            x2={0}
            y2={12} // length of the needle
            stroke="#000"
            strokeWidth={1}
          />
          <circle r={5} fill="#F53" stroke="#000" strokeWidth={1} />
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

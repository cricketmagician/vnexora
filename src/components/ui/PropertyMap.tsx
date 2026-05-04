"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  lat: number;
  lng: number;
  image: string;
}

interface PropertyMapProps {
  properties: Property[];
  activeId?: number | null;
}

function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function PropertyMap({ properties, activeId }: PropertyMapProps) {
  const [center, setCenter] = useState<[number, number]>([25.3176, 83.0062]); // Varanasi Center

  useEffect(() => {
    if (activeId) {
      const active = properties.find((p) => p.id === activeId);
      if (active) {
        setCenter([active.lat, active.lng]);
      }
    }
  }, [activeId, properties]);

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", background: "#020617" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.lat, property.lng]}
          >
            <Popup className="custom-popup">
              <div className="p-1 max-w-[200px]">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <h4 className="text-xs font-bold text-black mb-1">{property.name}</h4>
                <p className="text-[10px] text-gray-600 mb-2">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-[#A67C52]">{property.price}</span>
                  <button className="text-[9px] uppercase font-bold text-black bg-gray-100 px-2 py-1 rounded">
                    View
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <ChangeView center={center} zoom={activeId ? 15 : 13} />
      </MapContainer>

      <style jsx global>{`
        .leaflet-container {
          font-family: inherit;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          padding: 0;
          overflow: hidden;
        }
        .leaflet-popup-content {
          margin: 0;
          width: auto !important;
        }
        .custom-popup .leaflet-popup-tip-container {
          display: none;
        }
      `}</style>
    </div>
  );
}

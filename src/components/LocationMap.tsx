'use client'

import React, { useEffect, useRef } from 'react'
import styles from './LocationMap.module.css'

declare global {
  interface Window {
    initMap: () => void;
  }
}

const LocationMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current) {
        const joacaba = { lat: -27.1841302, lng: -51.4992239 }
        const map = new google.maps.Map(mapRef.current, {
          center: joacaba,
          zoom: 15,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
            { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
            { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
            { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
            { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
            { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
            { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
            { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
            { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
            { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
            { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
            { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
            { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
            { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] }
          ]
        })

        new google.maps.Marker({
          position: joacaba,
          map: map,
          title: "Andre Barber"
        })
      }
    }

    if (typeof google !== 'undefined') {
      initMap()
    } else {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDfj6cAiILb2LdNRVuRJ0oJyEQK7UP2kgQ&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
      window.initMap = initMap
    }

    return () => {
      // Clean up
      if (window.google && window.google.maps) {
        window.google.maps = undefined as any;
      }
      window.initMap;
    }
  }, [])

  return (
    <div className={styles.container}>
      <div ref={mapRef} className={styles.mapWrapper}></div>
      <svg className={styles.arrowMoldingUp} viewBox="0 0 50 19">
        <path d="M25.5 18.85C25.5 9.426 43 1.347 50 1.347V0H0v1.347c7 0 25.5 8.078 25.5 17.504Z" fill="currentColor" />
      </svg>
      <svg className={styles.arrowMoldingDown} viewBox="0 0 50 19">
        <path
          d="M24.5 0C24.5 9.425 7 17.504 0 17.504v1.347h50v-1.347c-7 0-25.5-8.079-25.5-17.504Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default LocationMap


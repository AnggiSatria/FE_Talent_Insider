import React from 'react'
import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import "../../Assets/CSS/Global.scss"

export default function Maps() {

  const {isLoaded} = useLoadScript({googleMapsApiKey : "AIzaSyBF5vIyei8MJkKwlhmlSfv911BRCiwd2A8"})

  if(!isLoaded) return <div>...</div>;

  return <Map/>
}

function Map(){

  return <GoogleMap zoom={10}
  center={{lat : -6.282740, lng : 106.770100}}
  mapContainerClassName="map-container"
  >
    <Marker position={{lat : -6.282740, lng : 106.770100}}/>
  </GoogleMap>
}
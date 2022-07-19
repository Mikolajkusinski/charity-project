import React, {Component} from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import { formatRelative} from "date-fns";
import mapStyles from "./mapStyles";
import NavBar from "./navBar";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};
const center = {
    lat: 43,
    lng: -79,
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function App(){
    const {isLoaded, loadError} = useLoadScript(
        {googleMapsApiKey: "AIzaSyDg-IC3oUW9Wb0I_KXleLy1JIavyPDUBe0",
        libraries,
        });

    if(loadError) return "ERROR loading maps";
    if(!isLoaded) return "Loading Maps...";



    return(

        <div>
            <NavBar/>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options}></GoogleMap>
        </div>
    )

}
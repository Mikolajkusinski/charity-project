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
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxOption, ComboboxPopover} from "@reach/combobox";
import "@reach/combobox/styles.css"

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "93vh",
};
const center = {
    lat: 54,
    lng: 18.5,
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

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) =>{
        mapRef.current = map;
    },[]);

    const panTo = React.useCallback(({lat,lng}) => {
        mapRef.current.panTo({lat,lng});
        mapRef.current.setZoom(14);
    },[]);

    if(loadError) return "ERROR loading maps";
    if(!isLoaded) return "Loading Maps...";



    return(

        <div>
            <Search panTo = {panTo}/>
            <NavBar/>

            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
               onLoad={onMapLoad}
            ></GoogleMap>
        </div>
    )

}

function Search({panTo}){
    const {ready, value, suggestions: {status, data}, setValue , clearSuggestions} = usePlacesAutocomplete({
        requestOptions:{
            location: { lat: () => 54, lng: () => 18.5},
            radius: 200 *1000,
        },
    });



    return<div className={"search"}> <Combobox onSelect={ async (address) =>{
        try {
            const results = await getGeocode({address});
            const {lat, lng} = await getLatLng(results[0]);
            panTo({lat,lng});
        }catch (error) {
            console.log("error!");
        }
    }}>
        <ComboboxInput
            value = {value}
            onChange={(e) =>{
                setValue(e.target.value);
            }}
            disabled = {!ready}
            placeholder={"Podaj adres"}
        />
        <ComboboxPopover>
            {status === "OK" && data.map(({id,description}) =>(<ComboboxOption key = {id} value={description}/>))}

        </ComboboxPopover>
    </Combobox>
    </div>
}

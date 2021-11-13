import { useCallback, useEffect, useRef, useState } from 'react';
import { InteractiveMap, Marker, Popup } from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import RoomIcon from '@mui/icons-material/Room';
import { basemaps } from "./BasemapSelector";
import { motion } from 'framer-motion';
import Controls from './Controls';
import { Box, IconButton, Typography } from '@material-ui/core';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';

function Map() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 65.41,
    longitude: 25.88,
    zoom: 4.3
  });

  const [basemap, setBaseMap] = useState(basemaps[0].url);
  const map = useRef();
  window.onresize = () => {
    setViewport({
      ...viewport,
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      console.log(newViewport);
      setViewport(v => { return { ...v, ...newViewport }; });
    },
    [setViewport]
  );

  const [markers, setMarkers] = useState([]);
  const [addingLocations, setAddingLocations] = useState(false);

  const handleOnClick = (ev) => {
    if (addingLocations) {
      const coordinates = ev.lngLat;
      setMarkers(markers.concat({ id: new Date().getTime(), latitude: coordinates[1], longitude: coordinates[0], popup: false }));
    }
  };

  const handleMarkerDragEnd = (id, ev) => {
    setMarkers(markers.map(m => (m.id === id ? { ...m, latitude: ev.lngLat[1], longitude: ev.lngLat[0] } : m)));
  };

  useEffect(() => {
    console.log(markers);
  }, [markers]);
  const handleMarkerClick = (id, ev) => {
    setMarkers(markers.map(m => (m.id === id ? { ...m, popup: true } : m)));
  };

  return (<div>
    <div style={{ position: "absolute", zIndex: 2, bottom: 30 }}>
      <Controls
        viewport={viewport}
        basemap={basemap}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        setBasemap={setBaseMap}
        setAddingLocations={setAddingLocations}
        addingLocations={addingLocations}
      />
    </div>
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <InteractiveMap
        {...viewport}
        ref={map}
        mapStyle={basemap}
        onNativeClick={handleOnClick}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      >
        {markers.map(marker => {
          const text = `lat: ${marker.latitude.toFixed(5)}, lng: ${marker.longitude.toFixed(5)}`;
          return (<>
            {marker.popup &&
              <Popup
                key={marker.id}
                latitude={marker.latitude}
                longitude={marker.longitude}
                style={{ zIndex: 100 }}
                closeButton={false}
              >
                <Box display="flex" flexDirection="column">
                  <Box position="absolute" top="5px" right="5px">
                    <IconButton size="small" onClick={() => { setMarkers(markers.map(m => (m.id === marker.id ? { ...m, popup: false } : m))); }} >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Box><br /></Box>
                  <Typography>
                    {text}
                    <IconButton size="small" onClick={() => navigator.clipboard.writeText(text)}><ContentCopyIcon fontSize="16px" /></IconButton>
                  </Typography>
                </Box>
              </Popup>
            }
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0.5, 1], translateY: [-100, 0] }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Marker
                offsetLeft={-12}
                offsetTop={-24}
                draggable={true}
                key={marker.id}
                latitude={marker.latitude}
                longitude={marker.longitude}
                onDragEnd={(ev) => { handleMarkerDragEnd(marker.id, ev); }}
                onClick={(ev) => { handleMarkerClick(marker.id, ev); }}
              >
                <RoomIcon color={"info"} />
              </Marker>
            </motion.div>
          </>
          );
        })}
        {map.current &&
          <Geocoder
            mapRef={map}
            style={{ fontSize: '12px' }}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            position="top-right"
          />}
      </InteractiveMap>
    </div>
  </div>
  );
}
export default Map;
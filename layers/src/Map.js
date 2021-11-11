import { useRef, useState, useEffect } from 'react';
import ReactMapGL, { InteractiveMap, getMap } from 'react-map-gl';
import BasemapSelector from './BasemapSelector';
import { div } from '@material-ui/core';

import { basemaps } from "./BasemapSelector";
import { useDebounce } from './hooks';

export default function () {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 65.41,
    longitude: 25.88,
    zoom: 4.3
  });

  const [basemap, setBaseMap] = useState(basemaps[0].url);
  const [bounds, setBounds] = useState();
  const map = useRef();

  return (<div>
    <div style={{ position: "absolute", zIndex: 2 }}>
      <BasemapSelector
        viewport={viewport}
        basemap={basemap}
        setBasemap={setBaseMap} />
    </div>
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <InteractiveMap
        {...viewport}
        ref={(ref) => {
          if (ref) map.current = ref.getMap();
        }}
        mapStyle={basemap}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      />
    </div>
  </div>
  );
}
import { useRef, useState } from 'react';
import { InteractiveMap } from 'react-map-gl';
import BasemapSelector from './BasemapSelector';

import { basemaps } from "./BasemapSelector";

function Map () {
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

  return (<div>
    <div style={{ position: "absolute", zIndex: 2 }}>
      <BasemapSelector
        viewport={viewport}
        basemap={basemap}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
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
export default Map;
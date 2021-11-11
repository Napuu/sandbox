import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDebounce, usePrevious } from "./hooks";

export const basemaps = [
  { title: "Streets", url: "mapbox://styles/mapbox/streets-v11", icon: "streets-v11" },
  { title: "Satellite", url: "mapbox://styles/mapbox/satellite-v9", icon: "satellite-v9" },
];
export default function ({ setBasemap, viewport }) {

  const debouncedViewport = useDebounce(viewport, 1000);

  const [basemapUrls, setBasemapUrls] = useState([]);
  const previousBasemapUrls = usePrevious(basemapUrls);
  const [loading, setLoading] = useState(false);
  const [moving, setMoving] = useState(false);
  useEffect(() => {
    setMoving(true);
  }, [viewport]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(debouncedViewport);
    setBasemapUrls(basemaps.map(basemap => {
      return `https://api.mapbox.com/styles/v1/mapbox/${basemap.icon}/static/${debouncedViewport.longitude},${debouncedViewport.latitude},${debouncedViewport.zoom}/${Math.min(viewport.width, 1280)}x${Math.min(viewport.height, 1280)}?access_token=pk.eyJ1IjoicGFsaWtrIiwiYSI6ImNrNzljb2NnaTBueDIzZm55eXJpcjh0M2gifQ.DvQulSOQQxy2CpDWdytTww`;
    }));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(count);
    }, 2000);
    setMoving(false);
    // setUrl(`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${debouncedViewport.longitude},${debouncedViewport.latitude},${debouncedViewport.zoom}/${viewport.width}x${viewport.height}?access_token=pk.eyJ1IjoicGFsaWtrIiwiYSI6ImNrNzljb2NnaTBueDIzZm55eXJpcjh0M2gifQ.DvQulSOQQxy2CpDWdytTww`);
  }, [debouncedViewport]);

  useEffect(() => {
    if (moving) {
      setCount(count + 1);
    }
  }, [moving]);
  return (
    <div style={{ background: "red" }}>
      {basemaps.map((basemap, i) => (
        <Button key={i} onClick={() => {
          setBasemap(basemap.url);
        }}>{basemap.title}
          <img width={50} height={50} style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        src={basemapUrls[i]}></img>
        </Button>
      ))}
      <Button>
      </Button>
    </div>
  );
}

import { Button, Paper, Box } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from "./hooks";

export const basemaps = [
  { title: "Streets", url: "mapbox://styles/mapbox/streets-v11", icon: "streets-v11" },
  { title: "Satellite", url: "mapbox://styles/mapbox/satellite-v9", icon: "satellite-v9" },
];

// No idea what is going on here.
// Trying to use named function breaks useRef.
// eslint-disable-next-line
export default function ({ setBasemap, viewport, mapboxApiAccessToken }) {

  const debouncedViewport = useDebounce(viewport, 1000);
  const basemapCanvasRefs = basemaps.map(basemap => useRef(null));

  const [justLoaded, setJustLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setJustLoaded(true), 3000);
  }, []);
  useEffect(() => {
    if (!justLoaded) return;

    const setImage = async (index) => {
      const img = new Image();
      const basemap = basemaps[index];
      img.onload = () => {
        const canvas = basemapCanvasRefs[index].current;
        const ctx = canvas.getContext("2d");
        let i = 0;
        const test = () => {
          i += 0.01;
          ctx.globalAlpha = i;
          let drawableWidth = canvas.width;
          let drawableHeight = canvas.height;
          if (drawableHeight > drawableWidth) {
            drawableHeight = drawableWidth / img.width * img.height;
          } else {
            drawableWidth = drawableHeight / img.height * img.width;
          }
          ctx.drawImage(img, 0, 0, drawableWidth, drawableHeight);
          if (i < 1) {
            requestAnimationFrame(test);
          }
        };
        requestAnimationFrame(test);
      };
      img.src = `https://api.mapbox.com/styles/v1/mapbox/${basemap.icon}/static/${debouncedViewport.longitude},${debouncedViewport.latitude},${debouncedViewport.zoom}/${Math.min(debouncedViewport.width, 1280)}x${Math.min(debouncedViewport.height, 1280)}?access_token=${mapboxApiAccessToken}`;
    };
    Promise.all(basemaps.map((_, i) => {
      return setImage(i);
    }));
  }, [justLoaded, debouncedViewport, basemapCanvasRefs, mapboxApiAccessToken]);

  return (
    <Box p={1}>
      <Paper>
        <Box p={0.5} display="flex" flexDirection="column">
          {basemaps.map((basemap, i) => (
            <Button key={i} onClick={() => {
              setBasemap(basemap.url);
            }}>
              <canvas ref={basemapCanvasRefs[i]} width={75} height={75} />
            </Button>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}

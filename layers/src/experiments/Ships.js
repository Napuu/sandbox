import { TripsLayer } from '@deck.gl/geo-layers';
import DeckGL from '@deck.gl/react';
import { useEffect, useState, useCallback } from 'react';
export default function Layer({ data, viewState }) {
  /**
   * Data format:
   * [
   *   {
   *     waypoints: [
   *      {coordinates: [-122.3907988, 37.7664413], timestamp: 1554772579000}
   *      {coordinates: [-122.3908298,37.7667706], timestamp: 1554772579010}
   *       ...,
   *      {coordinates: [-122.4485672, 37.8040182], timestamp: 1554772580200}
   *     ]
   *   }
   * ]
   */
  // const te
  const animationSpeed = 86400000 / 1500;
  const [time, setTime] = useState(0);
  const [animation] = useState({});

  const animate = useCallback(() => {
    setTime(t => (t + animationSpeed) % 86400000);
    animation.id = window.requestAnimationFrame(animate);
  }, [animation, animationSpeed]);

  useEffect(
    () => {
      animation.id = window.requestAnimationFrame(animate);
      return () => window.cancelAnimationFrame(animation.id);
    },
    [animation, animate]
  );

  useEffect(() => {
    if (data.length === 0) return;
    // get maximum timestamp from data
    /*
    let min = Infinity;
    let max = 0;
    data[0].waypoints.forEach(list => {
      if (list.timestamp > max) {
        max = list.timestamp;
      }
      if (list.timestamp < min) {
        min = list.timestamp;
      }
    });
    // get minimum timestamp from data
    console.log(min, max, max - min);
    */
  }, [data]);
  const layer = new TripsLayer({
    id: 'trips-layer',
    data,
    getPath: d => d.waypoints.map(p => p.coordinates),
    // deduct start timestamp from each data point to avoid overflow
    getTimestamps: d => d.waypoints.map(p => p.timestamp),
    getColor: [92, 181, 249],
    opacity: 0.2,
    widthMinPixels: 5,
    rounded: true,
    fadeTrail: true,
    getWidth: d => 5,
    trailLength: animationSpeed * 150 * 5,
    currentTime: time,

    shadowEnabled: false
  });

  return <DeckGL useDevicePixels={true} viewState={viewState} layers={[layer]} />;
};
import React, {useState, useEffect} from 'react';
import { Button, Paper, Box } from '@material-ui/core';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import BasemapSelector from './BasemapSelector';
import { motion } from 'framer-motion';

function Controls({viewport, basemap, mapboxApiAccessToken, setBasemap, setAddingLocations, addingLocations, experiments, setExperiments}) {
  const [justLoaded, setJustLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setJustLoaded(true), 3000);
  }, []);
  return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: justLoaded ? 1 : 0 }}>
      <Box p={1} pb={0}>
        <Paper>
          <Box p={0.5} display="flex" flexDirection="column">
            <Button onClick={() => { setAddingLocations(p => !p); }}>
              <AddLocationAltIcon color={addingLocations ? "success" : "disabled"} />
            </Button>
          </Box >
        </Paper>
      </Box>
      <Box p={1} pb={0}>
        <Paper>
          <Box p={0.5} display="flex" flexDirection="column">
            <Button onClick={() => {
              if (experiments["ships"]) {
                setExperiments({...experiments, "ships": false});
              } else {
                setExperiments({...experiments, "ships": true});
              }
            }}>
              SHIPS
            </Button>
          </Box >
        </Paper>
      </Box>
      <BasemapSelector
        viewport={viewport}
        basemap={basemap}
        mapboxApiAccessToken={mapboxApiAccessToken}
        setBasemap={setBasemap} />
  </motion.div >
  );
}

export default Controls;
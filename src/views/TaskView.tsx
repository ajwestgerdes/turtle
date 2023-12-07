import { Divider, Grid, Box, Typography } from '@mui/material';
import Task from '../components/Task';

export default function TaskView() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} padding={20}>
          <Grid>
            <Typography variant='h5' maxWidth={345}>
              test column
            </Typography>
              <Box style={{maxHeight: '100vh', overflow: 'auto'}}>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
              </Box>
          </Grid>
          
        
        <Divider orientation="vertical" />
        <Grid>
            <Task/>
        </Grid>
      </Grid>
    </Box>
  )
}
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Task from './Task';


export default function TaskColumn() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item>
            <Task/>
        </Grid>
      </Grid>
    </Box>
  )
}
import { Divider, Grid, Box, Typography } from '@mui/material';
import Task from '../components/Task';
import { dummyData } from '../assets/dummyData';

export default function TaskView() {
  const data = dummyData
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} padding={20}>
            {data.columnOrder.map(colId => {
              return (
                <Grid>
                  <Typography variant='h5' maxWidth={345}>
                    {data.columns[colId].title}
                  </Typography>
                  <Box style={{maxHeight: '100vh', overflow: 'auto'}}>
                    {data.columns[colId].taskIds.map(tasks => {
                      return (
                        <Task taskId={tasks.id} content={tasks.content} />
                      )
                    })}
                  </Box>
                </Grid>
              )   
            })}
            
          
          
        
        <Divider orientation="vertical" />
      </Grid>
    </Box>
  )
}
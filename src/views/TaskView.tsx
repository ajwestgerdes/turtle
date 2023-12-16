import { Divider, Grid, Box, Typography } from '@mui/material'
import Task from '../components/Task'
import { dummyData } from '../assets/dummyData'

interface Task {
  tasks: { 
    [id: string]: { 
      id: string
      content: string
    }
  }
  columns: { 
    [id: string]: { 
      id: string 
      title: string 
      taskIds: string[] 
    } 
  } 
  columnOrder: string[] 
}

export default function TaskView() {
  const data = dummyData as Task
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container mt={15} px={20}>
            {data.columnOrder.map(colId => {
              return (
                <Grid pr={10} minWidth={345}>
                  <Typography variant='h5'align='center' >
                    {data.columns[colId].title}
                  </Typography>
                  <Box style={{maxHeight: '100vh', overflow: 'auto'}}>
                    {data.columns[colId].taskIds.map(taskId => {
                      return (
                        <Task taskId={data.tasks[taskId].id} content={data.tasks[taskId].content} />
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
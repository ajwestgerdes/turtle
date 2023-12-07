import Nav from './components/Nav'
import './App.css'
import TaskView from './views/TaskView'
import { Grid } from '@mui/material'

function App() {

  return (
    <>
    <Grid container>
      <Nav/>
      <TaskView/>
    </Grid>
    </>
  )
}

export default App

import {Button, Box, Card, CardActions, CardContent} from '@mui/material';
import Typography from '@mui/material/Typography';

interface TaskProps {
  taskId: string,
  content: string
}

export default function Task(props: TaskProps) {
  return (
    <Box padding={2}>
    <Card elevation={10} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" padding={2} align='center' component="div">
          {props.taskId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
    </Box>
  )
}
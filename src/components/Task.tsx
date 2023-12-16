import {Button, Box, Card, CardActions, CardContent} from '@mui/material';
import Typography from '@mui/material/Typography';

interface TaskProps {
  taskId: string,
  content: string
}

export default function Task(props: TaskProps) {
  console.log(props)
  return (
    <Box padding={2}>
    <Card elevation={1} sx={{ maxWidth: 345 }}>
      <CardContent>
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
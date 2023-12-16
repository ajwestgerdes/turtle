export const dummyData = {
    tasks: {
      't1': { id: 't1', content: 'Take out the garbage and this is a test to see what happens when you put something super long and obnoxious in here, it wraps yay' },
      't2': { id: 't2', content: 'Fix Buggos' },
      't3': { id: 't3', content: 'Get better at typings' },
      't4': { id: 't4', content: 'Cook dinner' },
    },
    columns: {
      'c1': {
        id: 'c1',
        title: 'To do',
        taskIds: ['t1', 't2', 't3', 't4', 't2', 't3', 't4', 't2', 't3', 't4', 't2', 't3', 't4'],
      },
      'c2': {
        id: 'c2',
        title: 'Done',
        taskIds: ['t1', 't2']
      }
    },
    // Facilitate reordering of the columns
    columnOrder: ['c1', 'c2'],
  };
import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { SettingsContext } from '../../context/settings';
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, Card, CardActions, CardContent, Button, Checkbox } from '@mui/material';
import { v4 as uuid } from 'uuid';


const ToDo = () => {
  let SettingsValues = useContext(SettingsContext); // This is how you bring in context and how you opt into using context in your component.

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [endIndex, setEndIndex] = useState(SettingsValues.pagination);

  const { handleChange, handleSubmit } = useForm(addItem);
  const { handleDelete, setHandleDelete } = useState(deleteItem);


  function addItem(item) {
    console.log(list);
    item.id = uuid();
    item.complete = false;
    setList([...list, item,]);
  };

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
        console.log(!item.complete)
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  const columns = [
    { field: 'complete', headerName: 'Complete', width: 200 },
    { field: 'text', headerName: 'To-Do', width: 400 },
    { field: 'assignee', headerName: 'Assigned To', width: 150 },
    {
      field: 'difficulty',
      headerName: 'Difficulty',
      width: 150,
    },
    {field: 'delete',
      headerName: 'Delete',
      width: 200,
      // button: <button onClick={() => handleDelete}>Delete</button>
    },
  ];

  
  const card = (
<React.Fragment>
      <CardContent>
        <div>
          <TextField
            name="assignee"
            label="Assign-To"
            placeholder="My"
            multiline
            maxRows={4}
            // value={list}
            onChange={handleChange}
            variant="standard" />
          <TextField
            name="difficulty"
            label="Difficulty(1-5)"
            placeholder="Secret"
            multiline
            variant="standard"
            onChange={handleChange} />
          <TextField
            name="text"
            label="To-Do"
            placeholder="Message"
            multiline
            maxRows={4}
            // value={list}
            onChange={handleChange}
            variant="standard" />
          <button type="submit">Add Item</button>
        </div>
        <button type="submit" onSubmit={(event) => {toggleComplete(event.target.id)}}>complete</button>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
        
          rows={list}
          columns={columns}
          pageSize={SettingsValues.pagination}
          rowsPerPageOptions={[3]}
          checkboxSelection />
      </div>
    </CardContent>
    <CardActions>
      </CardActions>
  </React.Fragment>
  );

  return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
        onDelete={handleDelete}
      >
        <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default ToDo;


import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Select', width: 70 },
  { field: 'firstName', headerName: 'Task', width: 130 },
  { field: 'lastName', headerName: 'Assigned To', width: 130 },
  {
    field: 'Difficulty',
    headerName: 'Difficulty',
    type: 'number',
    width: 90,
  },
  // {
  // 	field: 'fullName',
  // 	headerName: 'Full name',
  // 	description: 'This column has a value getter and is not sortable.',
  // 	sortable: false,
  // 	width: 160,
  // 	valueGetter: (params) =>
  // 		`${params.getValue(params.id, 'firstName') || ''} ${
  // 			params.getValue(params.id, 'lastName') || ''
  // 		}`,
  // },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', Difficulty: 1 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', Difficulty: 2 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', Difficulty: 3 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', Difficulty: 4 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', Difficulty: 5 },
  { id: 6, lastName: 'Melisandre', firstName: null, Difficulty: 1 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', Difficulty: 2 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', Difficulty: 3 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', Difficulty: 4 },
];

export default function Settings() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
        checkboxSelection
      />
    </div>
  );
}

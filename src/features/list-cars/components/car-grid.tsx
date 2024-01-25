import { Description } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';

import DataTable from '../../../components/ui/data-table';
import { Car } from '../../../types/car';

interface Props {
  items: Car[];
}

const CarGrid: React.FC<Props> = ({ items }) => {
  //TODO: Implements handle view  details
  const handleViewDetails = (params: GridRenderCellParams) => {
    console.log('params', params);
  };

  // Table cols definition
  const columns: GridColDef<Car>[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'brand',
      headerName: 'Brand',
    },
    {
      field: 'model',
      headerName: 'Model',
    },
    { field: 'package', headerName: 'Pagckage' },
    {
      field: 'color',
      headerName: 'color',
    },
    { field: 'year', headerName: 'Year' },
    { field: 'category', headerName: 'Category' },
    { field: 'mileage', headerName: 'Mileage' },
    { field: 'price', headerName: 'Price' },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={2}>
          <IconButton color="info" size="small" onClick={() => handleViewDetails(params)}>
            <Description fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return <DataTable columns={columns} rows={items as Car[]} />;
};

export default CarGrid;

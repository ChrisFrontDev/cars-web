import { PersonAddAlt } from '@mui/icons-material';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';

import BasePageLayout from '../../layouts/base-page-layout';
import CreateCarModal from '../create-car/create';
import CarGrid from './components/car-grid';
import { useGetCars } from './hooks/useGetCars';
//TODO:  error remove error type handling from component this violate the single responsibility principle

const ListCar = () => {
  const { cars, isLoading, error } = useGetCars();
  const [isModalOpen, setModalOpen] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>An error occurred: {error.message}</div>;
  if (!cars) return <div>No cars available.</div>;

  return (
    <BasePageLayout pageTitle="Cars" path={[{ label: 'Cars', to: '/' }, { label: 'List' }]}>
      <Button variant="contained" startIcon={<PersonAddAlt />} onClick={() => setModalOpen(true)}>
        New Car
      </Button>
      <CreateCarModal open={isModalOpen} onClose={() => setModalOpen(false)} />
      <Paper sx={{ mt: 2 }}>
        <CarGrid items={cars} />
      </Paper>
    </BasePageLayout>
  );
};

export default ListCar;

import { PersonAddAlt } from '@mui/icons-material';
import { Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import BasePageLayout from '../../layouts/base-page-layout';
import CarGrid from './components/car-grid';
import { useGetCars } from './hooks/useGetCars';

const List = () => {
  const { cars, isLoading, error } = useGetCars();

  if (isLoading) return <div>Loading...</div>;

  //TODO:  error remove error type handling from component this violate the single responsibility principle
  if (error instanceof Error) return <div>An error occurred: {error.message}</div>;
  if (!cars) return <div>No cars available.</div>;

  return (
    <BasePageLayout pageTitle="Cars" path={[{ label: 'Cars', to: '/' }, { label: 'List' }]}>
      <Button component={RouterLink} to="/users/new" variant="contained" startIcon={<PersonAddAlt />}>
        New Car
      </Button>
      <Paper sx={{ mt: 2 }}>
        <CarGrid items={cars} />
      </Paper>
    </BasePageLayout>
  );
};

export default List;

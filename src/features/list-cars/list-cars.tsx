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
    <BasePageLayout pageTitle="List" labelTitle="List">
      <CarGrid items={cars} />
    </BasePageLayout>
  );
};

export default List;

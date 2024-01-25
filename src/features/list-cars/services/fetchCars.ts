import { Car } from '../../../types/car';

export const fetchCars = async (): Promise<Car[]> => {
  // TODO: Use env variable for API URL
  const response = await fetch('http://localhost:3000/cars');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

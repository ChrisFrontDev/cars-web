import { Car } from '../../../types/car';

export const addCar = async (car: Omit<Car, 'id'>): Promise<Car> => {
  const response = await fetch('http://localhost:3000/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

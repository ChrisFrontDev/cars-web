import { useQuery } from '@tanstack/react-query';

import { Car } from '../../../types/car';
import { fetchCars } from '../services/fetchCars';

interface UseCars {
  cars: Car[] | undefined;
  isLoading: boolean;
  isFetching: boolean;
  error: Error | null;
}

export const useGetCars = (): UseCars => {
  const { data: cars, isLoading, isFetching, error } = useQuery({ queryKey: ['cars'], queryFn: fetchCars });

  return {
    cars,
    isLoading,
    isFetching,
    error,
  };
};

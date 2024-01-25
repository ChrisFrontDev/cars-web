import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addCar } from '../services/addCar';

interface Props {
  successCallback: () => void;
  errorCallback: (error: Error) => void;
}

export const usePostCar = ({ successCallback, errorCallback }: Props) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationFn: addCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
      successCallback();
    },
    onError: (error: Error) => {
      console.log(error);
      errorCallback(error);
    },
  });

  return { mutate, isPending, error, isSuccess };
};

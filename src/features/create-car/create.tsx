import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { carSchema } from '../../schemas/car-schema';
import { CarForm } from './components/form/car-form';
import { usePostCar } from './hooks/usePostCar';

interface Props {
  open: boolean;
  onClose: () => void;
}

const CreateCarModal: React.FC<Props> = ({ open, onClose }) => {
  const methods = useForm<z.infer<typeof carSchema>>({
    resolver: zodResolver(carSchema),
  });
  const { mutate } = usePostCar({
    successCallback: () => {
      methods.reset();
      onClose();
    },
    errorCallback: () => {},
  });

  const onSubmit = (data: z.infer<typeof carSchema>) => {
    mutate(data);
  };

  const handleClose = () => {
    onClose();
    methods.reset();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Car</DialogTitle>
        <FormProvider {...methods}>
          <DialogContent sx={{ display: 'flxe', justifyContent: 'center' }}>
            <CarForm />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary" onClick={() => methods.handleSubmit(onSubmit)()}>
              Add
            </Button>
          </DialogActions>
        </FormProvider>
      </Dialog>
    </>
  );
};

export default CreateCarModal;

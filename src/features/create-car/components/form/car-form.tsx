import { Box, TextField } from '@mui/material';
import { Control, Controller, useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { carSchema } from '../../../../schemas/car-schema';

interface FormInputProps {
  name: keyof z.infer<typeof carSchema>;
  control: Control<z.infer<typeof carSchema>>;
  label: string;
  type?: React.HTMLInputTypeAttribute;
}

const FormInput: React.FC<FormInputProps> = ({ name, control, label, type = 'text' }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          sx={{ m: 0.5, width: '100%' }}
          {...field}
          label={label}
          type={type}
          error={!!error}
          helperText={error ? error.message : ' '}
        />
      )}
    />
  );
};

export const CarForm: React.FC = () => {
  const { control } = useFormContext<z.infer<typeof carSchema>>();

  return (
    <form>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <FormInput name="brand" control={control} label="Brand" />
        <FormInput name="model" control={control} label="Model" />
        <FormInput name="package" control={control} label="Package" />
        <FormInput name="color" control={control} label="Color" />
        <FormInput name="year" control={control} label="Year" type="number" />
        <FormInput name="category" control={control} label="Category" />
        <FormInput name="mileage" control={control} label="Mileage" type="number" />
        <FormInput name="price" control={control} label="Price" type="number" />
      </Box>
    </form>
  );
};

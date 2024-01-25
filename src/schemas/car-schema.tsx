import { z } from 'zod';

export const carSchema = z.object({
  brand: z.string().min(2).max(255),
  model: z.string().min(2).max(255),
  package: z.string().min(2).max(255),
  color: z.string().min(2).max(255),
  year: z.coerce.number().min(1900).max(2024),
  category: z.string().min(2).max(255),
  mileage: z.coerce.number().nonnegative(),
  price: z.coerce.number().nonnegative(),
});

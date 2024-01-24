import { enUS as MaterialLocale } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import { enUS as DataGridLocale } from '@mui/x-data-grid';

export const theme = createTheme(
  {
    palette: {
      mode: 'dark',
    },
  },
  DataGridLocale,
  MaterialLocale,
);

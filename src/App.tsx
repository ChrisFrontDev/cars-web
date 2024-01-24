import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

//  TODO: Add a new component to display a list of cars
// TODO: Add a new component to display a single car
// TODO: DARK MODE/LIGHT MODE  https://mui.com/customization/palette/#dark-mode
//TODO: ADD ROUTING https://mui.com/components/app-bar/#app-bar-with-a-primary-search-field

//TODO: ADD A FORM TO ADD A NEW CAR

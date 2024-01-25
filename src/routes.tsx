import { Route, Routes } from 'react-router-dom';

import CarList from './features/list-cars/list-cars';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<CarList />} />
      </Route>
    </Routes>
  );
}

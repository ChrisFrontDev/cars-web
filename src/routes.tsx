import { Route, Routes } from "react-router-dom"
import CarList from "./pages/cars/list"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/cars">
        <Route path="/cars" element={<CarList />} />
      </Route>
    </Routes>
  )
}
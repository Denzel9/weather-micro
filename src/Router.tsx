import { FunctionComponent } from 'react'
import { Routes, Route } from 'react-router-dom'
import Weather from './pages/weather/Weather'

const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route index element={<Weather />} />
    </Routes>
  )
}

export default Router

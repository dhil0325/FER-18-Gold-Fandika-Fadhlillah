import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<Search />} />
    {/* <Route path="/car" element={<Car />} />
    <Route path="/car/:id" element={<CarDetail />} /> */}
  </Routes>
);

export default App;
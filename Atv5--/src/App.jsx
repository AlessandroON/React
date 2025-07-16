import Home from "./pages/Home.jsx";
import Items from "./pages/Items.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
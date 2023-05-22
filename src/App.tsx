import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
        <Route path="*" element={<h1>Page is not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

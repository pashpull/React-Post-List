import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PostList from './pages/Post-List/Post-List';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="*" element={<h1>Page is not found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

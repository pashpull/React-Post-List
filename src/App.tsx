import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import PostList from './pages/Post-List/Post-List';
import User from './pages/User/User';
import About from './pages/About/About';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Page is not found</h1>} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

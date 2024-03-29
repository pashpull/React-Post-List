import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'normalize.css';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import PostListPage from './pages/Post-List-Page/Post-List-Page';
import UserPage from './pages/User-Page/User-Page';
import AboutPage from './pages/About-Page/About-Page';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/React-Post-List">
        <Header />
        <Menu />
        <Main>
          <Routes>
            <Route index element={<PostListPage />} />
            <Route path="/user/:userId" element={<UserPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<h1>Page is not found</h1>} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

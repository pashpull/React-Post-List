import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to={'/'}>
        <h1>Home</h1>
      </Link>
      <Link to={'/About'}>
        <h1>About</h1>
      </Link>
    </header>
  );
};

export default Header;

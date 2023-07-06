import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

import { useAppSelector, useAppDispatch } from '../../hooks/hooksForRedux';
import { setMenuIsActive } from '../../redux/slices/menuSlice';
import { resetError } from '../../redux/slices/errorsSlice';

const Menu = () => {
  const menuState = useAppSelector((state) => state.menu);

  const dispatch = useAppDispatch();

  const menuClickHandler = (): void => {
    dispatch(setMenuIsActive());
  };

  const resetErr = (): void => {
    dispatch(resetError());
  };

  const menuLinkHandler = (): void => {
    menuClickHandler();
    resetErr();
  };

  useEffect((): void => {
    menuState.isActive
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [menuState.isActive]);

  return (
    <div
      className={`menu${menuState.isActive && ' menu_active'}`}
      onClick={menuClickHandler}
    >
      <div className="menu__wrapper">
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
          <ul className="menu__nav-list">
            <li className="menu__nav-item">
              <Link to={'/'} onClick={menuLinkHandler}>
                Home
              </Link>
            </li>
            <li className="menu__nav-item">
              <Link to={'/about'} onClick={menuLinkHandler}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;

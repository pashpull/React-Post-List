import './Header.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/hooksForRedux';
import { setMenuIsActive } from '../../redux/slices/menuSlice';
import fixScrollWidth from '../../lib/fixScrollWidth';

import Button from '../../UI/Button/Button';

const Header = () => {
  const needFixScrollWidth: boolean = useAppSelector(
    (state) =>
      state.posts.isLoading ||
      state.user.isLoading ||
      state.menu.isActive ||
      state.error.isError
  );

  const dispatch = useAppDispatch();

  const menuBtnHandler = (): void => {
    dispatch(setMenuIsActive());
  };

  const scrollWidthFix = fixScrollWidth(needFixScrollWidth);

  return (
    <header className="header" style={scrollWidthFix}>
      <div className="header__bar">
        <Button text={'Menu'} toDo={menuBtnHandler} />
      </div>
    </header>
  );
};

export default Header;

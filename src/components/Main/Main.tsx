import './Main.scss';

import { useAppSelector } from '../../hooks/hooksForRedux';

import fixScrollWidth from '../../lib/fixScrollWidth';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  const needFixScrollWidth: boolean = useAppSelector(
    (state) =>
      state.posts.isLoading ||
      state.user.isLoading ||
      state.menu.isActive ||
      state.error.isError
  );

  const scrollWidthFix = fixScrollWidth(needFixScrollWidth);

  return (
    <main className="main" style={scrollWidthFix}>
      {children}
    </main>
  );
};

export default Main;
